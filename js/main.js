
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAATm2RPM3DyniLNxmEEHDjlrRiWpzW444",
    authDomain: "portfolio-47e46.firebaseapp.com",
    databaseURL: "https://portfolio-47e46.firebaseio.com",
    projectId: "portfolio-47e46",
    storageBucket: "portfolio-47e46.appspot.com",
    messagingSenderId: "736482575256",
    appId: "1:736482575256:web:77e83913ff3fe124faa1ed",
    measurementId: "G-Q653FBRPZM"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  //make auth and firestore references
  const auth =firebase.auth();
  const db = firebase.firestore();
  //update firestore settings
  db.settings({timestampsInSnapshots: true});

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form function here
function submitForm(e){
  e.preventDefault();

  // Get values
  var name = document.getElementById('name').value; //getInputVal('name');
  
  var email = getInputVal('email');
  
  var message = getInputVal('message');

  // Save message
  saveMessage(name, email, message);

  // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);

  // Clear form
  document.getElementById('contactForm').reset();

  //redirect to home page

  setTimeout(function(){
    document.location.href="../homepage.html";
  },3050);

  
}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, email, message){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    email:email,
    message:message
  });
}
