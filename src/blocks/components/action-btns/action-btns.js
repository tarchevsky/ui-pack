const btnUp = document.querySelector('.action-btns-up')

if (btnUp) {
	btnUpOffset()
}

function btnUpOffset() {
	window.addEventListener('scroll', () => {
		if (window.pageYOffset > 400) {
			btnUp.style.display = 'block'
			btnUp.style.opacity = '1'
		} else {
			btnUp.style.opacity = ''
			btnUp.style.display = ''
		}
	})
}
