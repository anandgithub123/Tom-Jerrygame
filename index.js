console.log("Hello guys this is my first gaming app");
score = 0;
cross=true;
document.onkeydown = function (e) {
    if (e.keyCode == 38) {
        let jerry = document.querySelector(".Jerry")
        jerry.classList.add("animatejerry");
        setTimeout(() => {
            jerry.classList.remove("animatejerry");
        }, 800);

    }
    else if (e.keyCode == 39) {
        jerry = document.querySelector(".Jerry");
        jerryx = parseInt(window.getComputedStyle(jerry, null).getPropertyValue("left"));
        jerry.style.left = jerryx + 112 + "px";



    }



    else if (e.keyCode == 37) {
        jerry = document.querySelector(".Jerry");
        jerryx = parseInt(window.getComputedStyle(jerry, null).getPropertyValue("left"));
        jerry.style.left = (jerryx - 112) + "px";




    }
}


setInterval(() => {
    jerry = document.querySelector(".Jerry");
    gameOver = document.querySelector(".gameOver");
    Tom = document.querySelector(".Tom")


    jx = parseInt(window.getComputedStyle(jerry, null).getPropertyValue("left"))
    jy = parseInt(window.getComputedStyle(jerry, null).getPropertyValue("top"))


    Tx = parseInt(window.getComputedStyle(Tom, null).getPropertyValue("left"))
    Ty = parseInt(window.getComputedStyle(Tom, null).getPropertyValue("top"))


    offsetX = Math.abs(jx - Tx);
    offsetY = Math.abs(jy - Ty);



    if (offsetX < 220 && offsetY < 113) {
        gameOver.style.visibility = 'visible';
        console.log("gameover");
        Tom.classList.remove("obstacleTom");
    }
    else if (offsetX<145 && cross) {
        score++;
        updateScore(score);
        cross=false;
        setTimeout(() => {
            cross=true;
        }, 1000);
    }


}, 100);

function updateScore(score) {
    document.getElementById("yourscore").innerHTML = "Your Score:"+score;



}