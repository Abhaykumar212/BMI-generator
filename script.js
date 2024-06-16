function calculate(){
    let height = parseInt(document.getElementById('height').value)
    let weight = parseInt(document.getElementById('weight').value)
    height /= 100;
    const squareHeight = height*height
    let ans = (weight/squareHeight).toFixed(2)
    if(ans<18.6){
        document.getElementById('result').innerHTML = `Your BMI is ${ans} (Under Weight)`
    }
    else if(ans>18.6 && ans<24.9){
        document.getElementById('result').innerHTML = `Your BMI is ${ans} (Normal Range)`
    }
    else{
        document.getElementById('result').innerHTML = `Your BMI is ${ans} (Over Weight)`
    }
}
