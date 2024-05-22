/*!
=========================================================
* Steller Landing page
=========================================================

* Copyright: 2019 DevCRUD (https://devcrud.com)
* Licensed: (https://devcrud.com/licenses)
* Coded by www.devcrud.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// smooth scroll
$(document).ready(function(){
	$(".nav-link").on('click', function(event) {

    	if (this.hash !== "") {

			event.preventDefault();

			var hash = this.hash;

			$('html, body').animate({
				scrollTop: $(hash).offset().top
			}, 700, function(){
				window.location.hash = hash;
			});
      	} 
    });
});


window.addEventListener('load', () => {
    const track = document.querySelector('.carousel-track');
    const items = document.querySelectorAll('.stack-item');
    let totalWidth = 0;

    items.forEach(item => {
        totalWidth += item.offsetWidth;
    });

    track.style.width = `${totalWidth}px`;
});

window.addEventListener('load', () => {
    const track = document.querySelector('.carousel-track');
    const items = document.querySelectorAll('.stack-item');
    let totalWidth = 0;

    items.forEach(item => {
        totalWidth += item.offsetWidth;
    });

    track.style.width = `${totalWidth}px`;
});


window.addEventListener('load', () => {
    const track = document.querySelector('.carousel-track');
    const items = document.querySelectorAll('.stack-item');
    let totalWidth = 0;

    items.forEach(item => {
        totalWidth += item.offsetWidth;
    });

    track.style.width = `${totalWidth}px`;
});

window.addEventListener('resize', () => {
    const track = document.querySelector('.carousel-track');
    const items = document.querySelectorAll('.stack-item');
    let totalWidth = 0;

    items.forEach(item => {
        totalWidth += item.offsetWidth;
    });

    track.style.width = `${totalWidth}px`;
});
