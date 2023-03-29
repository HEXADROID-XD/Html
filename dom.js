// 
//using getElementsByClassName
var list=document.getElementsByClassName("list-group-item");

for(let i=0;i<list.length;i++)
{
    list[i].style.backgroundColor='#ccc'
}
//usunig getElementByTagName
var list1=document.getElementsByTagName('li')
for(let i=0;i<list1.length;i++)
{
    list1[i].style.backgroundColor='#ccc'
}