function on (element, event, callback){
	document.querySelector(element)
		.addEventListener(event, callback, false)
}

on ('[data-js="link"]', 'click', function(event){
	event.preventDefault();
	alert();
})