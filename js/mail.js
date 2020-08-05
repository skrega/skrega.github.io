function callbackSubmit(event, formEl) {
	event.preventDefault();
	$.post('/mail.php', $(formEl).serialize(), function(response) {
		if (response === 'OK') {
			// Is sended
			showMessage('Thanks! We will contact you!');
		} else {
			showMessage('Error: ' + response);
		}
	});
}

function showMessage(text) {
	let box = document.querySelector('.message-box');
	if (!box) {
		let messageBoxEl = document.createElement('div');
		messageBoxEl.className = 'message-box';
		messageBoxEl.dataset.fancybox = '';
		messageBoxEl.innerHTML = '<div class="text" style="text-align: center;">' + text + '</div><br><br><button type="button" class="button" data-fancybox-close>'
			+ '<svg width="270" height="62">'
			+ '<rect x="3" y="3" rx="9" fill="none" stroke="url(#grad1)" width="220" height="50">'
			+ '</rect>'
			+ '</svg>'
			+ '<span style="left:44%">Ok!</span>'
			+ '</button>';
		document.body.appendChild(messageBoxEl);
		box = document.querySelector('.message-box');
	}
	box.querySelector('.text').innerHTML = text;
	box.click();
}