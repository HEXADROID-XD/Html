//making 2nd Item having green background cololor
const items=document.querySelector('.list-group-item:nth-child(2)');
items.style.backgroundColor='green'

//changing the font color of the second Item to green using querySellectorAll
const list=document.querySelectorAll('.list-group-item');
list[1].style.color='green'

//choosing all the odd items and making the background green
const odd=document.querySelectorAll('.list-group-item:nth-child(odd)')
for(var i=0;i<odd.length;i++)
{
    odd[i].style.backgroundColor='green'
}

