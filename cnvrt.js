let fromul = document.querySelector('.fromul')
let fromulli = document.querySelectorAll('.fromul li')
let toul = document.querySelector('.toul')
let toulli = document.querySelectorAll('.toul li')
let fromp = document.querySelector('.pfrom')
let pto = document.querySelector('.pto')
let inputfrom = document.querySelector('.inputfrom')
let inputto = document.querySelector('.inputto')
let form = document.querySelector('.formmain')
//Defualt valyutalar
let from = 'RUB'
let to = 'USD'
function clickevent() {
    fromul.addEventListener("click", valuef);
    toul.addEventListener("click", valuet);
    inputfrom.addEventListener("keyup", data);
    form.addEventListener("submit", data);
    toul.addEventListener("click", data);
    fromul.addEventListener("click", data);
    document.addEventListener("DOMContentLoaded", data);
}
//ul reng deyismesi
function litest() {
    fromulli.forEach((i) => {
        i.classList.remove('changecolor')
        if (from == i.innerText) {
            i.classList.add('changecolor')
        }
    });
    toulli.forEach((i) => {
        i.classList.remove('changecolor');
        if (to == i.innerText) {
            i.classList.add('changecolor')
        }
    })
}

inputfrom.value = 1;
clickevent();
litest();


// apiden data getir
function data(e) {
    let net;
    e.preventDefault();
    fetch(`https://api.exchangerate.host/latest?base=${from}&symbols=${to}`)
        .then((response) => {
            return response.json();

        })
        .then((data) => {
            net = Object.values(data.rates)[0];
            fromp.innerText = `1 ${from} = ${net} ${to}`
            pto.innerText = `1 ${to} = ${1 / net} ${from}`
            hesabla(net)
        });
}
// soldaki secilmis listin adini from a verir
function valuef(e) {
    if (e.target.className === 'fromli') {
        from = e.target.innerText;
        litest()
    }
    e.preventDefault()
}
//sagdaki secilmis listin adini to  ya verir
function valuet(e) {
    if (e.target.className = 'toli') {
        to = e.target.innerText
        litest();
    }
    e.preventDefault()
}
function hesabla(net) {
    inputto.value = (net * inputfrom.value).toFixed(2)

}




