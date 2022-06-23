const colors = ["green", "red","rgb(139, 0, 0)", "rgba(133,122,200)", "#f15025" , "rgb(255, 160, 122)","rgb(255, 20, 147)", "rgb(255, 105, 180)"];

const btn  = document.getElementById("btn");
const color = document.querySelector(".color")

btn.addEventListener("click",function(){

    const randomNumber = getRandomNumber();
    console.log(randomNumber);

    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
});


function getRandomNumber() {
    return Math.floor(Math.random()*colors.length);
}