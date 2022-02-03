const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.querySelectorById("btn");
const color = document.querySelector(".color");

btn.addEventListener('click', function() {
    // our goal is to get a random # between 0-3 (based on array index numbers)
    const randomNumber = getRandomNumber();
    document.body.style.backgroundColor = colors[randomNumber];
    // select colour to  change it
    color.textContent = colors[randomNumber];
})

function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
}