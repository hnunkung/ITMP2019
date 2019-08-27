
/* Checking first reloaded and clicked */
state = 0;
function play(){
    console.log(state);
    if (state == 0) {
        cookie1.classList.add("cookie-hide");
        cookie2.classList.add("cookie-show");
        state = state + 1;
        setTimeout(function(){
            getfortune();
        },2200);
    } else {
        huarand=Math.floor(Math.random()*360);
        cookie2.classList.add("cookie-show2");
        cookie2.style.filter = "hue-rotate("+huarand+"deg)";
        titlea.style.filter = "hue-rotate("+huarand+"deg)";
        setTimeout(function(){
            getfortune();
        },100);
    }
}
/* Massages */
function getfortune(){
    massages = ['คุณไข่จะเป็นเพนกิ้นน่าร้ากกก',
    'กิ้นบด กิ้นบด กิ้นบดดดด!!!',
    'กิ้นบดคือคนที่ไม่รักดี จะต้องถูกลงโทษไม่ให้ไปดูเธียเตอร์นะค๊าาา',
    'อ๊บไสไม้',
    'กว่าจะเป็นเพนกิ้นที่แข็งแรง','รักที่สุดดดดดดด',
    'พรรคพลังเพนกิ้น'];
    rand = Math.floor(Math.random()*massages.length);
    fortune.innerText = massages[rand];
    fortune.style.top="96px";
    fortune.style.opacity=1;


}
/* ReMoving the ClassList */
function play2(){
    cookie1.classList.remove("cookie-hide");
    cookie1.classList.remove("cookie-1");
    cookie2.classList.remove("cookie-show2");
    cookie1.style.transform="scale(0)";

    setTimeout(function(){
        replay();
    },100);
}

/* Re-adding ClassList*/
function replay(){
    //location.reload();
    cookie1.classList.remove("cookie-hide");
    cookie2.classList.remove("cookie-show");

    setTimeout(function(){
        play();
    },100);
    
}

// var song;

// function soundtracking(){
//     createCanvas
// }