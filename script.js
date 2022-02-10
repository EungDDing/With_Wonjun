var img_btn_prev = document.querySelectorAll(".prev");
var img_btn_next = document.querySelectorAll(".next");

var index = 1;

img_btn_prev.forEach((e)=>{
    e.addEventListener("click", imgprevClick);
})

img_btn_next.forEach((e)=>{
    e.addEventListener("click", imgnextClick);
})

function imgnextClick(e){
    var imgTag = e.path[2].children[1].children[0].children[0].id;
    var imgObj = document.getElementById(imgTag);
    index++;
    if(index > 3){
        index = 1;
    }
    imgObj.src = `./images/Best${index}.jpg` ;
    imgObj.className = "Image";
}

function imgprevClick(e){
    var imgTag = e.path[2].children[1].children[0].children[0].id;
    var imgObj = document.getElementById(imgTag);
    index--;
    if(index == 0){
        index = 3;
    }
    imgObj.src = `./images/Best${index}.jpg` ;
    imgObj.className = "Image";
}