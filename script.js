
function selectTxtArr() {
	var txtarea = document.getElementById("editor");
	
	txtarea.focus();
}

function fetch() {
	var txtarea = document.getElementById("editor");
	var hiddenEd = document.getElementById("hiddenEditor");
	
	hiddenEd.innerHTML = txtarea.value;
}
