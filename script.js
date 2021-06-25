function selectTxtArr() {
	var txtarea = document.getElementById("editor");

	txtarea.focus();
	txtarea.setFocusAt(0);
}

function fetch() {
	console.log(document.getElementById("editor").value);
}

