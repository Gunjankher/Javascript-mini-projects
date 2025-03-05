const answer = document.querySelector('.answer')
const btns  = document.querySelectorAll('btn')
const gameStart = document.querySelector('.game-start')
const arr = ['Rock', 'Paper', 'Scissor']

const randomGuess = ()=>{

    const random = Math.floor(Math.random()*arr.length)

     return arr[random]
}

console.log(randomGuess());






btns.forEach(button=>{
    button.addEventListener('click',()=>{
        console.log(`clicked`);
        
    })
})



gameStart.addEventListener('click',()=>{
    console.log(`clicked`);
    
})