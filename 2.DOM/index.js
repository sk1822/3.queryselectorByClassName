// Watch this video to understand DOM:
// What is DOM?
// Watch this video to understand the getElementById Method:
// getElementById Method

// Deliverable:
// 1. Change the main heading 'Fruit Shop' to 'Fruit World'
// 2. Change the font color of 'Fruit World' from black to orange
// 3. Change background color of div with id = "header" to green color
// 4. Add a bottom border of orange color to div with id = "header"
// 5. Change the font color of 'Fruits In Basket' from black to green
// 6. Introduce a paragraph element with text "Please visit us again" inside the div with id = "thanks"
// Write your code below:
// Write your code below:
let fruitworld=document.getElementById('main-heading')
fruitworld.innerHTML='Fruit World';
fruitworld.style.color = "orange";
let head = document.getElementById("head");
let header=document.getElementById('header');
header.style.backgroundColor='green';
header.style.borderBottom='2px solid orange';
let basket=document.getElementById('basket-heading');
basket.style.color='green';
let thanks=document.getElementById('thanks');
thanks.innerHTML='<p>Please visit us again</p>';
// or


