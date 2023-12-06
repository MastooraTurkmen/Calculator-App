import React from "react"
import {nanoid} from 'nanoid'


export default function Buttons({ handleClick, buttonData }) {
    
  function getName(item) {
    const options = [
      [0, "zero"],
      [1, "one"],
      [2, "two"],
      [3, "three"],
      [4, "four"],
      [5, "five"],
      [6, "six"],
      [7, "seven"],
      [8, "eight"],
      [9, "nine"],
      ["+", "plus"],
      ["−", "minus"],
      ["x", "times"],
      ["÷", "divide"],
      ["=", "equals"],
      ["clear", "clear"],
      [".", "decimal"],
      ["+/-", "negative"],
      ["%", "percent"],
    ]
    return options.find( pair => pair[0] === item )[1]
  }

    const numberButtons = Array(10)
    .fill("")
    .map((item, index) => {
      return (
        <button
          key={nanoid()}
          data-number={`${index}`}
          className={`number-button ${getName(index)}`}
          onClick={handleClick}
        >
          {index}
        </button>
      )
    })

    function checkIfHighlighted(item) {
        return item === buttonData.operation ? "highlight" : ""
    }

  const operationsButtons = ["+", "−", "x", "÷"].map((item) => (
    <button
      key={nanoid()}
      data-operation={item}
      className={`operation-button ${getName(item)} ${checkIfHighlighted(item)}`}
      onClick={handleClick}
    >
      {item}
    </button>
  ))

  const otherButtons = ["clear", "=", ".", "%", "+/-"].map((item) => (
    <button
      key={nanoid()}
      data-other={getName(item)}
      className={`${getName(item)} button`}
      onClick={handleClick}
    >
      {item === "clear" ? buttonData.clearOption : item}
    </button>
  ))

//Would it have been easier to just manually create all of the buttons? Yes, probably! Why'd I do it this way? Well, I started doing it this way, and then this kicked in: https://thedecisionlab.com/biases/the-sunk-cost-fallacy 

  return (
    <div className="buttons-container">
      {numberButtons}
      {operationsButtons}
      {otherButtons}
    </div>
  )
}
