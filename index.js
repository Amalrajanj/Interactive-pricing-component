let price = document.getElementById('price')
let priceMobile = document.getElementById('priceMobile')
let range = document.getElementById('range')
let periodCheckBox = document.getElementById('checkP')
function check(){
    console.log(periodCheckBox.checked);
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

