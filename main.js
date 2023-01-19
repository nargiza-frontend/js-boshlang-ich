// alert("Iltimos ma'lumotlaringizni kiriting!")
// var firstName=prompt("First-name:");
// var lastName=prompt("Last-name:");
// var fullName=prompt("Full-name:");
// var age=prompt("Age:");
// var address=prompt("Address:");
// var email=prompt("Email:");
// var phone=prompt("Phone-number:");

// document.getElementById("first-name").innerHTML = firstName;
// document.getElementById("last-name").innerHTML = lastName;
// document.getElementById("full-name").innerHTML = fullName;
// document.getElementById("age").innerHTML = age;
// document.getElementById("address").innerHTML = address;
// document.getElementById("email").innerHTML = email;
// document.getElementById("phone-number").innerHTML = phone;
// document.getElementById("about-your").innerHTML = `${lastName} ${firstName}  ${fullName}1992-yilda Quva tumanida tug'ilgan. hozir ${age} yoshda ${address}ida yashaydi. Murojaat uchun: ${email} ${phone}`
const eltext="Good Bye"
const elSiteHeading=document.querySelector('.site-heading');
const elDarkMode=document.querySelector('.dark-mode')
const elBodyColorBtn=document.querySelector('.body-color-btn');
const elSiteBtn=document.querySelector('.site-btn');

elBodyColorBtn.addEventListener('click',function(){
  document.body.classList.toggle('dark-mode');
  elBodyColorBtn.textContent="This is black body"
})
elSiteBtn.addEventListener('click',function(){
  elSiteHeading.textContent = eltext;
  elSiteBtn.textContent="Hello"
  document.elSiteBtn.toggle(eltext)
})
