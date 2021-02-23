let balloons_popped = 0;
let number_popped_to_win = 10;

let my_variable = function (x) { return x +1; };

document.addEventListener('click', function(e){
    if (e.target.className === "balloon"){
        e.target.style.backgroundColor = "#ededed";
        e.target.textContent = "POP!";
        balloons_popped = balloons_popped + 1;
        e.target.removeEventListener('click', function() {} )
        checkIfAllBalloonsPopped();
    }   
});

function checkIfAllBalloonsPopped() {
    if (balloons_popped === number_popped_to_win) {
        let gallery = document.getElementById('balloon-gallery');
        let message = document.getElementById('you-win');
        gallery.innerHTML = '';
        message.style.display = 'block';
    }
};
