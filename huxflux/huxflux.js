/**
 * @returns {Number[]}
 */
function huxflux() {
    let Number = [];

    let recursion = () => {
        let newNum = Math.floor(Math.random() * 36);
        if (Number.indexOf(newNum) == -1 && newNum !== 0) {
            return newNum;
        } else {
            return recursion();
        }
    }

    for (let i = 0; i < 7; i++) {
            Number.push(recursion());
    }
    return Number;
}

export {
    huxflux
};