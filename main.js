const myForm =document.querySelector('#my-form')
const nameInput = document.querySelector("#name")
const emailInput=document.querySelector("#email")
const msg = document.querySelector('.msg')
const btn=document.querySelector('.btn')
const userList = document.querySelector('#users');


myForm.addEventListener('submit', onSubmit)

function onSubmit(e) {
    e.preventDefault();
    
    if(nameInput.value === '' || emailInput.value === '') {
      msg.classList.add('error');
      msg.innerHTML = 'Please enter all fields';

      setTimeout(() => msg.remove(), 3000);
    } else {
      console.log(`${nameInput.value} ${emailInput.value}`)
      let user={
        name:nameInput.value,
        email:emailInput.value
      }
      var user_serialized=JSON.stringify(user)
      localStorage.setItem('user details',user_serialized)
      console.log(JSON.parse(localStorage.getItem('user details')))
    }
    
  }
   