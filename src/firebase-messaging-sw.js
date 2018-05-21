importScripts('https://www.gstatic.com/firebasejs/3.9.0/firebase-messaging.js');
<script src="https://www.gstatic.com/firebasejs/5.0.3/firebase.js"></script>

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyB2KbLGxsU3WtPqPD7TebUo_9rertGqduQ",
    authDomain: "pushdemo-bcc1a.firebaseapp.com",
    databaseURL: "https://pushdemo-bcc1a.firebaseio.com",
    projectId: "pushdemo-bcc1a",
    storageBucket: "",
    messagingSenderId: "128927084883"
  };
  firebase.initializeApp(config);

const messaging = firebase.messaging();
messaging.setBackgroundMessageHandler(function(payload) {
    const title = 'Hello World from SW!';
    const options = {
        body: payload.data.status
    };
    return self.registration.showNotification(title, options);
});
