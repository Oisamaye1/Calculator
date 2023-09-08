let inputLength = document.querySelectorAll(".input").length
let equals = document.querySelector(".equals")
let symbol = document.querySelectorAll(".symbols").length



// <-----------------Perform the mathematical calculations----------------->
function add(num1, num2) {
    return num1 + num2
}

function subtract(num1, num2) {
    return num1 - num2
}

function multiply(num1, num2) {
    return num1 * num2
}

function divide(num1, num2) {
    return num1 / num2
}

function result(num1, num2, operator) {
    return operator(num1, num2)
}

let inputList = []
let currentS = ''

// <-----------------Show result on screen----------------->
for(let i=0; i<symbol; i++){
    document.querySelectorAll(".symbols")[i].addEventListener("click", symbols)
    
    
    function symbols(){
        symbolValue = document.querySelectorAll(".symbols")[i].value
        currentS = document.querySelectorAll(".symbols")[i].textContent
        screenView()
        
        // <-----------------Get sign and perform calculation accordinly----------------->
        if(symbolValue === "add"){
            equals.addEventListener("click", () => {
                appendList()
                document.querySelector(".screen").textContent = result(inputList[0], inputList[1], add)
            })
        }

        else if(symbolValue === "multiply"){
            equals.addEventListener("click", () => {
                appendList()
                document.querySelector(".screen").textContent = result(inputList[0], inputList[1], multiply)
            })
        }

        else if(symbolValue === "subtract"){
            equals.addEventListener("click", () => {
                appendList()
                document.querySelector(".screen").textContent = result(inputList[0], inputList[1], subtract)
            })
        }

        else if(symbolValue === "divide"){
            equals.addEventListener("click", () => {
                appendList()
                document.querySelector(".screen").textContent = result(inputList[0], inputList[1], divide)
            })
        }

}
}

// <-----------------Receive input and append to the array----------------->

for (let i = 0; i < inputLength; i++) {
    document.querySelectorAll(".input")[i].addEventListener("click", appendList)

    function appendList() {
        inputList.push(document.querySelectorAll(".input")[i].value)
        let inputInt = inputList.map(function (x) {
            return parseInt(x, 10);
        });
        inputList = inputInt
        screenView()
        return inputInt
    }
}

document.querySelector(".delete").addEventListener("click", ()=>{
   inputList.pop()
   return screenView()
})

document.querySelector(".clear").addEventListener("click", ()=>{
    inputList = []
    currentS = ''
    return screenView()
 })
// <-----------------Show result on screen----------------->

function screenView() {
    if (inputList.length < 1) {
        document.querySelector(".screen").textContent = 0
    }
    else if (inputList.length < 2) {
        document.querySelector(".screen").textContent = `${inputList[0]} ${currentS}`
    }
    else {
        document.querySelector(".screen").textContent = `${inputList[0]} ${currentS} ${inputList[1]}`
    }
}