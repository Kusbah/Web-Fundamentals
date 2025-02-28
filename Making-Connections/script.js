function gear(){
    document.querySelector('.username').innerText = "Liam W";
}
function accept(){
    let requestElement = document.querySelector(".user1");
    requestElement.remove();
    var count = document.querySelector(".countNumb")
    let currentCount = parseInt(count.innerText);
    count.innerText = currentCount - 1;
    var count2 = document.querySelector(".countnumbreq")
    var currentCount2 = parseInt(count2.innerText);
    count2.innerText = currentCount2 + 1;

}
function declined(){
    let requestElement = document.querySelector(".user1");
    requestElement.remove();
    var count = document.querySelector(".countNumb")
    let currentCount = parseInt(count.innerText);
    count.innerText = currentCount - 1;
}
function declined1(){
    let requestElement = document.querySelector(".user2");
    requestElement.remove();
    var count = document.querySelector(".countNumb")
    let currentCount = parseInt(count.innerText);
    count.innerText = currentCount - 1;
}
function accept1(){
    let requestElement = document.querySelector(".user2");
    requestElement.remove();
    var count = document.querySelector(".countNumb")
    let currentCount = parseInt(count.innerText);
    count.innerText = currentCount - 1;
    var count2 = document.querySelector(".countnumbreq")
    var currentCount2 = parseInt(count2.innerText);
    count2.innerText = currentCount2 + 1;

}