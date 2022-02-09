// set initial and then count
let count = 0;

//select value and buttons
const value = document.querySelector('#value');
const btns = document.querySelectorAll('.btn');

btns.forEach(function(btn) {
    btn.addEventListener('click', function(e) {
        const styles = e.currentTarget.classList;
        if (styles.contains('decrease')) {
            count--; // decreasing count by 1
        } else if(styles.contains('increase')) {
            count++;
        } else {
            count = 0;
        }
        if(count > 0) {
            value.style.color = "green";
        }
        if(count < 0) {
            value.style.color = "red";
        }
        if(count === 0) {
            value.style.color = "black"; // or #222
        }
        value.textContent = count; // changes the number that appears
    })
} )