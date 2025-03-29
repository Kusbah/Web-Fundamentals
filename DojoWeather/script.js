function acceptCookies() {
    document.querySelector(".cookies").style.display = "none";
}



function convertTemperature() {
    let tempSelect = document.querySelector("#temp").value.trim();
    let degrees = document.querySelectorAll(".degree");

    degrees.forEach(degree => {
        let temp = parseFloat(degree.innerText);

        if (tempSelect === "fahrenheit") {
            temp = Math.round((temp * 9 / 5) + 32);
        } else if (tempSelect === "celsius") {
            temp = Math.round((temp - 32) * 5 / 9);
        }
        degree.innerText = temp;

    });
}


