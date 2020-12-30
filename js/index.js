var sliderImg = document.slide;
var slideImages = [];
var sliderI = 0;
var sliderTime = 3000;

slideImages[0] = "images/slide1.jpg";
slideImages[1] = "images/slide2.jpg";
slideImages[2] = "images/slide3.jpg";
slideImages[3] = "images/slide4.jpg";
slideImages[4] = "images/slide5.jpg";
slideImages[5] = "images/slide6.jpg";

//intervals
var slideFunStop = setInterval("slideFun()",sliderTime);

function slideFun(){
    if(sliderI == slideImages.length  ){
        sliderI = 0;
    }
    sliderImg.src = slideImages[sliderI];
    sliderI++;
    var slideFunRecall = setTimeout("slideFun()",sliderTime);
    slideFunRecall;
}
// function slidePause(){
//     const scrolly=window.scrollY;
    
//     if(scrolly == window.innerHeight ){
//         alert("your out");
//     }
// }



// //calling functions and stoping them

// window.addEventListener('scroll',() => {slidePause()});
