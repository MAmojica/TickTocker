// This function is triggered when the Google Sheet is opened
function onOpen() {
 // Get the user interface of the active spreadsheet
 var ui = SpreadsheetApp.getUi();


 // Create a custom menu named 'Custom Menu'
 ui.createMenu('Custom Menu')
   // Add an item to the custom menu, labeled 'Start', and specify the function 'showUI' to be called
   .addItem('Start', 'showUI')
   // Add the custom menu to the user interface
   .addToUi();
}


// This function displays the user interface (HTML form) as a modal dialog when the 'Start' menu item is clicked
function showUI() {
 // Create an HTML output from the 'Page' file with specified width and height
 var html = HtmlService.createHtmlOutputFromFile('Page')
   .setWidth(600)
   .setHeight(400);


 // Show the HTML modal dialog with the title 'TickTocker'
 SpreadsheetApp.getUi().showModalDialog(html, 'TickTocker');
}


// This function exports the given data to the active spreadsheet's active sheet
function exportData(data) {
 var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
 sheet.appendRow(data);
}


// This function is used for serving HTML content when the web app is accessed
function doGet() {
 return HtmlService.createHtmlOutputFromFile('Page')
   .setTitle('TickTocker');
}


// This function retrieves the current user's email address
function getUserEmail() {
 var email = Session.getActiveUser().getEmail();
 return email;
}


// This function returns the current timestamp in milliseconds
function getCurrentTime() {
 return new Date().getTime();
}
