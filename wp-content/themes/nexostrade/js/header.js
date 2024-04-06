document.addEventListener("DOMContentLoaded", function() {
	var navElements = document.querySelectorAll('.nav-elem');

	navElements.forEach(function(navElement) {
		navElement.addEventListener('click', function() {
			var linksBlock = this.querySelector('.nav-links');
			
			if (this.classList.contains("clicked")) {
				linksBlock.classList.remove('active');
				this.classList.remove('clicked');
			} else {
				document.querySelectorAll('.nav-links').forEach(function(block) {
					block.classList.remove('active');
				});
				document.querySelectorAll('.nav-elem').forEach(function(block) {
					block.classList.remove('clicked');
				});

				linksBlock.classList.add('active');
				this.classList.add('clicked');
			}
		});
	});


	var buttonOpen = document.getElementById('open-popup');
	buttonOpen.addEventListener('click', function() {
		var modal = document.getElementById('modal-menu');
		modal.classList.add('active');
	});

	var buttonClose = document.getElementById('close-popup');
	buttonClose.addEventListener('click', function() {
		var modal = document.getElementById('modal-menu');
		modal.classList.remove('active');
	});

	document.querySelector('.slider').addEventListener('click', function() {
		document.querySelectorAll('.nav-links').forEach(function(block) {
			block.classList.remove('active');
		});

		document.querySelectorAll('.nav-elem').forEach(function(block) {
			block.classList.remove('clicked');
		});
	});
});
