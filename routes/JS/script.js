let Capitallise = document.querySelector(".Capitallise");
let UpperCase = document.querySelector(".UpperCase");
let lowercase = document.querySelector(".LowerCase");
let paragrap = document.querySelector('p');

function CapitalliseFn() {
    let main = paragrap.textContent;
    let spl = main.split(' ');
    for (let i = 0; i < spl.length; i++) {
        let splValue = spl[i];
        let getValue = splValue.charAt(0).toUpperCase() + splValue.slice(1);
        spl[i] = getValue;
    }
    paragrap.textContent = spl.join(' ');
}
function UpperCaseFn() {
    let main = paragrap.textContent;
    paragrap.textContent = main.toUpperCase();
}
function lowercaseFn() {
    let main = paragrap.textContent;
    paragrap.textContent = main.toLowerCase();
}
Capitallise.addEventListener('click', CapitalliseFn);
UpperCase.addEventListener('click', UpperCaseFn)
lowercase.addEventListener('click', lowercaseFn)