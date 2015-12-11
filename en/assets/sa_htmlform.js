var sa_params='';
var sa_email_id = '64645-256c0'; // info@sts-innovation.com
//var sa_email_id = '64646-e474b'; // m-miller@sts-innovation.com
var sa_sent_text = 'Thank you for contacting us. We will get back to you soon.';

// Thanks to http://stackoverflow.com/a/5499821/2133271 for a replacement HTML escape function
// This replaces the missing sa_htmlent() function in postform.js
var tagsToReplace = {
	'&': '&amp;',
	'<': '&lt;',
	'>': '&gt;'
};

function replaceTag(tag) {
    return tagsToReplace[tag] || tag;
}

function sa_htmlent(str) {
    var sanitized = str.replace(/[&<>]/g, replaceTag);
	//console.log('returning', sanitized);
    return sanitized;
}

function sa_contactform() {
	// Reset the parameters in case the form is incorrectly filled out and resubmitted
	sa_params = '';

	// Grab a reference to the contactform
	var sa_frm = document.sa_htmlform;
	
	// Prepare each form item
	for(i = 0; i < sa_frm.elements.length; i++) {
		var sa_el = sa_frm.elements[i];

		// Make sure required items are filled out
		if(!sa_el.value && sa_el.getAttribute('required') == 'true') {
			alert('Please complete all required fields');
			sa_el.focus();
			return false;
		}
		
		// If an element has a name then it needs to be passed along to the server
		if(sa_frm.elements[i].name) {
			// Prepare each form element as a hidden input for submission via a separate form in an iframe (see postform.js)
			sa_params += '<input type=hidden name=' + sa_frm.elements[i].name + ' value="' + sa_htmlent(sa_frm.elements[i].value) + '">';
			
			// Replace escaped spaces and @ signs with human-readable symbols
			sa_params = sa_params.replace(/%20/g, ' ');
			sa_params = sa_params.replace(/%40/g, '@');
		}
	}
	
	// DEBUG
	//console.log('params:', sa_params);

	// Append some dynamic Javascript to the page
	var s = document.createElement('script');
	s.setAttribute('type','text/javascript');
	s.setAttribute('src','http://www.smartaddon.com/js/postform.js');
	document.body.appendChild(s);
	
	return false;
}

// A friendly message to display after sending an email
function sa_contactsent() {
	
	if(typeof sa_sent_text == 'undefined') {
		sa_sent_text = 'Thank you for contacting us. We will get back to you soon.';
	}
	
	// Tack on some branding
	document.getElementById('sa_contactdiv').innerHTML = sa_sent_text + '<br><br>Contact Form provided by SmartAddon.com';
}