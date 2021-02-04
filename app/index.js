//All import needed
import clock from "clock";
import document from "document";
import { HeartRateSensor } from "heart-rate";
import { display } from "display";
import { me as appbit } from "appbit";
import { today } from "user-activity";

//Get the date every second 
clock.granularity = "seconds"; // seconds, minutes, hours

//Const which gets all elements needed
const clockLabel = document.getElementById("clock-label");
const hrmLabel = document.getElementById("hrm-label");
const caloriesLabel = document.getElementById("calories-label");
const dateLabel = document.getElementById("date-label");

//Array containing all months
const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

//Print date and time every second
clock.addEventListener("tick", (evt) => {
  //Print time
  clockLabel.text = evt.date.toTimeString().slice(0, -4);
  
  //Print date
  let dayName = evt.date.toString().split(' ')[0];
  let day = evt.date.getDay();
  dateLabel.text = dayName + ", " + day + " " + monthNames[evt.date.getMonth()];
});

//Print heart rate
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

//Print calories
if (appbit.permissions.granted("access_activity")) {
  caloriesLabel.text = today.adjusted.calories;
}