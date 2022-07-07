"use strict";

function animate() {
    let head = document.querySelector(".heading");
    setInterval(() => {
        let headColor = getComputedStyle(head).color;
        if (headColor == "rgb(255, 255, 255)") {
            head.style.color = "#ffa500";
        }
        else {
            head.style.color = "white";
        }
    }, 300);
}

let imgArr = [];
let a = 0;

imgArr[0] = "./images/wrap-1-bg.jpg";
imgArr[1] = "./images/wrap-1-bg1.jpg";
imgArr[2] = "./images/wrap-1-bg2.jpg";
imgArr[3] = "./images/wrap-1-bg3.jpg";
imgArr[4] = "./images/wrap-1-bg4.jpg";

setInterval(() => {
    changeImage();
}, 2000);

function changeImage() {
    document.slide.src = imgArr[a];
    if (a < imgArr.length - 1) {
        a++;
    }
    else {
        a = 0;
    }
}


let load = document.querySelector(".loader img");
let piece = document.querySelectorAll(".piece");

load.style.display = "none";

let allItems = document.querySelectorAll(".items");
for (let i = 0; i < allItems.length; i++) {
    allItems[i].addEventListener('click', function () {
        let gen = allItems[i].innerHTML;
        document.querySelector(".gen").innerHTML = "";
        let h = 0;
        let genId = setInterval(genP, 300);
        function genP() {
            if (gen[h] == gen[h]) {
                document.querySelector(".gen").innerHTML += gen[h];
                h++;
            }
            if (gen.length == h) {
                clearInterval(genId);
            }
        }

        let current = this;
        for (let i = 0; i < allItems.length; i++) {
            if (current != allItems[i]) {
                allItems[i].classList.remove("activeSearchItems")
            }

            else {
                current.classList.add("activeSearchItems");
                let btnCon = allItems[i].innerHTML;
                document.querySelector(".secondRow").style.display = "none";
                document.querySelector(".thirdRow").style.display = "none";
                document.querySelector(".moreLoad button").style.display = "block";
                document.querySelector(".moreLoad2 button").style.display = "block";
                if (btnCon == "All") {
                    piece.forEach(element => {
                        element.style.visibility = "hidden";
                    });
                    load.style.display = "block";

                    setTimeout(() => {
                        load.style.display = "none";

                        piece.forEach(element => {
                            element.style.visibility = "visible";
                        });
                    }, 1000);

                    document.querySelector(".menOne").style.display = "block";
                    document.querySelector(".womenOne").style.display = "none";
                    document.querySelector(".childOne").style.display = "none";

                    document.querySelector(".ladiesTwo").style.display = "block";
                    document.querySelector(".menTwo").style.display = "none";
                    document.querySelector(".childTwo").style.display = "none";

                    document.querySelector(".childPic1").style.display = "block";
                    document.querySelector(".menThree").style.display = "none";
                    document.querySelector(".womenThree").style.display = "none";

                    document.querySelector(".menFour1").style.display = "block";
                    document.querySelector(".womenFour").style.display = "none";
                    document.querySelector(".childFour").style.display = "none";

                    document.querySelector(".ladiesAll1").style.display = "block";
                    document.querySelector(".menFour").style.display = "none";
                    document.querySelector(".childFive").style.display = "none";

                    document.querySelector(".menSix").style.display = "none";
                    document.querySelector(".womenSix").style.display = "none";
                    document.querySelector(".childSix").style.display = "block";

                    document.querySelector(".menSeven").style.display = "block";
                    document.querySelector(".womenSeven").style.display = "none";
                    document.querySelector(".childSeven").style.display = "none";

                    document.querySelector(".womenEight").style.display = "none";
                    document.querySelector(".menEight").style.display = "block";
                    document.querySelector(".childEight").style.display = "none";

                    document.querySelector(".womenNine").style.display = "none";
                    document.querySelector(".menNine").style.display = "block";
                    document.querySelector(".childNine").style.display = "none";

                    document.querySelector(".womenTen").style.display = "none";
                    document.querySelector(".childTen").style.display = "block";
                    document.querySelector(".menTen").style.display = "none";

                    document.querySelector(".menEleven").style.display = "none";
                    document.querySelector(".ladiesEleven").style.display = "block";
                    document.querySelector(".childEleven").style.display = "none";

                    document.querySelector(".womenTwelve").style.display = "none";
                    document.querySelector(".childTwelve").style.display = "block";
                    document.querySelector(".menTwelve").style.display = "none";

                }

                else if (btnCon == "Men") {
                    piece.forEach(element => {
                        element.style.visibility = "hidden";
                    });
                    load.style.display = "block";

                    setTimeout(() => {
                        load.style.display = "none";

                        piece.forEach(element => {
                            element.style.visibility = "visible";
                        });
                    }, 1000);

                    document.querySelector(".menOne").style.display = "block";
                    document.querySelector(".womenOne").style.display = "none";
                    document.querySelector(".childOne").style.display = "none";

                    document.querySelector(".menTwo").style.display = "block";
                    document.querySelector(".ladiesTwo").style.display = "none";
                    document.querySelector(".childTwo").style.display = "none";

                    document.querySelector(".childPic1").style.display = "none";
                    document.querySelector(".menThree").style.display = "block";
                    document.querySelector(".womenThree").style.display = "none";

                    document.querySelector(".menFour1").style.display = "block";
                    document.querySelector(".womenFour").style.display = "none";
                    document.querySelector(".childFour").style.display = "none";

                    document.querySelector(".menFour").style.display = "block";
                    document.querySelector(".ladiesAll1").style.display = "none";
                    document.querySelector(".childFive").style.display = "none";

                    document.querySelector(".menSix").style.display = "block";
                    document.querySelector(".childSix").style.display = "none";
                    document.querySelector(".womenSix").style.display = "none";

                    document.querySelector(".menSeven").style.display = "block";
                    document.querySelector(".womenSeven").style.display = "none";
                    document.querySelector(".childSeven").style.display = "none";

                    document.querySelector(".womenEight").style.display = "none";
                    document.querySelector(".menEight").style.display = "block";
                    document.querySelector(".childEight").style.display = "none";

                    document.querySelector(".womenNine").style.display = "none";
                    document.querySelector(".menNine").style.display = "block";
                    document.querySelector(".childNine").style.display = "none";

                    document.querySelector(".womenTen").style.display = "none";
                    document.querySelector(".childTen").style.display = "none";
                    document.querySelector(".menTen").style.display = "block";

                    document.querySelector(".menEleven").style.display = "block";
                    document.querySelector(".ladiesEleven").style.display = "none";
                    document.querySelector(".childEleven").style.display = "none";

                    document.querySelector(".womenTwelve").style.display = "none";
                    document.querySelector(".childTwelve").style.display = "none";
                    document.querySelector(".menTwelve").style.display = "block";
                }
                else if (btnCon == "Women") {
                    piece.forEach(element => {
                        element.style.visibility = "hidden";
                    });
                    load.style.display = "block";

                    setTimeout(() => {
                        load.style.display = "none";

                        piece.forEach(element => {
                            element.style.visibility = "visible";
                        });
                    }, 1000);

                    document.querySelector(".menOne").style.display = "none";
                    document.querySelector(".womenOne").style.display = "block";
                    document.querySelector(".childOne").style.display = "none";

                    document.querySelector(".menTwo").style.display = "none";
                    document.querySelector(".ladiesTwo").style.display = "block";
                    document.querySelector(".childTwo").style.display = "none";

                    document.querySelector(".childPic1").style.display = "none";
                    document.querySelector(".menThree").style.display = "none";
                    document.querySelector(".womenThree").style.display = "block";

                    document.querySelector(".menFour1").style.display = "none";
                    document.querySelector(".womenFour").style.display = "block";
                    document.querySelector(".childFour").style.display = "none";

                    document.querySelector(".ladiesAll1").style.display = "block";
                    document.querySelector(".menFour").style.display = "none";
                    document.querySelector(".childFive").style.display = "none";

                    document.querySelector(".menSix").style.display = "none";
                    document.querySelector(".womenSix").style.display = "block";
                    document.querySelector(".childSix").style.display = "none";

                    document.querySelector(".menSeven").style.display = "none";
                    document.querySelector(".womenSeven").style.display = "block";
                    document.querySelector(".childSeven").style.display = "none";

                    document.querySelector(".womenEight").style.display = "block";
                    document.querySelector(".menEight").style.display = "none";
                    document.querySelector(".childEight").style.display = "none";

                    document.querySelector(".womenNine").style.display = "block";
                    document.querySelector(".menNine").style.display = "none";
                    document.querySelector(".childNine").style.display = "none";

                    document.querySelector(".womenTen").style.display = "block";
                    document.querySelector(".childTen").style.display = "none";
                    document.querySelector(".menTen").style.display = "none";

                    document.querySelector(".menEleven").style.display = "none";
                    document.querySelector(".childEleven").style.display = "none";
                    document.querySelector(".ladiesEleven").style.display = "block";

                    document.querySelector(".womenTwelve").style.display = "block";
                    document.querySelector(".childTwelve").style.display = "none";
                    document.querySelector(".menTwelve").style.display = "none";
                }

                else if (btnCon == "Children") {
                    piece.forEach(element => {
                        element.style.visibility = "hidden";
                    });
                    load.style.display = "block";

                    setTimeout(() => {
                        load.style.display = "none";

                        piece.forEach(element => {
                            element.style.visibility = "visible";
                        });
                    }, 1000);

                    document.querySelector(".menOne").style.display = "none";
                    document.querySelector(".womenOne").style.display = "none";
                    document.querySelector(".childOne").style.display = "block";

                    document.querySelector(".menTwo").style.display = "none";
                    document.querySelector(".ladiesTwo").style.display = "none";
                    document.querySelector(".childTwo").style.display = "block";

                    document.querySelector(".childPic1").style.display = "block";
                    document.querySelector(".menThree").style.display = "none";
                    document.querySelector(".womenThree").style.display = "none";

                    document.querySelector(".menFour1").style.display = "none";
                    document.querySelector(".womenFour").style.display = "none";
                    document.querySelector(".childFour").style.display = "block";

                    document.querySelector(".ladiesAll1").style.display = "none";
                    document.querySelector(".menFour").style.display = "none";
                    document.querySelector(".childFive").style.display = "block";

                    document.querySelector(".menSix").style.display = "none";
                    document.querySelector(".womenSix").style.display = "none";
                    document.querySelector(".childSix").style.display = "block";

                    document.querySelector(".menSeven").style.display = "none";
                    document.querySelector(".womenSeven").style.display = "none";
                    document.querySelector(".childSeven").style.display = "block";

                    document.querySelector(".womenEight").style.display = "none";
                    document.querySelector(".menEight").style.display = "none";
                    document.querySelector(".childEight").style.display = "block";

                    document.querySelector(".womenNine").style.display = "none";
                    document.querySelector(".menNine").style.display = "none";
                    document.querySelector(".childNine").style.display = "block";

                    document.querySelector(".womenTen").style.display = "none";
                    document.querySelector(".childTen").style.display = "block";
                    document.querySelector(".menTen").style.display = "none";

                    document.querySelector(".menEleven").style.display = "none";
                    document.querySelector(".ladiesEleven").style.display = "none";
                    document.querySelector(".childEleven").style.display = "block";

                    document.querySelector(".womenTwelve").style.display = "none";
                    document.querySelector(".childTwelve").style.display = "block";
                    document.querySelector(".menTwelve").style.display = "none";

                }

            }
        }
    });

}

