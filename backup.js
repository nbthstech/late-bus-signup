/*
function emailer() {
	Logger.clear()
	const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Assignments");
	// column:1 for first set, 9 for the second set
	const column = 9;
	var row = 2;
	const range = sheet.getRange(row, column, 90, 7);
	const values = range.getValues();
	for (index in values) {
		const [position, importance, source, name, email, shirt, sent] = values[index];
		if (name !== "" && email !== "") {
			Logger.log("Emailed %s (%s)", name, email);
			var message = [ "" ,
				"Hello" + name + "," ,
				"Despite the challenges we faced (tongue-in cheek \"We are North Brunswick!\") we have another succesful Brunswick Eruption behind us. It is thanks to the efforts of all our handworking volunteers that Brunswick Eruption continues to be a mainstay in the Mid-Atlantic region.",
				"" ,
				"Our utmost thanks," ,
				"The Brunswick Eruption Planning Committee"];
			message = message.join("\n")
			// MailApp.sendEmail(email, "brunswickeruption@gmail.com", "Thank You Volunteers", message);
			sheet.getRange(row, column + 6).setValue("Sent");
			SpreadsheetApp.flush();
		}
		row = row + 1;
	}
}
*/
