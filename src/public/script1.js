var img_btn_prev_n = document.querySelectorAll(".prev_n");
var img_btn_next_n = document.querySelectorAll(".next_n");

var index = 1;

img_btn_prev_n.forEach((e) => {
    e.addEventListener("click", imgprevClicknew);
})

img_btn_next_n.forEach((e) => {
    e.addEventListener("click", imgnextClicknew);
})

function imgnextClicknew(e) {
    var imgTag = e.path[2].children[1].children[0].children[0].id;
    var imgObj = document.getElementById(imgTag);
    index++;
    if (index > 3) {
        index = 1;
    }
    imgObj.src = `./images/New${index}.jpg`;
    imgObj.className = "Image";
}

function imgprevClicknew(e) {
    var imgTag = e.path[2].children[1].children[0].children[0].id;
    var imgObj = document.getElementById(imgTag);
    index--;
    if (index == 0) {
        index = 3;
    }
    imgObj.src = `./images/New${index}.jpg`;
    imgObj.className = "Image";
}
