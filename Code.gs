//SERVER SIDE

function onOpen() {
  //Create Menu items
  var currentssheet = SpreadsheetApp.getActive();
  var menuItems = [
    {name: 'Authenticate', functionName: 'amtd_ShowPane'}
  ];
  currentssheet.addMenu("Ameritrade APIs", menuItems);
}

