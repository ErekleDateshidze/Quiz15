
// var button = document.getElementById("clickbutton");
// count = 0;
// button.onclick = function () {
//     count += 1;
//     button.innerHTML = "click button :" + count;
//     if (count >= 10) {
//         button.onclick = function () {
//             count -= 1;
//             button.innerHTML = "click button :" + count;
//         }
//     }
//     button.onclick = function () {
//         count += 1;
//         button.innerHTML = "click button :" + count;
//     }
// }



var buttonclick = document.getElementById("clickbutton")
var minusplus = 1;
var count = 0;


buttonclick.onclick = function () {
    count += minusplus;
    buttonclick.innerHTML = "click button :" + count;
    if (count == 10 || count == 0) {
        minusplus *= -1;
        buttonclick.innerHTML = "click button :" + count;
    }
}
