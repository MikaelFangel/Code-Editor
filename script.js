function selectTxtArr() {
	var txtarea = document.getElementById("editor");
	
	txtarea.focus();
}

function fetch() {
	var txtarea = document.getElementById("editor");
	var hiddenEd = document.getElementById("hiddenEditor");
	
	var text = txtarea.value;
	text = text.replace(/\r?\n/g,'<br>');	// replaces linebreaks with html tags in the hidden div
	hiddenEd.innerHTML = text;		// breaks code when writing html
}
