function pinGenerator(){
    const pin = document.getElementById('show-pin');
    const pinInput = Math.round(Math.random() * 10000);
    const pinText = pinInput + '';
    if(pinText.length == 4){
        pin.value = pinInput;
    }
    else{
        pinGenerator();
    }
}
function matchNumber(){
    const calcInputValue = document.getElementById('calc-input').value;
    const generateValue = document.getElementById('show-pin').value;
    const success = document.getElementById('notify-success');
    const errorDisplay = document.getElementById('notify-fail');
    if(calcInputValue == generateValue){
        success.style.display = 'block';
        errorDisplay.style.display = 'none';
    }
    else{
        errorDisplay.style.display = 'block';
        success.style.display = 'none';
    }
}

document.getElementById('generate-pin').addEventListener('click', function(){
    pinGenerator();
});

document.getElementById('calc-btn').addEventListener('click', function(event){
    const calcValue = event.target.innerText;
    const calcInput = document.getElementById('calc-input');
    const previousCalc = calcInput.value;
    const newCalc = previousCalc + calcValue;
    calcInput.value = newCalc;
    if(isNaN(calcValue)){
        calcInput.value = '';
    }
});

document.getElementById('submit-calc').addEventListener('click', function(){
    matchNumber();
});