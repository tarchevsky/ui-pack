const infiniteScroll = document.querySelector('.infinite-scroll');
let container = document.querySelector('.infinite-scroll');
let nextPage = 2;

const infiniteObserver = new IntersectionObserver(
    ([entry], observer) => {
        if (entry.isIntersecting) {
            observer.unobserve(entry.target);

            loadPosts(nextPage++);
        }
    },
    {
        threshold: 0,
        rootMargin: '0px 0px 200px 0px'
    },
);

const loadPosts = (page = 1) => {
    fetch(`https://my-json-server.typicode.com/tarchevsky/demo-json-db/posts?_limit=4&_page=${page}`)
        .then(res => res.json())
        .then(posts => {
            posts.forEach(post => {
                const card = document.createElement('div');
                card.className = 'infinite-scroll-card';
                card.innerHTML = `
                    <img src='${post.url}' alt=''>
                    <p>${post.title}</p>
                `;
                container.append(card);
            });

            // TODO observer logic
            const lastCard = document.querySelector('.infinite-scroll-card:last-child');

            if (lastCard) {
                infiniteObserver.observe(lastCard);
            }
        })
        .catch(console.error);
};

if (infiniteScroll) {
    loadPosts();
}