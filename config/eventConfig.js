var eventConfig =
{
  events: [
    {
      eventName:"habLine1",
      eventTitle:chosenTranslationObj.EventTitles[0],
      eventKey:"a",
      variableLink:[]
    },
    // {
    //   eventName:"habLine2",
    //   eventTitle:chosenTranslationObj.EventTitles[1],
    //   eventKey:"b",
    //   variableLink:[]
    // },
    {
      eventName:"cargoUp",
      eventTitle:chosenTranslationObj.EventTitles[2],
      eventKey:"c",
      variableLink:[{"var":"cargoCount","amt":1},{"var":"hatchCount","amt":-1}]
    },
    {
      eventName:"cargoDrop",
      eventTitle:chosenTranslationObj.EventTitles[3],
      eventKey:"d",
      variableLink:[{"var":"cargoCount","amt":-1}]
    },
    // {
    //   eventName:"hatchUp",
    //   eventTitle:chosenTranslationObj.EventTitles[4],
    //   eventKey:"e",
    //   variableLink:[{"var":"cargoCount","amt":-1},{"var":"hatchCount","amt":1}]
    // },
    // {
    //   eventName:"hatchDrop",
    //   eventTitle:chosenTranslationObj.EventTitles[5],
    //   eventKey:"f",
    //   variableLink:[{"var":"hatchCount","amt":-1}]
    // },
    {
      eventName:"shipSuccess",
      eventTitle:chosenTranslationObj.EventTitles[6],
      eventKey:"g",
      variableLink:[{"var":"cargoCount","amt":-1},{"var":"hatchCount","amt":-1}]
    },
    {
      eventName:"shipFail",
      eventTitle:chosenTranslationObj.EventTitles[7],
      eventKey:"h",
      variableLink:[{"var":"cargoCount","amt":-1},{"var":"hatchCount","amt":-1}]
    },
    {
      eventName:"rocket1Success",
      eventTitle:chosenTranslationObj.EventTitles[8],
      eventKey:"i",
      variableLink:[{"var":"cargoCount","amt":-1},{"var":"hatchCount","amt":-1}]
    },
    {
      eventName:"rocket1Fail",
      eventTitle:chosenTranslationObj.EventTitles[9],
      eventKey:"j",
      variableLink:[{"var":"cargoCount","amt":-1},{"var":"hatchCount","amt":-1}]
    },
    {
      eventName:"rocket2Success",
      eventTitle:chosenTranslationObj.EventTitles[10],
      eventKey:"k",
      variableLink:[{"var":"cargoCount","amt":-1},{"var":"hatchCount","amt":-1}]
    },
    {
      eventName:"rocket2Fail",
      eventTitle:chosenTranslationObj.EventTitles[11],
      eventKey:"l",
      variableLink:[{"var":"cargoCount","amt":-1},{"var":"hatchCount","amt":-1}]
    },
    {
      eventName:"rocket3Success",
      eventTitle:chosenTranslationObj.EventTitles[12],
      eventKey:"m",
      variableLink:[{"var":"cargoCount","amt":-1},{"var":"hatchCount","amt":-1}]
    },
    {
      eventName:"rocket3Fail",
      eventTitle:chosenTranslationObj.EventTitles[13],
      eventKey:"n",
      variableLink:[{"var":"cargoCount","amt":-1},{"var":"hatchCount","amt":-1}]
    },
    {
      eventName:"habClimb1",
      eventTitle:chosenTranslationObj.EventTitles[14],
      eventKey:"o",
      variableLink:[]
    },
    // {
    //   eventName:"habClimb2",
    //   eventTitle:chosenTranslationObj.EventTitles[15],
    //   eventKey:"p",
    //   variableLink:[]
    // },
    {
      eventName:"habClimb3",
      eventTitle:chosenTranslationObj.EventTitles[16],
      eventKey:"q",
      variableLink:[]
    },
    {
      eventName:"habClimbFail",
      eventTitle:chosenTranslationObj.EventTitles[17],
      eventKey:"r",
      variableLink:[]
    },
    {
      eventName:"defend",
      eventTitle:chosenTranslationObj.EventTitles[18],
      eventKey:"s",
      variableLink:[]
    },
    {
      eventName:"crossField",
      eventTitle:chosenTranslationObj.EventTitles[19],
      eventKey:"t",
      variableLink:[]
    }
  ],
  layouts: [
    {
      eventName:"habLine1",
      buttonName:chosenTranslationObj.ButtonName[0],
      groupName:"habline",
      heightWeight:1,
      widthWeight:0.5
    },
    // {
    //   eventName:"habLine2",
    //   buttonName:chosenTranslationObj.ButtonName[1],
    //   groupName:"habline",
    //   heightWeight:1,
    //   widthWeight:0.5
    // },
    {
      eventName:"cargoUp",
      buttonName:chosenTranslationObj.ButtonName[2],
      groupName:"cargo",
      heightWeight:1,
      widthWeight:0.55
    },
    {
      eventName:"cargoDrop",
      buttonName:chosenTranslationObj.ButtonName[3],
      groupName:"cargo",
      heightWeight:1,
      widthWeight:0.45
    },
    // {
    //   eventName:"hatchUp",
    //   buttonName:chosenTranslationObj.ButtonName[4],
    //   groupName:"hatch",
    //   heightWeight:1,
    //   widthWeight:0.55
    // },
    // {
    //   eventName:"hatchDrop",
    //   buttonName:chosenTranslationObj.ButtonName[5],
    //   groupName:"hatch",
    //   heightWeight:1,
    //   widthWeight:0.45
    // },
   /* {
      eventName:"shipSuccess",
      buttonName:chosenTranslationObj.ButtonName[6],
      groupName:"ship",
      heightWeight:1,
      widthWeight:0.7
    },
    {
      eventName:"shipFail",
      buttonName:chosenTranslationObj.ButtonName[7],
      groupName:"ship",
      heightWeight:1,
      widthWeight:0.3
    },*/
    {
      eventName:"rocket1Success",
      buttonName:chosenTranslationObj.ButtonName[8],
      groupName:"rocket1",
      heightWeight:1,
      widthWeight:0.7
    },
    {
      eventName:"rocket1Fail",
      buttonName:chosenTranslationObj.ButtonName[9],
      groupName:"rocket1",
      heightWeight:1,
      widthWeight:0.3
    },
    {
      eventName:"rocket2Success",
      buttonName:chosenTranslationObj.ButtonName[10],
      groupName:"rocket2",
      heightWeight:1,
      widthWeight:0.7
    },
    {
      eventName:"rocket2Fail",
      buttonName:chosenTranslationObj.ButtonName[11],
      groupName:"rocket2",
      heightWeight:1,
      widthWeight:0.3
    },
    {
      eventName:"rocket3Success",
      buttonName:chosenTranslationObj.ButtonName[12],
      groupName:"rocket3",
      heightWeight:1,
      widthWeight:0.7
    },
    {
      eventName:"rocket3Fail",
      buttonName:chosenTranslationObj.ButtonName[13],
      groupName:"rocket3",
      heightWeight:1,
      widthWeight:0.3
    },
    {
      eventName:"habClimb1",
      buttonName:chosenTranslationObj.ButtonName[14],
      groupName:"habclimb",
      heightWeight:1,
      widthWeight:0.35
    },
    // {
    //   eventName:"habClimb2",
    //   buttonName:chosenTranslationObj.ButtonName[15],
    //   groupName:"habclimb",
    //   heightWeight:1,
    //   widthWeight:0.35
    // },
/*    {
      eventName:"habClimb3",
      buttonName:chosenTranslationObj.ButtonName[16],
      groupName:"habclimb",
      heightWeight:1,
      widthWeight:0.166
    },*/
    {
      eventName:"habClimbFail",
      buttonName:chosenTranslationObj.ButtonName[17],
      groupName:"habclimb",
      heightWeight:1,
      widthWeight:0.3
    },
/*    {
      eventName:"crossField",
      buttonName:chosenTranslationObj.ButtonName[18],
      groupName:"defense",
      heightWeight:1,
      widthWeight:0.5
    },*/
    {
      eventName:"defend",
      buttonName:chosenTranslationObj.ButtonName[19],
      groupName:"defense",
      heightWeight:1,
      widthWeight:1.0
    }

  ],
  variables: [
    {
      variableName:"cargoCount",
      variableTitle:"Note",
      variableLimit:[0,1],
      variableAmount:0
    }
    // {
    //   variableName:"hatchCount",
    //   variableTitle:"Note",
    //   variableLimit:[0,1],
    //   variableAmount:0
    // }
  ],
  variableHeightWeight: 1,
  logHeightWeight: 2
}
