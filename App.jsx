import React from "react"
import Buttons from "./components/Buttons"
import Display from "./components/Display"
import calculateResult from "./utilities/calculateResult"
import getNum from "./utilities/getNum"

export default function App() {
    
    const INITIAL_STATE = {
        currentNum: [],
        previousNum: [],
        operation: undefined,
        result: []
    }
    
    const [currentCalc, setCurrentCalc] = React.useState(INITIAL_STATE)

    const { currentNum, previousNum, operation, result } = currentCalc
                   
    const conditionOne   = !currentNum[0] && !previousNum[0] && !operation && !result[0]
    const conditionTwo   =  currentNum[0] && !previousNum[0] && !operation && !result[0]
    const conditionThree = !currentNum[0] &&  previousNum[0] &&  operation && !result[0]
    const conditionFour  =  currentNum[0] &&  previousNum[0] &&  operation && !result[0]
    const conditionFive  =  currentNum[0] &&  previousNum[0] &&  operation &&  result[0]
    const conditionSix   = !currentNum[0] && !previousNum[0] &&  operation &&  result[0]

    function handleClick(event) {
            
        const numFromClick      = event.target.dataset.number
        const opFromClick       = event.target.dataset.operation
        const otherFromClick    = event.target.dataset.other
        const percentFromClick  = otherFromClick === "percent"  ? otherFromClick : undefined
        const decimalFromClick  = otherFromClick === "decimal"  ? otherFromClick : undefined
        const equalsFromClick   = otherFromClick === "equals"   ? otherFromClick : undefined
        const negativeFromClick = otherFromClick === "negative" ? otherFromClick : undefined
        const clearFromClick    = otherFromClick === "clear"    ? otherFromClick : undefined
        const invalidEntry      = checkForInvalidEntry(numFromClick)
        
        function checkForInvalidEntry() {
        	if (
        		numFromClick === "0" &&
        		currentNum.length === 1 &&
        		currentNum[0] === "0"
        	) {
        		return true
        	} else {
        		if (
        			currentNum.join("") === "0." &&
        			conditionTwo &&
        			!numFromClick &&
        			!clearFromClick
        		) {
        			return true
        		} else {
        			return false
        		}
        	}
        }
          
        if (invalidEntry) {
          return
        }
        
/* Challenge
    
  The number buttons aren't working because they aren't updating the currentCalc state. Your objective is to fix this by doing the following: 
  
      1. Complete the three tasks on lines 82, 100 and 118. Each task involves updating the state 
         in a certain way based on which of the six conditions defined on line 20 above is true. 
         
      2. Test the calculator by using it in a variety of ways that a real user might use it. Try to 
         reproduce each of the six conditions to test it throughly!  
  
  To make the calculator work, you *only* need to complete the three tasks below, and for each task,you *only* need to update the currentCalc state! */
  
  
        if (numFromClick) {
          
          if (conditionOne || conditionTwo || conditionThree || conditionFour) {
         
            
/* Task 1 of 3 — Building a Number 
  
      a. The numFromClick value should be added to the end of the currentNum array of currentCalc, 
         preserving any values that are already saved in the array. 
         
      b. All of the other properties of currentCalc should be preserved. 
                        
---------------Write your code for task 1 below.------------------------------------------------*/  
          
          
		setCurrentCalc(prevCalc => {
			return { ...prevCalc, currentNum: [...prevCalc.currentNum, numFromClick] }
		})
          
          
   
/*-------------Write your code for task 1 above.------------------------------------------------*/
          
          } else if (conditionFive) {
            
/* Task 2 of 3 — Starting a New Calculation
            
      a. The numFromClick value should be added to the currentNum array of currentCalc. Any   
         previous values in the array should *not* be preserved — the numFromClick value should become the *only* value in the array. 

      b. All of the other properties of currentCalc should be reverted to their initial values, 
         which are saved in INITIAL_STATE (line 9 above).
             
---------------Write your code for task 2 below.------------------------------------------------*/        
          setCurrentCalc({...INITIAL_STATE, currentNum: [numFromClick]})
          
          
          
          
/*-------------Write your code for task 2 above.------------------------------------------------*/

          } else if (conditionSix) {
            
/* Task 3 of 3 — Continuing a Calculation 
            
      a. The value saved in the result array of currentCalc should be added to the empty 
          previousNum array, and the result array should be made empty. In other words:
                      
          Before      previousNum: []
                      result: [someValue]
                      
          After       previousNum: [someValue]
                      result: []
                        
      b. The value of numFromClick should be saved in the empty currentNum array. 
                
      c. The value of operation (a string) should be preserved. 
                       
---------------Write your code for task 3 below.------------------------------------------------*/
              
            setCurrentCalc(prevCalc => {
				return {
					previousNum: [prevCalc.result],
					result: [], 
					currentNum: [numFromClick],
					operation: prevCalc.operation
				}
			})
              



/*-------------Write your code for task 3 above.------------------------------------------------*/

          }
      }
        
/* 🚨  🚨  🚨  🚨  🚨  🚨  🚨  🚨    🚨  SPOILER ALERT!  🚨  🚨  🚨  🚨  🚨  🚨  🚨  🚨  🚨   
        
        
        
        
        To avoid any spoilers, don't scroll down! 

        Alternatively, if you're very stuck, consider scrolling down. Many of the subsequent 
        lines of code are analogous to the ones you're supposed to write above.  
        
        
      
        
 🚨  🚨  🚨  🚨  🚨  🚨  🚨  🚨    🚨  SPOILER ALERT!  🚨  🚨  🚨  🚨  🚨  🚨  🚨  🚨  🚨   */        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        else if (opFromClick) {

        	if (conditionTwo) {
        		setCurrentCalc(prevCalc => ({
        			currentNum: [],
        			previousNum: prevCalc.currentNum,
        			operation: opFromClick,
        			result: []
        		}))
        	} else if (conditionThree || conditionSix) {
        		setCurrentCalc(prevCalc => ({
        			...prevCalc,
        			operation: opFromClick
        		}))
        	} else if (conditionFour) {
        		setCurrentCalc(prevCalc => ({
        			currentNum: [],
        			previousNum: [],
        			result: calculateResult(prevCalc).split(""),
        			operation: opFromClick
        		}))
        	} else if (conditionFive) {
        		setCurrentCalc(prevCalc => ({
        			previousNum: prevCalc.result,
        			operation: opFromClick,
        			currentNum: [],
        			result: []
        		}))
        	}
        } else if (equalsFromClick) {
        
        	if (conditionThree) {
        		setCurrentCalc(prevCalc => ({
        			...prevCalc,
        			currentNum: previousNum,
        			result: calculateResult(prevCalc).split("")
        		}))
        	} else if (conditionFour || conditionFive || conditionSix) {
        		setCurrentCalc(prevCalc => ({
        			...prevCalc,
        			result: calculateResult(prevCalc).split("")
        		}))
        	}
        } else if (percentFromClick) {
        
        	if (conditionTwo || conditionFour) {
        		setCurrentCalc(prevCalc => ({
        			...prevCalc,
        			currentNum: (getNum(prevCalc.currentNum) /
        				100).toString().split("")
        		}))
        	} else if (conditionFive) {
        		setCurrentCalc(prevCalc => ({
        			...INITIAL_STATE,
        			currentNum: (getNum(prevCalc.result) / 100)
        				.toString().split("")
        		}))
        	}
        } else if (negativeFromClick) {
        
        	if (conditionTwo || conditionFour) {
        		setCurrentCalc(prevCalc => ({
        			...prevCalc,
        			currentNum: (getNum(prevCalc.currentNum) * -1)
        				.toString().split("")
        		}))
        	} else if (conditionFive) {
        		setCurrentCalc(prevCalc => ({
        			...prevCalc,
        			result: (getNum(prevCalc.result) * -1)
        				.toString().split("")
        		}))
        	}
        } else if (decimalFromClick) {
        
        	if (conditionOne || conditionThree) {
        		setCurrentCalc(prevCalc => ({
        			...prevCalc,
        			currentNum: ["0", "."]
        		}))
        	} else if (!currentNum.includes(".") && (
        			conditionTwo ||
        			conditionThree ||
        			conditionFour ||
        			conditionSix)) {
        		setCurrentCalc(prevCalc => ({
        			...prevCalc,
        			currentNum: [...prevCalc.currentNum, "."]
        		}))
        	} else if (conditionFive) {
        		setCurrentCalc({
        			...INITIAL_STATE,
        			currentNum: ["0", "."]
        		})
        	}
        } else if (clearFromClick) {

        	if (conditionFive) {
        		setCurrentCalc(prevCalc => ({
        			...INITIAL_STATE,
        			currentNum: prevCalc.result
        		}))
        	} else if (conditionTwo || conditionSix) {
        		setCurrentCalc(INITIAL_STATE)
        
        	} else if (conditionThree) {
        		setCurrentCalc(prevCalc => ({
        			currentNum: prevCalc.previousNum,
        			previousNum: [],
        			result: [],
        			operation: undefined
        		}))
        	} else if (conditionFour) {
          
        		if (currentNum.length != 0) {
        			setCurrentCalc(prevCalc => ({
        				...prevCalc,
        				currentNum: []
        			}))
        		} else {
        			setCurrentCalc(INITIAL_STATE)
        		}
        	}
        } else {
        	setCurrentCalc(INITIAL_STATE)
        }
    }
    
    
    function getClearOption() {
        if ( conditionOne ||  conditionSix || (conditionFour && currentNum.length === 0) ){
          return "AC"
        } else {
          return "C"
        }
      }
      
    const buttonData = {operation: currentCalc.operation, clearOption: getClearOption()}
  

    return (
      <div className="calculator-container">
        <Display currentCalc={currentCalc} />
        <Buttons handleClick={handleClick} buttonData={buttonData}  />
      </div>
    )
}
