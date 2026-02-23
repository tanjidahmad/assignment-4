
let interviewList = [];
let rejectedList = [];
let currentFilter = "all";

const total = document.getElementById("total");
const interviewCount = document.getElementById("interviewCount");
const rejectedCount = document.getElementById("rejectedCount");
const jobContainer = document.getElementById("jobContainer");
const emptyState = document.getElementById("emptyState");

function updateCounts() {
  const totalJobs = jobContainer.children.length;

  total.innerText = totalJobs;
  interviewCount.innerText = interviewList.length;
  rejectedCount.innerText = rejectedList.length;  
  const visibleCards = [...document.querySelectorAll(".job")]
    .filter(card => card.style.display !== "none").length;
  const jobsText =
    currentFilter === "all"
      ? `${totalJobs} jobs`
      : `${visibleCards} of ${totalJobs} jobs`;

  document.getElementById("jobsCount").innerText = jobsText;

  toggleEmptyState();
}

function toggleEmptyState() {
  const visibleCards = [...document.querySelectorAll(".job")]
    .filter(card => card.style.display !== "none");

  emptyState.classList.toggle("hidden", visibleCards.length !== 0);
}

function toggleFilter(filter) {
  currentFilter = filter;

  document.querySelectorAll(".filter-btn").forEach(btn => {
    btn.classList.remove("bg-blue-600", "text-white",);
    btn.classList.add("bg-gray-300","text-gray-700");
  });

  const activeBtn = document.getElementById(filter + "-btn");
  activeBtn.classList.remove("bg-gray-300","text-gray-700");
  activeBtn.classList.add("bg-blue-600", "text-white");

  document.querySelectorAll(".job").forEach(card => {
    const status = card.querySelector(".status").innerText.toLowerCase();
    card.style.display =
      filter === "all" || status.includes(filter) ? "flex" : "none";
  });

  toggleEmptyState();
  updateCounts();
}

jobContainer.addEventListener("click", e => {
  const card = e.target.closest(".job");
  if (!card) return;

  const company = card.querySelector(".company").innerText;

  
  if (e.target.classList.contains("interview-btn")) {
    card.querySelector(".status").innerHTML =
      `<span class="bg-green-100 text-green-700 px-2 py-1 rounded text-sm">Interview</span>`;

    if (!interviewList.includes(company)) interviewList.push(company);
    rejectedList = rejectedList.filter(c => c !== company);
  }

  
  if (e.target.classList.contains("rejected-btn")) {
    card.querySelector(".status").innerHTML =
      `<span class="bg-red-100 text-red-700 px-2 py-1 rounded text-sm">Rejected</span>`;

    if (!rejectedList.includes(company)) rejectedList.push(company);
    interviewList = interviewList.filter(c => c !== company);
  }


  if (e.target.closest(".delete-btn")) {
    card.remove();
    interviewList = interviewList.filter(c => c !== company);
    rejectedList = rejectedList.filter(c => c !== company);
  }

  updateCounts();
  toggleFilter(currentFilter);
});

updateCounts();