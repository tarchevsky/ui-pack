const imageObserver = new IntersectionObserver(
    (entries, options) => {
        entries.forEach((entry) => {
            if (entry.target.dataset.src !== undefined) {
                if (entry.isIntersecting) {
                    entry.target.src = entry.target.dataset.src;
                    entry.target.alt = entry.target.dataset.alt;
                    imageObserver.unobserve(entry.target);
                }
            }
        });
    },
    {}
);

let images = document.querySelectorAll('img').forEach(image => imageObserver.observe(image));