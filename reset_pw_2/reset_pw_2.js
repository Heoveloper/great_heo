function show() {
    document.querySelector(".background").className = "background show";
}
function close() {
    document.querySelector(".background").className = "background";
}

// setTimeout(function delay() {
//     location.replace('/main/main.html');
// }, 2000);

document.querySelector(".confirm-btn").addEventListener('click', show);
document.querySelector(".confirm-btn").addEventListener('click', close);
