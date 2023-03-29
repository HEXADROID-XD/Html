var title= document.getElementById('header-title')
title.style.borderBottom='3px solid black'
title.innerText="hello"
title.style.fontFamily='courier'
title.style.fontSize='60px'
title.style.textAlign='center'

var items=document.getElementsByClassName('title')
items[0].innerHTML='<strong>Add Items</strong>'
items[0].style.color='green'

var list=document.getElementsByClassName("list-group-item");
list[2].style.backgroundColor='green'
for(let i=0;i<list.length;i++)
{
    list[i].style.fontWeight='bold'
}