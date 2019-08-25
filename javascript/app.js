console.log("hello")

 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyC-yeJ7E2DP8Jz0DmF5l-uX1cCj0UF6SsI",
    authDomain: "trains-50b54.firebaseapp.com",
    databaseURL: "https://trains-50b54.firebaseio.com",
    projectId: "trains-50b54",
    storageBucket: "https://trains-50b54.firebaseio.com",
    messagingSenderId: "278129937202",
    appId: "1:278129937202:web:48a56853bbd1889e"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
 

  let trainData = firebase.database();

  $("#submit").on("click", function(event){
      event.preventDefault();

      let trainName = $("#train-name").val().trim();
      alert(trainName)
      let destinationName = $("#destination-name"). val().trim();
      alert(destinationName)
      let firstTrain = $("#first-train-name").val().trim(); 
     alert(firstTrain)
      let frequency = $("#frequency").val().trim();
      alert(frequency)

      let newTrain = {
          name: trainName,
          destination: destinationName,
          firstTrain: firstTrain,
          frequency: frequency
      }

      console.log(newTrain)

      trainData.ref().push(newTrain);
      alert("Train added");
      

  })


trainData.ref().on("child_added", function(snapshots, previousChild){
    let tName = snapshots.val().name;
    let tDestination = snapshots.val().destination
    let tFrequency = snapshots.val().frequency;
    let tFirstName = snapshots.val().firstTrain;

    
    var timeArr = tFirstTrain.split(":");
  var trainTime = moment()
    .hours(timeArr[0])
    .minutes(timeArr[1]);
  var maxMoment = moment.max(moment(), trainTime);
  var tMinutes;
  var tArrival;




})
