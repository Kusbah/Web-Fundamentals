function add(element) {
    var count = element.parentElement.querySelector(".count");
    var current = parseInt(count.textContent);
    count.innerText = current + 1;
}