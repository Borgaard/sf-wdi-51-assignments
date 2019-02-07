function clearForm(e) {
  e.preventDefault();
	document.getElementById('myForm').reset();
}

document.querySelector("button").addEventListener('click', clearForm)
