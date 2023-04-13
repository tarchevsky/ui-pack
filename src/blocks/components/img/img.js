const imageObserver = new IntersectionObserver((entries, options) => {
	entries.forEach(entry => {
		if (entry.isIntersecting) {
			if (
				entry.target.dataset.src !== undefined &&
				entry.target.dataset.src !== null
			) {
				entry.target.src = entry.target.dataset.src
			}
			if (
				entry.target.dataset.srcset !== undefined &&
				entry.target.dataset.srcset !== null
			) {
				entry.target.srcset = entry.target.dataset.srcset
			}
			if (
				entry.target.dataset.alt !== undefined &&
				entry.target.dataset.alt !== null
			) {
				entry.target.alt = entry.target.dataset.alt
			}
			imageObserver.unobserve(entry.target)
		}
	})
}, {})

document
	.querySelectorAll('img, source')
	.forEach(el => imageObserver.observe(el))
