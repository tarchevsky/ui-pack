const item = document.querySelector('.drag-n-drop__item'),
    placeholders = document.querySelectorAll('.drag-n-drop__placeholder');

item.addEventListener('dragstart', dragstart);
item.addEventListener('dragend', dragend);

for (const placeholder of placeholders) {
    placeholder.addEventListener('dragover', dragover);
    placeholder.addEventListener('dragenter', dragenter);
    placeholder.addEventListener('dragleave', dragleave);
    placeholder.addEventListener('drop', dragdrop);
}

function dragstart(e) {
    e.target.classList.add('drag-n-drop__item--hold');
    setTimeout(() => e.target.classList.add('drag-n-drop__item--hide'), 0);

}

function dragend(e) {
    // e.target.classList.remove('drag-n-drop__item--hold', 'drag-n-drop__item--hide');
    e.target.className = 'drag-n-drop__item';
}

function dragover(e) {
    e.preventDefault();
}
function dragenter(e) {
    e.target.classList.add('drag-n-drop__item--hovered');
}
function dragleave(e) {
    e.target.classList.remove('drag-n-drop__item--hovered');
}
function dragdrop(e) {
    e.target.append(item);
    e.target.classList.remove('drag-n-drop__item--hovered');
}