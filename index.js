let price = document.getElementById('price')
let priceMobile = document.getElementById('priceMobile')
let period = document.querySelector('.price-tag-month')
let periodMobile = document.querySelector('.price-tag-month-mobile')
let range = document.getElementById('range')
let periodCheckBox = document.getElementById('checkP')

function check(){
    if(periodCheckBox.checked == false){
        period.innerHTML = '/month'
        periodMobile.innerHTML = '/month'
    }else{
        period.innerHTML = '/year'
        periodMobile.innerHTML = '/year'
    }
}

range.oninput = function pricing(){
    if(periodCheckBox.checked == false){
        price.innerHTML = range.value
        priceMobile.innerHTML = range.value
    }else{
        price.innerHTML = range.value * 12
        priceMobile.innerHTML = range.value * 12
    }
}


