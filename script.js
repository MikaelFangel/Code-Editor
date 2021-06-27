window.onload = function storageServ() {
	var txtarea = document.getElementById("editor");

	localStorage = window.localStorage
	txtarea.value = localStorage.getItem('savedTxt')
	fetch();
}

function selectTxtArr() {
	var txtarea = document.getElementById("editor");
	
	txtarea.focus();
}

function fetch() {
	var txtarea = document.getElementById("editor");
	var hiddenEd = document.getElementById("hiddenEditor");
	var localStorage = window.localStorage
	
	var text = txtarea.value;
	localStorage.setItem('savedTxt', text);
	text = text.replace(/</g,'&lt;');
	text = text.replace(/>/g,'&gt;');
	text = text.replace(/\r?\n/g,'<br>');	// replaces linebreaks with html tags in the hidden div
	hiddenEd.innerHTML = text;	
	scrollSyncWriter();
}

function scrollSyncWriter() {
	var txtarea = document.getElementById("editor");
	var hiddenEd = document.getElementById("hiddenEditor");

	hiddenEd.scrollTop = txtarea.scrollTop
}

function scrollSync() {
	var txtarea = document.getElementById("editor");
	var hiddenEd = document.getElementById("hiddenEditor");

	txtarea.scrollTop = hiddenEd.scrollTop;
}	
