import React from 'react';
import FullPage from './components/FullPage'
import firebase from 'firebase'

function App() {
    // Your web app's Firebase configuration
    var firebaseConfig = {
      apiKey: "AIzaSyCum5luIS4MneOVL6ImydsU5vahy_35Nhk",
      authDomain: "portfolio-5398f.firebaseapp.com",
      databaseURL: "https://portfolio-5398f.firebaseio.com",
      projectId: "portfolio-5398f",
      storageBucket: "portfolio-5398f.appspot.com",
      messagingSenderId: "687254159962",
      appId: "1:687254159962:web:9dc99a102d94aef6590e63",
      measurementId: "G-KSF98QQQR3"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();

  return (
    <div className="App">
      < FullPage />
    </div>
  );
}

export default App;
