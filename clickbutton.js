
var button = document.getElementById("clickbutton");
count = 0;
button.onclick = function () {
    count += 1;
    button.innerHTML = "clickbutton :" + count;
    if (count >= 10) {
        button.onclick = function () {
            count -= 1;
            button.innerHTML = "clickbutton :" + count;
        }
    }
}
