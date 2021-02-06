import clock from "clock";
import document from "document";
import { HeartRateSensor } from "heart-rate";
import { display } from "display";
import { me as appbit } from "appbit";
import { today } from "user-activity";
import * as messaging from "messaging";
import document from "document";

//Récupération de la date et de l'heure à la seconde près
clock.granularity = "seconds"; // seconds, minutes, hours

//Récupération des éléments affichés 
const clockLabel = document.getElementById("clock-label");
const hrmLabel = document.getElementById("hrm-label");
const caloriesLabel = document.getElementById("calories-label");
const dateLabel = document.getElementById("date-label");
const bgColor = document.getElementById("bgColor");
const bgImage = document.getElementById("bg-image");
const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

//Affichage de l'heure et de la date
clock.addEventListener("tick", (evt) => {
  clockLabel.text = evt.date.toTimeString().slice(0, -4);
  
  let dayName = evt.date.toString().split(' ')[0];
  let day = evt.date.getDay();
  dateLabel.text = dayName + ", " + day + " " + monthNames[evt.date.getMonth()];
});

//Affichage du capteur de battements cardiaques
if (HeartRateSensor && appbit.permissions.granted("access_heart_rate")) {
  const hrm = new HeartRateSensor();
  hrm.addEventListener("reading", () => {
    hrmLabel.text = hrm.heartRate;
  });
  display.addEventListener("change", () => {
    // Automatically stop the sensor when the screen is off to conserve battery
    display.on ? hrm.start() : hrm.stop();
  });
  hrm.start();
}

//Affichage du nombre de calories 
if (appbit.permissions.granted("access_activity")) {
  caloriesLabel.text = today.adjusted.calories;
}

//Modification du style
messaging.peerSocket.addEventListener("message", (evt) => {
  //Modification de la couleur du fond 
  if (evt && evt.data && evt.data.key === "bgColor") {
    bgColor.style.fill = evt.data.value;
  }
  //Modification de la couleur du texte
  else if(evt && evt.data && evt.data.key === "txtColor") {
    clockLabel.style.fill = evt.data.value;
    hrmLabel.style.fill = evt.data.value;
    caloriesLabel.style.fill = evt.data.value;
    dateLabel.style.fill = evt.data.value;
  }
  //Modification du fond d'écran
  else {
    bgImage.image = "team/"+evt.data.key+".png";
  }
});