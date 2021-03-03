import { settingsStorage } from "settings";
import * as messaging from "messaging";
import { me as companion } from "companion";

//Couleur du fond 
let BG_COLOR = "bgColor";
let TXT_COLOR = "txtColor";

//Image des teams
let VIT = "vitality";
let LQD = "liquid";
let G2 = "g2";
let AST = "astralis";
let MBR = "mibr";
let OG = "og";
let SLR = "solary";
let FNC = "fnatic";
let NVI = "navi";
let DRC = "droso";

// Settings have been changed
settingsStorage.addEventListener("change", (evt) => {
  sendValue(evt.key, evt.newValue);
});

// Settings were changed while the companion was not running
if (companion.launchReasons.settingsChanged) {
  // Send the value of the setting
  sendValue(BG_COLOR, settingsStorage.getItem(BG_COLOR));
  sendValue(TXT_COLOR, settingsStorage.getItem(TXT_COLOR));
  sendValue(VIT, settingsStorage.getItem(VIT));
  sendValue(LQD, settingsStorage.getItem(LQD));
  sendValue(G2, settingsStorage.getItem(G2));
  sendValue(AST, settingsStorage.getItem(AST));
  sendValue(MBR, settingsStorage.getItem(MBR));
  sendValue(OG, settingsStorage.getItem(OG));
  sendValue(SLR, settingsStorage.getItem(SLR));
  sendValue(FNC, settingsStorage.getItem(FNC));
  sendValue(NVI, settingsStorage.getItem(NVI));
  sendValue(DRC, settingsStorage.getItem(DRC));
}

function sendValue(key, val) {
  if (val) {
    sendSettingData({
      key: key,
      value: JSON.parse(val)
    });
  }
}
function sendSettingData(data) {
  // If we have a MessageSocket, send the data to the device
  if (messaging.peerSocket.readyState === messaging.peerSocket.OPEN) {
    messaging.peerSocket.send(data);
  }
}
