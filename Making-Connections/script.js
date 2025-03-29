function gear() {
    document.querySelector('.username').innerText = "Liam W";
}
function accept(userClass) {
    let requestElement = document.querySelector("." + userClass);
    if (requestElement) {
        requestElement.remove();
    }

    let count = document.querySelector(".countNumb");
    let currentCount = parseInt(count.innerText);
    count.innerText = currentCount - 1;

    let count2 = document.querySelector(".countnumbreq");
    let currentCount2 = parseInt(count2.innerText);
    count2.innerText = currentCount2 + 1;
}

function declined(userClass) {
    let requestElement = document.querySelector("." + userClass);
    if (requestElement) {
        requestElement.remove();
    }

    let count = document.querySelector(".countNumb");
    let currentCount = parseInt(count.innerText);
    count.innerText = currentCount - 1;
}