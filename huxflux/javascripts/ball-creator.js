import { gsap, Bounce, Power0, Elastic } from "../node_modules/gsap/all.js";
import { huxflux } from '../huxflux.js';
let called = 0;
/**
 * @param Number number the number contained in the ball
 */
function createBall(number) {
    const ball = document.createElement('span');
    ball.classList.add('ball');
    ball.innerHTML = number;
    return ball;
}
/**
 * @param Number[] balls an array of numbers
 */
function appendBalls(balls) {
    called++;
    const ballRow = document.querySelector('.ball-row');
    ballRow.innerHTML = '';
    if (balls && balls.length) {
        for (let i = 0; i < balls.length; i++) {
            const ball = createBall(balls[i]);
            gsap.from(ball, { duration: 1.2, y: -100 + (i * 3), ease: Bounce.easeOut, delay: 0.1 * i });
            ballRow.append(ball);
            if (i === balls.length - 1 && called % 10 === 0) {
                setTimeout(function() {
                    gsap.to(ball, { duration: 15, rotation: 360 * 3, x: ball.clientWidth * 3, ease: Power0.easeIn });
                }, 3000)
            }
        }
    }
}


document.querySelector('#huxflux-button').addEventListener('click', function() {
    appendBalls(huxflux());
});

//Just for style
document.querySelectorAll('button').forEach((btn) => btn.addEventListener('mousedown', function(e) {
    gsap.to(btn, { duration: 0.1, scale: 0.9 });
}));

document.querySelectorAll('button').forEach((btn) => btn.addEventListener('mouseup', function(e) {
    gsap.to(btn, { duration: 0.5, scale: 1, ease: Elastic.easeOut.config(1, 0.2) });
}));
const huxFlux = document.querySelectorAll(".huxflux");
const HUXFLUX_LETTERS = ["H", "U", "X", "F", "L", "U", "X"];
setInterval(() => {
    huxFlux.forEach((letter, i) => {
        gsap.to(letter, {
            duration: 0.9,
            onUpdate: () => {
                letter.innerText = HUXFLUX_LETTERS[Math.floor(Math.random() * HUXFLUX_LETTERS.length)]
            },
            onComplete: () => {
                letter.innerText = HUXFLUX_LETTERS[i];
            },
            delay: i * 0.1
        })
    });
}, 10000)