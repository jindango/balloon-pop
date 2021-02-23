let balloons_popped = 0;
let number_popped_to_win = 10;

function handleBalloonClick(e) {
    e.target.style.backgroundColor = "#ededed";
    e.target.textContent = "POP!";
    balloons_popped = balloons_popped + 1;
    e.target.removeEventListener('click', handleBalloonClick);

    if (balloons_popped === number_popped_to_win) {
        document.getElementById('balloon-gallery').innerHTML = '';
        let message = document.getElementById('you-win').style.displaya = '';
    }
}

let balloons = document.getElementsByClassName("balloon");
for (let i = 0; i < balloons.length; i++ ) {
    balloons[i].addEventListener('click', handleBalloonClick);
}
