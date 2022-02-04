var img_btn_prev = document.querySelector(".prev");
var img_btn_next = document.querySelector(".next");

var index = 1;

img_btn_next.addEventListener('click', (e)=> {
    imgnextClick();
});

img_btn_prev.addEventListener('click', (e)=>{
    imgprevClick();
})

function imgnextClick(){
    var img_ky = document.getElementById("ky");
    index++;
    if(index > 3){
        index = 1;
    }
    img_ky.src = `./images/Best${index}.jpg` ;
    img_ky.className = "Image";
}

function imgprevClick(){
    var img_ky = document.getElementById("ky");
    index--;
    if(index == 0){
        index = 3;
    }
    img_ky.src = `./images/Best${index}.jpg` ;
    img_ky.className = "Image";
}