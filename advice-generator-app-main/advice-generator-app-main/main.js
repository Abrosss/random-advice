const btn = document.querySelector('#btn')
const advice = document.querySelector('#adviceText')
let adviceNumber=document.querySelector('#adviceNumber')
let num = 117;


//when a page loads, an advice is on the screen
window.onload = () =>{
    getAdvice();
}

//when clicking a dice button, a new advice appears
btn.addEventListener('click', () =>{
    getAdvice();
    counter();
;
})

//count advices
function counter(){
    num++;
    document.getElementById("adviceNumber").innerHTML =`ADVICE#${num}`
}
//function to get an advice using fetch
function getAdvice(){
fetch('https://api.adviceslip.com/advice').then(response=>{
    return response.json();
}).then(adviceText=>{
    const adviceObj =adviceText.slip;
    advice.innerText = `“${adviceObj.advice}”`
}).catch(error=>{
    consolele.log(error)
})
}
