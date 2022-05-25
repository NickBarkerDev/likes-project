const buttons = document.querySelectorAll(".btn");

const btn1 = buttons[0];
const btn2 = buttons[1];
const btn3 = buttons[2];

const spans = document.querySelectorAll(".num-likes");

const span1 = spans[0];
const span2 = spans[1];
const span3 = spans[2];

function incrementLikes(){
    btn1.addEventListener("click", function(){
        span1.innerHTML++;
    })

    btn2.addEventListener("click", function(){
        span2.innerHTML++;
    })

    btn3.addEventListener("click", function(){
        span3.innerHTML++;
    })

}

incrementLikes();

