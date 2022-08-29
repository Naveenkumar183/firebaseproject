//listen for form submit
const firebaseConfig = {
    apiKey: "AIzaSyBnfHhZAQasOLPVHcsZi09POv7QuWGq0zk",
    authDomain: "rapid-pact-360216.firebaseapp.com",
    databaseURL: "https://rapid-pact-360216-default-rtdb.firebaseio.com",
    projectId: "rapid-pact-360216",
    storageBucket: "rapid-pact-360216.appspot.com",
    messagingSenderId: "300208781281",
    appId: "1:300208781281:web:19e28b2bbe03b0abd1c4a0",
    measurementId: "G-377VXGTQGZ"
  };

  // Initialize Firebase
   firebase.initializeApp(firebaseConfig);

  const firebasedb=firebase.database().ref("contactform")

document.getElementById("info").addEventListener("submit",submitform);

function submitform(e){
    e.preventDefault();
   // console.log(123);S
   var name=getvalue("name");
   var company=getvalue("company");
   var email=getvalue("email");
   var phone=getvalue("number");
   var message=getvalue("fool");

   savemessage(name,company,email,phone,message);

   document.querySelector(".alert").style.display="block";
   
   setTimeout(function(){
    document.querySelector(".alert").style.display="none";
   },3000)
   
}

//sending to firebase database

function savemessage(name,company,email,phone,message){
    var newfirebasedb=firebasedb.push();
     newfirebasedb.set({
        name:name,
        company:company,
        email:email,
        phone:phone,
        message:message,

     })

}

//function to get form value
function getvalue(id){
    return document.getElementById(id).value;
}