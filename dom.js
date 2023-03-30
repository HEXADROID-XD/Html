//adding items to the list and deleting them

var itemList=document.querySelector('#items')
var form=document.getElementById('addForm')
var filter=document.getElementById('filter')
form.addEventListener('submit', onclick)
itemList.addEventListener('click', deletion)
filter.addEventListener('keyup',filterItems)
function onclick(e)
{
    e.preventDefault();
    var text= document.getElementById('item').value;
    var newList=document.createElement('li')
    newList.className='list-group-item'
    var text1=document.getElementById('item1').value;
    var space=document.createTextNode('1')
    var t=document.createTextNode(text+' '+text1)
    
   

   //  newList.appendChild(document.createTextNode(text.value));
    newList.appendChild(t);
   
   var deletebtn = document.createElement('button')
   deletebtn.className='btn btn-danger btn-sm float-right delete'
   deletebtn.appendChild(document.createTextNode("X"))
   var editbtn=document.createElement('button')
   editbtn.className='btn btn-warning btn-sm float-right edit'
   editbtn.appendChild(document.createTextNode('edit'))
newList.appendChild(editbtn)
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
      if(e.target.classList.contains('edit'))
{
   if(confirm('are you sure to edit this?'))
   {
        var li=e.target.parentElement;
        li.textContent='You just edited this feild'
        var deletebtn = document.createElement('button')
   deletebtn.className='btn btn-danger btn-sm float-right delete'
   deletebtn.appendChild(document.createTextNode("X"))
   var editbtn=document.createElement('button')
   editbtn.className='btn btn-warning btn-sm float-right edit'
   editbtn.appendChild(document.createTextNode('edit'))
li.appendChild(editbtn)
li.appendChild(deletebtn)
   }
}
}

 var listItem=document.querySelectorAll('li')
 for(var i=0;i<listItem.length;i++)
 {
    var editbtn=document.createElement('button')
editbtn.className='btn btn-warning btn-sm float-right edit'
editbtn.appendChild(document.createTextNode('edit'))
 var listItem=document.querySelectorAll('li')
   // listItem[i].appendChild(editbtn)
  // var list=document.querySelector()
  listItem[i].insertBefore(editbtn,listItem[i].children[0])

 }

 function filterItems(e){
   var text= e.target.value.toLowerCase();
   var items=itemList.getElementsByTagName('li');
     Array.from(items).forEach(function(item){
      var itemName=item.firstChild.textContent;
      console.log(itemName);
      if(itemName.toLowerCase().indexOf(text) != -1)
      {
         item.style.display='block';
      }else{
         item.style.display='none'
      }
     })   


 }
 
