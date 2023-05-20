const firebaseConfig1 = {
    apiKey: "AIzaSyAXY9G5Fi9srfmxF0F3zfy_AAaooMrDAU0",
    authDomain: "newbiz-website-6d5e0.firebaseapp.com",
    databaseURL: "https://newbiz-website-6d5e0-default-rtdb.firebaseio.com",
    projectId: "newbiz-website-6d5e0",
    storageBucket: "newbiz-website-6d5e0.appspot.com",
    messagingSenderId: "201544526295",
    appId: "1:201544526295:web:eb786539dd205ae02cc392",
    measurementId: "G-95PBRCWLWR"
  };

firebase.initializeApp(firebaseConfig1);
var subscribeFromDB = firebase.database().ref('subscribeForm');

document.getElementById('subscribeForm').addEventListener('submit', submitForm1);

function submitForm1(e){
    e.preventDefault();

    var subemail = getElementVal1('subemail');

    console.log(name, email, subject, message);
    
    saveMessages1(subemail);

    document.getElementById('subscribeForm').reset();
}


const saveMessages1 = (subemail) => {
    var newsubscribeForm = subscribeFromDB.push();

    newsubscribeForm.set({
        subemail : subemail,
    });
};

const getElementVal1 = (id) => {
    return document.getElementById(id).value;
};