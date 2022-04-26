const fromul = document.querySelector('.fromul')
const fromulli = document.querySelectorAll('.fromul li')
const toul = document.querySelector('.toul')
const toulli = document.querySelectorAll('.toul li')
const fromp = document.querySelector('.pfrom')
const pto = document.querySelector('.pto')
const inputfrom = document.querySelector('.inputfrom')
const inputto = document.querySelector('.inputto')
const form = document.querySelector('.formmain')
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
    e.preventDefault();

    let net;
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
    e.preventDefault()

    if (e.target.className === 'fromli') {
        from = e.target.innerText;
        litest()
    }
    
}
//sagdaki secilmis listin adini to  ya verir
function valuet(e) {
    e.preventDefault()
    
    if (e.target.className = 'toli') {
        to = e.target.innerText
        litest();
    }
    
}
function hesabla(net) {
    inputto.value = (net * inputfrom.value).toFixed(2)

}




