var translationObj = {
  EN: {
    Form: [
      "Your Team Number",
      "Robot Team Number",
      "Test",
      "Practice Field",
      "Practice Match",
      "Qualification",
      "Quarterfinal",
      "Semifinal",
      "Final",
      "Match Number",
      "Start",
      "Back",
      "Single QR",
      "Undo",
      "Do you want to stop?",
      "Stop Recording",
      "Finish Recording",
      "Continue Recording"
    ],
    EventTitles: [
      "Auto Climbed Ramp",
      "Auto Balanced Ramp",
      "Picked up Note",
      "Dropped Note",
      "Picked up Note",
      "Dropped Note",
      "Scored on Cargo Ship",
      "Failed on Cargo Ship",
      "Scored AMP",
      "Failed on Grid Lvl 1",
      "Scored SPEAKER",
      "Failed on Grid Lvl 2",
      "Scored TRAP",
      "Failed on Grid Lvl 3",
      "Climbed Chain",
      "Balanced",
      "Hab Climb Lvl 3",
      "Failed Ramp Climb",
      "Played Defense",
      "Crossed Over Ramp"
    ],
    ButtonName: [
      "Auto Leave",
      "Auto score Speaker",
      "Picked up Note",
      "Dropped Note",
      "Picked up Note",
      "Dropped Note",
      "Scored on Cargo Ship",
      "Failed",
      "Scored AMP",
      "Failed",
      "Scored SPEAKER",
      "Failed",
      "Scored TRAP",
      "Failed",
      "Climbed Chain",
      "Balanced",
      "Lvl 3",
      "Failed",
      "Crossed Over Line",
      "Played Defense"
    ]
  }
};
var chosenTranslationObj = {};
if(localStorage.lang == null) {
  chosenTranslationObj = translationObj.EN;
}
else {
  chosenTranslationObj = translationObj[localStorage.lang];
}
