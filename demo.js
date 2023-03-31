var form=document.getElementById('my-form')
var listUser=document.getElementById('userList')
var userName=document.getElementById('name')
var userEmail=document.getElementById('email')
var userNumber=document.getElementById('Phone')
listUser.addEventListener('click',deleteUser)

form.addEventListener('submit', onCLick)
var userCount=1;
var localKey='hi';

function onCLick(e){
    e.preventDefault();
    var user={
        name:userName.value,
        email:userEmail.value,
        PhoneNumber:userNumber.value
    }
    var deletebtn=document.createElement('button')
    deletebtn.className='delete'
    var delText=document.createTextNode('delete')
    deletebtn.appendChild(delText)
    var liText=`Name: ${userName.value} Email : ${userEmail.value} Phone NUmber : ${userNumber.value}`
    var objText=JSON.stringify(user)
    var li=document.createElement('li')
    li.className='user-list'
    li.appendChild(document.createTextNode(liText))
    li.appendChild(deletebtn)
    //listUser.appendChild(li)
    listUser.appendChild(li)
    localKey='user'+userCount;
    
    userCount++;
    localStorage.setItem(localKey,objText)
    
    
}
function deleteUser(e){
    if(e.target.classList.contains('delete'))
    {   
        var userIndex;
        for(var i=0;i<Array.from(listUser.children).length;i++)
        {
            if(listUser.children[i]=== e.target.parentElement)
            {
                userIndex=i;
                console.log(userIndex)
            }
        }
        e.target.parentElement.remove();
        var keyLocal='user'+(userIndex+1);
        localStorage.removeItem(keyLocal)
        console.log(keyLocal)
        userCount--;
       // console.log(localKey)
    }
}
