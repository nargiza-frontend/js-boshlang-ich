alert("Iltimos ma'lumotlaringizni kiriting!")
var firstName=prompt("First-name:");
var lastName=prompt("Last-name:");
var fullName=prompt("Full-name:");
var age=prompt("Age:");
var address=prompt("Address:");
var email=prompt("Email:");
var phone=prompt("Phone-number:");

document.getElementById("first-name").innerHTML = firstName;
document.getElementById("last-name").innerHTML = lastName;
document.getElementById("full-name").innerHTML = fullName;
document.getElementById("age").innerHTML = age;
document.getElementById("address").innerHTML = address;
document.getElementById("email").innerHTML = email;
document.getElementById("phone-number").innerHTML = phone;
document.getElementById("about-your").innerHTML = `${lastName} ${firstName}  ${fullName}1992-yilda Quva tumanida tug'ilgan. hozir ${age} yoshda ${address}ida yashaydi. Murojaat uchun: ${email} ${phone}`
