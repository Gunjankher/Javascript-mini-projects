const answer = document.querySelector('.answer')
const btns  = document.querySelectorAll('.btn')
const gameStart = document.querySelector('.game-start')
const arr = ['Rock','Paper','Scissor']








const randomGuess = ()=>{

    const random = Math.floor(Math.random()*arr.length)

     return arr[random]
}

console.log(randomGuess());


let chosenWord = randomGuess()

// console.log(`typeof cwo`,typeof chosenWord);



btns.forEach((button) => {
    button.addEventListener('click', () => {


        // console.log(`btns type`,typeof button.innerText);
        

            if(chosenWord.toLowerCase().trim() === button.innerText.toLowerCase().trim()){
                console.log(`match Found got it !!!!!!!!!!!!!!!!`);
                answer.textContent = `You won congratulation `
                
            }else{
                console.log(`no match`);
                answer.textContent = `you lost answer was ${chosenWord}`
                
            }
    
        
    });
});



gameStart.addEventListener('click',()=>{
    console.log(`clicked`);
  

    chosenWord = randomGuess();
    console.log("New Random Choice:", chosenWord);

    let count = 3
    const words = ['Rock', 'paper', 'scissor']

// start countDown

const countDownTimer = setInterval(()=>{
    if(count>0){
        answer.textContent = count
        count--
    }else{
        clearInterval(countDownTimer)

        let index = 0

        const wordTimer = setInterval(()=>{
            if(index<words.length){
                answer.textContent = words[index]
                index++
            } else{
                answer.textContent = 'game start'
                clearInterval(wordTimer)
            }
        },1000)
    }
},1000)
    
})



