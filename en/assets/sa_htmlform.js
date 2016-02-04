// A friendly message to display after sending an email
function showThankYouMessage() {	
	// Hide the form
	document.getElementById('contactForm').style.display = "none";
	// Show the Thank You message
	document.getElementById('formSent').style.display = "block";
}

function handleResponse(e) {
	var response = e.target;

	if (response.status == 200 && response.status < 300) {
		showThankYouMessage();
	}
	else {
		console.log(response);
		alert('An error occurred. Please see the console');
	}
}

function submitForm() {
	// Disable the submit button
	document.getElementById('btnSubmit').disabled = true;
	document.getElementById('btnSubmit').value = 'Submitting...';

	// Grab a reference to the contactform
	var form = document.contactForm;
	
	// Make sure each required form item has been filled out
	for(i = 0; i < form.elements.length; i++) {
		var elem = form.elements[i];

		// Make sure required items are filled out
		if(!elem.value && elem.getAttribute('required') == 'true') {
			alert('Please complete all required fields');
			elem.focus();
			return false;
		}
	}

	// Grab the form and convert it into a FormData object
	var formData = new FormData(form);

	// Craft a POST request
	var req = new XMLHttpRequest();
	req.open("POST", "//formspree.io/info@sts-innovation.com");
	req.setRequestHeader("Accept", "application/json");
	req.onload = handleResponse;
	req.send(formData);

	return false;
}