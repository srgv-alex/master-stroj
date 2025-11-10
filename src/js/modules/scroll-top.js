function scrollToTop() {
	const scrollTopBtn = document.querySelector('#scrollBtn');

	window.addEventListener('scroll', function() {
		if (window.pageYOffset > window.innerHeight) {
			scrollTopBtn.classList.add('top-link--visible');
		} else {
			scrollTopBtn.classList.remove('top-link--visible');
		}
	});
}

export default scrollToTop;
