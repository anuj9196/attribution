$(document).ready(function() {

	var myElem = document.getElementById("attribution");
	if (myElem == null) {
		
		document.write("Sorry !!! It seems somethis goes wrong with the website. Please contact admin : admin@tektornado.tk");

	} else {

		myElem.innerHTML = 'Proudly Created By <a href="http://anujsharma.com">Anuj Sharma</a>';
	}

});
