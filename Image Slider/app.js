const nextEl = document.querySelector(".next");

const prevEl = document.querySelector(".prev");

const imgsE1 = document.querySelectorAll("img");

const imageContainerEl = document.querySelector(".image-container");

let currentImg = 1;

let timeout;

nextEl.addEventListener("click",()=>{
    currentImg++;
    clearTimeout(timeout);
    updateImg();
})

prevEl.addEventListener("click", ()=>{
    currentImg--;
    clearTimeout(timeout);
    updateImg();
});

updateImg()

function updateImg(){
    if(currentImg > imgsE1.length){
        currentImg = 1;
    }
    else if(currentImg < 1){
        currentImg = imgsE1.length;
    }
    imageContainerEl.style.transform = `translateX(-${(currentImg-1) * 500}px)`;
    timeout = setTimeout(()=>{
        currentImg++;
        updateImg();
    },3000)
}