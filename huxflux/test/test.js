import {
    huxflux
} from '../huxflux.js';

/**
 * This file is validating huxflux input
 * Denna filen kontrollerar din huxflux-funktion, att du följer villkoren för uppgiften. Du behöver inte röra något i denna filen, men kika gärna igenom den och försök förstå vad som står. 
 */

const fullList = Array.from({ length: 35 }, (v, i) => i + 1);
function isLengthSeven(list) {
    return list.length === 7;
}

function hasDuplicates(list) {
    let uniqueList = list.reduce((unique, value) => {
        if (unique.includes(value)) {
            return unique;
        } else {
            return [...unique, value];
        }
    }, []);
    return uniqueList.length !== list.length;
}

function isOnlyNumbers(list) {
    return list.some && !list.some(x => typeof x !== 'number');
}

function containsNumbersOutOfRange(list) {
    return list.filter(function(value) {
        return !(isNaN(value) || (value > 0 && value < 36));
    }).length > 0;
}

function displayErrors(errorMessages) {
    document.getElementById('success').style.display = 'none';
    document.getElementById('fail').style.display = 'block';

    const failUl = document.getElementById('fail-ul');
    failUl.style.display = 'block';
    failUl.innerHTML = '';
    errorMessages.forEach(errorMessage => {
        const li = document.createElement('li');
        li.innerHTML = errorMessage;
        failUl.appendChild(li);
    });
}

function displaySuccess() {
    var failUl = document.getElementById('fail-ul');
    failUl.innerHTML = '';
    document.getElementById('fail').style.display = 'none';
    document.getElementById('success').style.display = 'block';
}


export function validate() {
    let errorMessages = [];
    let huxfluxes = [];
    let skip = false;
    for (let i = 0; i < 100; i++) {
        const value = huxflux();
        value && huxfluxes.push(value);
    }
    let flatList = huxfluxes.flat();

    if (!skip && flatList.length === 0) {
        errorMessages.push('<span class="error-span">Listan är tom</span>');
        skip = true;
    }

    if (!skip && !huxfluxes.every(isOnlyNumbers)) {
        errorMessages.push('<span class="error-span">Listan får bara innehålla nummer</span>');
        skip = true;
    }

    if (!skip && !huxfluxes.every(isLengthSeven)) {
        errorMessages.push('<span class="error-span">Längden måste vara 7</span>');
    }

    if (!skip && huxfluxes.some(hasDuplicates)) {
        errorMessages.push('<span class="error-span">Det finns dubletter i listan</span>');
    }

    if (!skip && huxfluxes.some(containsNumbersOutOfRange)) {
        errorMessages.push('<span class="error-span">Det finns nummer i som inte är mellan 1-35</span>');
    }

    if (!skip && huxfluxes.every(x => x.join() === huxfluxes[0].join())) {
        errorMessages.push('<span class="error-span">Funktionen ger samma värden varje gång</span>');
    }


    let lonelyNumbers = fullList.filter(x => !flatList.includes(x))
    if (!skip && lonelyNumbers.length) {
        errorMessages.push('<span style="color: yellow">På hundra försök genererade funktionen aldrig talen ' + lonelyNumbers.join(', ') + '. Kontrollera din kod eller kör testet igen</span>');
    }

    if (errorMessages.length > 0) {
        displayErrors(errorMessages)
    } else {
        displaySuccess()
    }
}
document.getElementById('test-button').onclick = validate;
