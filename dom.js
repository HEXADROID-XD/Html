//adding items to the list and deleting them

var itemList=document.querySelector('#items')
var form=document.getElementById('addForm')

form.addEventListener('submit', onclick)
itemList.addEventListener('click', deletion)

function onclick(e)
{
    e.preventDefault();
    var text= document.getElementById('item');
    var newList=document.createElement('li')
    newList.className='list-group-item'
    newList.appendChild(document.createTextNode(text.value));
   
   var deletebtn = document.createElement('button')
   deletebtn.className='btn btn-danger btn-sm float-right delete'
   deletebtn.appendChild(document.createTextNode("X"))

newList.appendChild(deletebtn)
   
   itemList.appendChild(newList)
   
}
function deletion(e)
{
      if(e.target.classList.contains('delete'))
      {
        if(confirm('are you sure to delete this item?'))
        {
            var li=e.target.parentElement;
            li.remove()
        }
      }
}

 var listItem=document.querySelectorAll('li')
 for(var i=0;i<listItem.length;i++)
 {
    var editbtn=document.createElement('button')
editbtn.className='btn btn-warning btn-sm float-right delete'
editbtn.appendChild(document.createTextNode('edit'))
 var listItem=document.querySelectorAll('li')
    listItem[i].appendChild(editbtn)
    console.log(listItem[i])
 }
