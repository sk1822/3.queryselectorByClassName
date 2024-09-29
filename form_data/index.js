// Write your code below:let 
let name= document.getElementById("input1")
let tel= document.getElementById("input2")
let email= document.getElementById("input3")
let time= document.getElementById("input4")
let date= document.getElementById("input5")
let surname= document.getElementById("input6")
let form= document.getElementById("form1")
form.addEventListener('submit',(e)=>{
  e.preventDefault();
console.log(e.target.name.value)
console.log(e.target.tel.value)
console.log(e.target.email.value)
console.log(e.target.time.value)
console.log(e.target.date.value)
console.log(e.target.surname.value)

})
