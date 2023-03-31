var form=document.getElementById('my-form')
var listUser=document.getElementById('userList')
var userName=document.getElementById('name')
var userEmail=document.getElementById('email')
var userNumber=document.getElementById('Phone')
listUser.addEventListener('click',deleteUser)
listUser.addEventListener('click',editUser)

form.addEventListener('submit', onCLick)
var userCount=0;
var localKey='';
var keyEmails=[]

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
    var editbtn=document.createElement('button')
    editbtn.className='edit'
    editbtn.appendChild(document.createTextNode('edit'))
    var liText=`Name: ${userName.value} Email : ${userEmail.value} Phone NUmber : ${userNumber.value}`
    var objText=JSON.stringify(user)
    var li=document.createElement('li')
    li.className='user-list'
    li.appendChild(document.createTextNode(liText))
    
    li.appendChild(deletebtn)
    li.appendChild(editbtn)
    //listUser.appendChild(li)
    listUser.appendChild(li)
    
    localKey='user'+userCount;
    
    userCount++;
    localStorage.setItem(userEmail.value,objText)
    keyEmails.push(userEmail.value)
    userName.value=''
    userEmail.value=''
    userNumber.value=''
    
    
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
                
            }
        }
        var keyIndex=[]
        

        e.target.parentElement.remove();
       // var keyLocal='user'+(userIndex+1);
        localStorage.removeItem(keyEmails[userIndex])
        for(var i=0;i<keyEmails.length;i++)
        {
            if(keyEmails[i]==keyEmails[userIndex])
            {
                continue;
            }else{
                keyIndex.push(keyEmails[i])
            }
        }
        keyEmails=keyIndex;
        // console.log(keyLocal)
         
       // console.log(localKey)
    }
}
function editUser(e){
    if(e.target.classList.contains('edit'))
    {   
        var userIndex;
        for(var i=0;i<Array.from(listUser.children).length;i++)
        {
            if(listUser.children[i]=== e.target.parentElement)
            {
                userIndex=i;
                
            }
        }
        var keyIndex=[]
        

        e.target.parentElement.remove();
       // var keyLocal='user'+(userIndex+1);
       userName.value=JSON.parse(localStorage.getItem(keyEmails[userIndex])).name;
       userEmail.value=JSON.parse(localStorage.getItem(keyEmails[userIndex])).email;
       userNumber.value=JSON.parse(localStorage.getItem(keyEmails[userIndex])).PhoneNumber;
        localStorage.removeItem(keyEmails[userIndex])
        for(var i=0;i<keyEmails.length;i++)
        {
            if(keyEmails[i]==keyEmails[userIndex])
            {
                continue;
            }else{
                keyIndex.push(keyEmails[i])
            }
        }
        keyEmails=keyIndex;
        // console.log(keyLocal)
         
       // console.log(localKey)
    }
}
