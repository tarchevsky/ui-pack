const post = {
    img: "img/img.jpg",
};

const server = {
    posts(page = 1) {
        const finished = page >= 5;
        const next = finished ? null : page + 1;
        const posts = Array(5).fill(post);

        return new Promise ((resolve => {
            setTimeout(() => {
                resolve({posts, next});
            }, 150);
        }));
    },
};

const response = await server.posts();

function checkPosition() {
    const height = document.body.offsetHeight;
    const screenHeight = window.innerHeight;
    const scrolled = window.scrollY;

    const threshold = height - screenHeight / 4;
    const position = scrolled + screenHeight;

    if(position >= threshold) {
        await fetchPosts();
    }
};

(() => {
    window.addEventListener('scroll', checkPosition);
    window.addEventListener('resize', checkPosition);
})();

async function fetchPosts() {
    const { posts, next } = await server.posts(nextPage);
}