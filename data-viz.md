Title
======

<div>
				
				<div>
					<h1>Symptom History</h1>
					<h3 id="current_user">{{username}}</h3>
					<h2>Patient: {{patient_first_name}} {{patient_last_name}}</h2>
					{{#open.patient-data}}
						<div class='patient_table_single_entry'>
							<!-- Replace `score` with `name` of the data. If used HTML, it should match the name attribute: <select name='score'> -->
							<span class='time'>{{dateCreated}}</span>

							<span class='username'>{{username}}</span>

							<!--
							<span>{{feature1}} -- {{feature2}} -- {{feature3}} -- {{feature4}}</span> -->

							<div class='entry_features'>
								<span>{{feature1}} -- </span>
								<span>{{feature2}} -- </span>
								<span>{{feature3}} -- </span>
								<span>{{feature4}}</span>
							</div>


						</div>
					{{/open.patient-data}}

					<script>
						// filter out values that don't match the username
						// otherwise with the <span> code above, all the users' entries get displayed, not just the info for the person who is logged in

						const current_user = fetch('/~/delirium-symptom-center2/account/username');
						document.write(ans);

						// var current_user = document.querySelector("current_user");
						// document.write(current_user);

						// if (document.getElementById('username') != { { username } }) {
						// 	document.getElementById.display = none;
						// }
					</script>

					<script>
						// THIS IS NEEDED TO CONVERT THE TIME TO THE BROWSER'S TIMEZONE
						document.querySelectorAll('.time')
							.forEach($span =>
								$span.innerText = new Date($span.innerText)
								.toLocaleString())
					</script>
				
				</div>  
			</div>
			
			
			
			
	
## From script.js, attempting to visualize with JS

// creates an array of features
	//const features = [...document.querySelectorAll('feature1, feature2, feature3, feature4')].map(option => option.value);

	// const entry = [...document.querySelectorAll('_id')].map(option => option.value);

	// for each entry, determine whether they exhibit symptoms based on CAM results
	//*** const counts = []; // object in java is key:value pair

	// convert JSON object -> string -> JS object
	// const allEntries = JSON.parse(json);

	// *** let currentUser = document.getElementById("current_user")
	// 	.value;
	// var totalEntryCount = Object.keys(json)
	// 	.length;

	// iterate through all json objects, checking if the username field equals current user

	// *** for (let i = 0; i < totalEntryCount; i++) {
	// 	String entryUsername = json.getString("username");
	// 	if (entryUsername != currentUser) {

	// 	}
	// }

	// is "id" in this case a counter variable of sorts?
	// *** entry.forEach(id => {
	// 	counts[id] = json.filter(choice.data.username === id)
	// })