// Logout JS from Qoom's Doggo Group login system tutorial
window.logout = function () {
	fetch('/~/delirium-symptom-center2/logout', { method: 'POST' });
	alert('Logged Out!')
	location.href = '/~/delirium-symptom-center2/home'
}

/* Orignal attempt was to parse all the JSON first, copy all the fields that matched the current logged-in username into JS objects, and create an array of objects of interest. Realized it was way too complicated (everything can be completed in just one loop not two... I think) and it didn't work 
class entry {
	constructor(date, feature1, feature2, feature3, feature4) {
		this.date = date.toLocaleString();
		this.feature1 = feature1;
		this.feature2 = feature2;
		this.feature3 = feature3;
		this.feature4 = feature4;
		this.deliriumStatus = "";

		if (this.feature1 === null) {
			this.feature1 = "";
		}

		if (this.feature2 === null) {
			this.feature2 = "";
		}

		if (this.feature3 === null) {
			this.feature3 = "";
		}

		if (this.feature4 === null) {
			this.feature4 = "";
		}

		// convert nulls to spaces to make displaying easier (hopefully)
		// apply CAM algorithm
		if ((this.feature1 !== "" && this.feature2 !== "") && (feature3 !== "" || feature4 !== "")) {
			this.deliriumStatus = "🔴";
		}
	}
}
*/

// get all symptom entries from logged-in patient

async function grabEntries() {
	// get current account username
	const resp = await fetch('/~/delirium-symptom-center2/account/profile')
	const ans = await resp.json();
	show(ans);
	
	var currentUser = ans.username;

	// access patient-data database, store the response in "resp"
	const resp = await fetch('/~/delirium-symptom-center2/open/patient-data?all=true');
	const json = await resp.json(); // these are JS objects, because when "results.innerHTML = json" runs the page displays several [object Object] comma separated sets

	const results = document.querySelector('#patient_data'); // need a "#" in front if the div has an 'id' field
	// querySelector lets you put stuff into a div defined in .css file 

	/* -------------
	// clone json so that Object.keys doesn't mess up the original 
	// done because I don't know of any other ways to get the number of objects
	const json2 = [...json];
	var totalEntryCount = Object.keys(json2)
		.length; // number of JS objects server returned
	------------------- */

	var totalEntryCount = 13 // this is currently hardcoded (not a good idea) because I wasn't sure if the block about with the Object.keys and .length was working
	
	var entryUsername = "";
	var	f1 = "";
	var	f2 = "";
	var	f3 = "";
	var	f4 = "";
	var	date = "";

	for (var i = 0; i < totalEntryCount; i++) {
		entryUsername = json[i].data.username; // like Java syntax

		if (currentUser === entryUsername) { // === compares value and type

			// TODO may have to check if each feature is null

			date = date.toLocaleString(json[i].dateCreated);
			f1 = json[i].data.feature1;
			f2 = json[i].data.feature2;
			f3 = json[i].data.feature3;
			f4 = json[i].data.feature4;

			const div = document.createElement('div');
			div.innerHTML = `
				${date}
				${f1}
				${f2}
				${f3}
				${f4}
			`
			/*
			<div>${date}</div>
				<div>${f1}</div>
				<div>${f2}</div>
				<div>${f3}</div>
				<div>${f4}</div>
			*/
			
			results.appendChild(div);
		}

	}

	// comment out the line below to not show the entire unfilted JSON string
	// results.innerHTML = '<pre>' + JSON.stringify(json, null, 8) + '<pre>'

}

/* ********** Original function attemtping to use the object array system described where the class is defined
async function grabEntries() {
	// access patient-data database, store the response in "resp"
	const resp = await fetch('/~/delirium-symptom-center2/open/patient-data?all=true');
	const json = await resp.json(); // these are JS objects, because when "results.innerHTML = json" runs the page displays several [object Object] comma separated sets

	const results = document.querySelector('#patient_data'); // need a "#" in front if the div has an 'id' field
	// querySelector lets you put stuff into a div defined in CSS 

	var totalEntryCount = Object.keys(json)
		.length; // number of JS objects server returned

	var entryUsername = "",
		f1 = "",
		f2 = "",
		f3 = "",
		f4 = "",
		date = "";

	// create array of entry objects with the username
	const entries = [];

	for (var i = 0; i < totalEntryCount; i++) {
		entryUsername = json[i].username; // like Java syntax

		if (currentUser === entryUsername) { // === compares value and type

			// TODO get the appropriate fields, check if each feature is null
			// if null, then create the object with the null field as an empty string. set temp variables to store values prior to creating object
			// add new object to array via arrayName.push(object you're pushing) or arrary[i] = object

			date = json[i].dateCreated;
			f1 = json[i].feature1;
			f2 = json[i].feature2;
			f3 = json[i].feature3;
			f4 = json[i].feature4;

			entries.push(new entry(date, f1, f2, f3, f4));
		}

	}

	// TODO for loop through the array of objects that pushes dynamic HTML to page
	for (var i = 0; i < entries.length; i++) {
		var date = json[i].date;
		const div = document.createElement('div');
		div.innerHTML = `
		<div class='date'>${date}</div>
		`;

		results.appendChild();
	}

	// this puts HTML text into the patient_data div box 
	// data from the server comes as json objects, and we must convert to string first (though it's an ugly string at first)
	// 6.29 in this Qoom tutorial: https://app.qoom.io/tutorials/openpoll/assets/4-fetch.mp4

	//results.innerHTML = '<pre>' + JSON.stringify(json, null, 8) + '<pre>' // number is how many spaces equal a tab (?)

}
********** */

grabEntries();