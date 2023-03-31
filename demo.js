var form=document.getElementById('my-form')
var listUser=document.getElementById('userList')
var userName=document.getElementById('name')
var userEmail=document.getElementById('email')
var userNumber=document.getElementById('Phone')

form.addEventListener('submit', onCLick)
var userCount=1;
function onCLick(e){
    e.preventDefault();
    var user={
        name:userName.value,
        email:userEmail.value,
        PhoneNumber:userNumber.value
    }
    var objText=JSON.stringify(user)
    var li=document.createElement('li')
    li.className='user-list'
    li.appendChild(document.createTextNode(objText))
    listUser.appendChild(li)
    var localKey='user'+userCount;
    userCount++;
    localStorage.setItem(localKey,objText)
    
}