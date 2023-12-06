import getNum from "./getNum"

export default function calculateResult(calcData){
    const firstNum = getNum(calcData.result) || getNum(calcData.previousNum) 
    const secondNum = getNum(calcData.currentNum) || getNum(calcData.previousNum) || getNum(calcData.result)
    
    const op = calcData.operation 
  
    if (calcData.currentNum[0] === "0" && calcData.currentNum.length === 1) {
      secondNum = 0
    }
  
    switch(op){
      case "+":
        return (firstNum + secondNum).toString()
        break
      case "−":
        return (firstNum - secondNum).toString()
        break
      case "x":
        return (firstNum * secondNum).toString()
        break
      case "÷":
        return (firstNum / secondNum).toString()
        break
    }
  }