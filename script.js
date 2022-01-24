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
    
    // Highlighting
    text = text.replace(/function/g, '<span style="color: #90e0ef">function</span>');
    text = text.replace(/return/g, '<span style="color: #90e0ef">for</span>');
    text = text.replace(/var/g, '<span style="color: #90e0ef">var</span>');
    text = text.replace(/let/g, '<span style="color: #90e0ef">let</span>');
    text = text.replace(/document/g, '<span style="color: #e9c46a">document</span>');
    text = text.replace(/window/g, '<span style="color: #e9c46a">window</span>');
    text = text.replace(/for/g, '<span style="color: #e9c46a">for</span>');
    text = text.replace(/if/g, '<span style="color: #e9c46a">if</span>');

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
