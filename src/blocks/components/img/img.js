const imageObserver = new IntersectionObserver((entries, options) => {
	entries.forEach(entry => {
		if (entry.target.dataset.src !== undefined) {
			if (entry.isIntersecting) {
				entry.target.src = entry.target.dataset.src
				entry.target.alt = entry.target.dataset.alt
				imageObserver.unobserve(entry.target)
			}
		}

		if (entry.target.dataset.srcset !== undefined) {
			if (entry.isIntersecting) {
				entry.target.srcset = entry.target.dataset.srcset
				imageObserver.unobserve(entry.target)
			}
		}
	})
}, {})

let images = document
		.querySelectorAll('img')
		.forEach(image => imageObserver.observe(image)),
	altImages = document
		.querySelectorAll('source')
		.forEach(alt => imageObserver.observe(alt))
