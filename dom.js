const itemList=document.querySelector('#items')
// // //parent element

// console.log(itemList.parentNode.parentNode.parentNode.parentNode)
// itemList.parentElement.style.backgroundColor='#f4f4f4'

// //lastElementchild
// itemList.lastElementChild.style.color='red'
// //lastChild
// console.log(itemList.lastChild)
// itemList.lastChild.remove()

//firstElementChild
//console.log(itemList.firstElementChild)
// itemList.firstElementChild.style.backgroundColor='red'
//nextElementSibling
// console.log(itemList.nextElementSibling)
// //previousElementSibling
// console.log(itemList.previousElementSibling)
// itemList.previousElementSibling.innerText='ADD MORE'
// itemList.previousElementSibling.style.fontFamily='courier'
//create element
const newDiv=document.createElement('div')
//addingclass
newDiv.className= 'hello'
//adding id
newDiv.id= 'hello1'
//adding atttribute
newDiv.setAttribute('title','gi')
//creating textnode
var text=document.createTextNode('HEllo')
//adding text to new div
newDiv.appendChild(text);
console.log(newDiv)
//adding this div before Item lister
// var container=document.querySelector('header .container')
// var h1=document.querySelector('header h1')
// container.insertBefore(newDiv,h1)
//adding before 1st item
var container=document.querySelector('ul #items')
var li=document.querySelector('ul li')
container.insertBefore(newDiv,li)
