const btnNavEl = document.querySelectorAll('.btn-mobile-nav');
const topNavContainer = document.querySelector('.navigation--top-nav');
const headerNavContainer = document.querySelector('.navigation--header-nav');
let hasEventListener = false;

btnNavEl[0].addEventListener('click', function () {
	if (headerNavContainer.classList.contains('nav-open')) {
		headerNavContainer.classList.remove('nav-open');
	}
	topNavContainer.classList.toggle('nav-open');
	addListener();
});
btnNavEl[1].addEventListener('click', function () {
	if (topNavContainer.classList.contains('nav-open')) {
		topNavContainer.classList.remove('nav-open');
	}
	headerNavContainer.classList.toggle('nav-open');
	addListener();
});

function addListener() {
	if (!hasEventListener) {
		hasEventListener = true;

		window.addEventListener('resize', function once(e) {
			if (e.target.innerWidth > 744) {
				headerNavContainer.classList.remove('nav-open');
				topNavContainer.classList.remove('nav-open');
				window.removeEventListener('resize', once);
				hasEventListener = false;
			}
		});
	}
}
