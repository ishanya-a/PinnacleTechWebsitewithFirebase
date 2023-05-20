const firebaseConfig = {
    apiKey: "AIzaSyAXY9G5Fi9srfmxF0F3zfy_AAaooMrDAU0",
    authDomain: "newbiz-website-6d5e0.firebaseapp.com",
    databaseURL: "https://newbiz-website-6d5e0-default-rtdb.firebaseio.com",
    projectId: "newbiz-website-6d5e0",
    storageBucket: "newbiz-website-6d5e0.appspot.com",
    messagingSenderId: "201544526295",
    appId: "1:201544526295:web:eb786539dd205ae02cc392",
    measurementId: "G-95PBRCWLWR"
  };

firebase.initializeApp(firebaseConfig);
var contactFromDB = firebase.database().ref('contactForm');

document.getElementById('contactForm').addEventListener('submit', submitForm);

function submitForm(e){
    e.preventDefault();

    var name = getElementVal('name');
    var email = getElementVal('email');
    var subject = getElementVal('subject');
    var message = getElementVal('message');

    // console.log(name, email, subject, message);
    
    saveMessages(name, email, subject, message);

    document.querySelector('.alert').style.display = "block";

    setTimeout(() => {
        document.querySelector('.alert').style.display = "none";
    },3000);


    document.getElementById('contactForm').reset();
}


const saveMessages = (name, email, subject, message) => {
    var newContactForm = contactFromDB.push();

    newContactForm.set({
        name : name,
        email : email,
        subject: subject,
        message: message,
    });
};

const getElementVal = (id) => {
    return document.getElementById(id).value;
};