const circle = document.querySelector('.circle');

if (circle) {
    circleScripts();
}

function circleScripts() {
    const text = document.querySelector('.circle-text p');

    text.innerHTML = text.innerText.split('').map((letter, i) =>
        `<span style='transform:rotate(${i * 18}deg'>${letter}</span>`
    )
        .join('');
}