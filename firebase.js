// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCxknpKJ-sWlB7g0e-boUO13EoGmnNzsk4",
    authDomain: "myprofile-2ccc5.firebaseapp.com",
    projectId: "myprofile-2ccc5",
    storageBucket: "myprofile-2ccc5.appspot.com",
    messagingSenderId: "261353010546",
    appId: "1:261353010546:web:8ec313fd090b935cc319eb",
    measurementId: "G-T1RHFNSP44"
  };


firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();



const savedata = (e)=>{
  const inp1 = document.getElementById('inp1').value;
  const inp2 = document.getElementById('inp2').value;
  const inp3 = document.getElementById('inp3').value;
    
    console.log("store");

    // db.collection("check").doc(inp1+inp2).set({
    //     name:inp1,
    //     age:inp2,
    //     area:inp3
    // })
    // .then((docId) =>{
    //     console.log("docId = "+ docId);
    // })
    // .catch((err) =>{
    //     console.log(err);
    // })

    // Add a new document in collection "cities"


    // costume userId = 
}

// Reference to Firebase Storage bucket
const storage = firebase.storage();
const storageRef = storage.ref();

const downloadButton = document.getElementById("downloadButton");

downloadButton.addEventListener("click", () => {
  // Replace 'your-document-path' with the path to your document in Firebase Storage.
  const fileRef = storageRef.child("gs://myprofile-2ccc5.appspot.com/Coke-Studio-Season-14-Pasoori-Ali-Sethi-x-Shae-Gill.m4a");

  fileRef.getDownloadURL()
    .then((url) => {
      // Create a hidden link and trigger a click to download the file.
      const a = document.createElement("a");
      a.href = url;
      a.download = "document.pdf"; // Change the filename as needed.
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    })
    .catch((error) => {
      console.error("Error downloading file: ", error);
    });
});
