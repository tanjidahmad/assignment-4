###1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

 -getElementById:select one element using its ID and return a single element.
 -getElementsByClassName:select elements using class name and return a live HTMLcollection this is auto updates.
 -querySelector:this is css selector which selects the first element maching.
 -querySelectorAll():this is all element matching and return nodelist this is not auto update.


 ###2. How do you create and insert a new element into the DOM?

 -create element using createElement(),add content then insert it using appendChild().

 ###3. What is Event Bubbling? And how does it work?
 -this is a process where an event starts from the target element and then bubbles up it parents element.
 when i click child element then event is triggered on the child element then its parents then the higher ancestor.

 ###4. What is Event Delegation in JavaScript? Why is it useful?
 -This is a technique where a parent element handle events for its child element .this time it is use event bubbling ,,,it improves performance,code clean and handle element added later with javascript.


 ###5. What is the difference between preventDefault() and stopPropagation() methods?
 -preventDefault():first stop default browser action,this time does not stop event bubbling this only use form submission and link opening.

 -stopPropagation():main works stop event bubbling to parent element ,does not stop default behavior also used to control event flow.