let secondrow = document.querySelector(".secondRow");
let moreloader = document.querySelector(".moreLoad img");
let more = document.querySelector(".moreLoad button");

more.addEventListener('click', function () {
    more.style.display = "none";
    moreloader.style.display = "block";
    setTimeout(() => {
        moreloader.style.display = "none";
        secondrow.style.display = "flex";
    }, 1000);

});

let thirdrow = document.querySelector(".thirdRow");
let moreloader2 = document.querySelector(".moreLoad2 img");
let more2 = document.querySelector(".moreLoad2 button");

more2.addEventListener('click', function () {
    more2.style.display = "none";
    moreloader2.style.display = "block";
    setTimeout(() => {
        moreloader2.style.display = "none";
        thirdrow.style.display = "flex";
    }, 1000);
});

let go = document.getElementById("goup");
window.addEventListener('scroll', function () {
    if (window.scrollY > 250) {
        go.style.display = "block";
    }
    else {
        go.style.display = "none";
    }
})

go.addEventListener('click', function () {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    })
});

let product = document.querySelectorAll(".products");
let i;
for (i = 0; i < product.length; i++) {
    product[i].addEventListener('click', function (e) {
        let imgHeight = document.querySelector(".slider");
        let height = getComputedStyle(imgHeight).height;
        height = parseInt(height);
        console.log(typeof height);
        console.log(height);
        e.preventDefault();
        window.scrollTo({
            top: height - 77,
            behavior: "smooth"
        })
    })
}

document.querySelector(".home").addEventListener('click', function (e) {
    e.preventDefault();
    window.scrollTo({
        top: 1,
        behavior: "smooth"
    })
})




