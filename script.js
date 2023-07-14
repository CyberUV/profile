const body = document.querySelector('body');
const darkMode = document.getElementById('darkMode');
const nav = document.querySelector('nav');
const links = document.querySelectorAll('links');
const test816 = document.getElementById('test816');
const ham = document.getElementById('ham');


function dark() {
    console.log("darkmode");
    var circle = document.getElementById('circle');
    darkMode.classList.toggle('darkToggle');
    body.classList.toggle('bodyToggle');
    nav.classList.toggle('navToggle');
    darkMode.classList.toggle('bodyToggle');
    document.getElementById('RprofileInfo').classList.toggle('textToggle');
    document.getElementById('saveBtn').classList.toggle('textToggle');
}

window.addEventListener('scroll', fixNav);

function fixNav() {
    if(window.scrollY > nav.offsetHeight + 150) {
        nav.classList.add('active');
    } else {
        nav.classList.remove('active');
    }
}

var navShow = () =>{
    var ham1 = document.getElementById('ham1');
    var ham2 = document.getElementById('ham2');
    var ham3 = document.getElementById('ham3');
    console.log("check");
    test816.classList.toggle('linkToggle');
    ham1.classList.toggle('ham-lines1');
    ham2.classList.toggle('ham-lines2');
    ham3.classList.toggle('ham-lines3');
}

const save = () =>{
    var notes = document.getElementById('notes');
    // console.log(notes.value);
    val = notes.value;
    localStorage.setItem("mynotes", notes.value);
}
const shownotes = () =>{
    var notes = document.getElementById('notes');
    var loadNotes = localStorage.getItem("mynotes");
    notes.value = loadNotes ;
    // console.log(loadNotes);
}



// const userInfo = ()=>{

//     // Get user agent
// const userAgent = navigator.userAgent;
// console.log("User Agent:", userAgent);

// // Get user's preferred language
// const language = navigator.language;
// console.log("Language:", language);


// // Get screen resolution
// const resolution = {
//   width: window.screen.width,
//   height: window.screen.height
// };
// console.log("Screen Resolution:", resolution);

// // Get user's IP address (requires external service)
// fetch('https://api.ipify.org?format=json')
//   .then(response => response.json())
//   .then(data => {
//     const ipAddress = data.ip;
//     console.log("IP Address:", ipAddress);
//   })
//   .catch(error => {
//     console.error("Error retrieving IP address:", error);
//   });


// // Get browser information
// const browser = {
//   name: navigator.appName,
//   version: navigator.appVersion,
//   codeName: navigator.appCodeName,
//   platform: navigator.platform,
//   cookiesEnabled: navigator.cookieEnabled
// };
// console.table("Browser Information:", browser);
// console.table(browser);

// // Check if the user's browser supports the Clipboard API
// const isClipboardAPISupported = 'clipboard' in navigator;
// console.log("Is Clipboard API Supported:", isClipboardAPISupported);


// // Check if the browser supports the DeviceOrientation API
// if ('DeviceOrientationEvent' in window) {
//     window.addEventListener('deviceorientation', function(event) {
//       const alpha = event.alpha; // Z-axis rotation (in degrees)
//       const beta = event.beta; // X-axis rotation (in degrees)
//       const gamma = event.gamma; // Y-axis rotation (in degrees)
  
//       console.log('Phone Orientation:');
//       console.log('Alpha:', alpha);
//       console.log('Beta:', beta);
//       console.log('Gamma:', gamma);
//     });
//   } else {
//     console.log('DeviceOrientation API is not supported by this browser.');
//   }
  
//   // Check if the browser supports the Geolocation API
// if ('geolocation' in navigator) {
//     navigator.geolocation.getCurrentPosition(function(position) {
//       const latitude = position.coords.latitude;
//       const longitude = position.coords.longitude;
//       const accuracy = position.coords.accuracy;
  
//       console.log('Location Information:');
//       console.log('Latitude:', latitude);
//       console.log('Longitude:', longitude);
//       console.log('Accuracy:', accuracy);
//     }, function(error) {
//       console.log('Error getting location:', error);
//     });
//   } else {
//     console.log('Geolocation API is not supported by this browser.');
//   }

//   const firebaseConfig = {
//     apiKey: "AIzaSyA5634WzqMgV8aSxaeeRHd6spTAhNmHs-c",
//     authDomain: "userinfo-b0012.firebaseapp.com",
//     projectId: "userinfo-b0012",
//     storageBucket: "userinfo-b0012.appspot.com",
//     messagingSenderId: "571643278044",
//     appId: "1:571643278044:web:054af25f6a3ca5f96e3a19",
//     measurementId: "G-3N14W2JRZ8"
//   };


// firebase.initializeApp(firebaseConfig);
// const database = firebase.database();

// // Define the data to be stored
// const user = {
//   name: "John Doe",
//   email: "johndoe@example.com",

//   age: 25
// };

// // Store the data in a specific node (e.g., "users")
// database.ref("users").push(user)
//   .then(() => {
//     console.log("Data stored successfully");
//   })
//   .catch((error) => {
//     console.error("Error storing data:", error);
//   });
  
// }








