import { useEffect, useState } from "react" // useState is a hook which is brought in from react 
// useState is a function which returns an array with two elements
// 1. The current state value
// 2. A function to update the state value
// const [count, setCount] = useState(0) // 0 is the initial value of count


function App() {
  // here const means the reference to the array is constant but the value inside the array can change
  const [count, setCount] = useState(15) // 0 is the initial value of count
  // let count = 5

  const addValue = function () {
    //count++ // It will increase the value of count by 1 but it will not render the value on the screen // That's why we need to use "useState - hooks"
    if(count<20){
      setCount(count + 1) // It will increase the value of count by 1 and it will render the value on the screen \
      // setCount(count+1);
      // setCount(count+1);
      // setCount(count+1);
      /* The above three lines will not increase the value of count by 3 because useState sends the data in form of batches */

      // To overcome this problem we can use the following code
      // setCount((prevCount) => {
      //   return prevCount + 1
      // })
      // setCount((prevCount) => {
      //   return prevCount + 1
      // })
      // setCount((prevCount) => {
      //   return prevCount + 1
      // })
      // This will update the value of count by 3
      console.log(count) 
    }
  }

  const subValue = function () {
    if(count>0){
      setCount(count - 1) // It will decrease the value of count by 1 and it will render the value on the screen
      console.log(count) 
    }     
  }

  useEffect(() => { // useEffect is a hook which is brought in from react // It is used to run a function or a piece of code when the component is rendered
    const incButton= document.getElementById('inc')
    const decButton= document.getElementById('dec')
    incButton.addEventListener('click', addValue)
    decButton.addEventListener('click', subValue)
    return () => {
      incButton.removeEventListener('click', addValue)
      decButton.removeEventListener('click', subValue)
    }
  }, [count]) // useEffect will run only when the value of count changes

  return (
    <>  
      <h1>Counter Project</h1>
      <h3>Score : {count}</h3>
      <button id="inc">Increase by one </button>
      
      <button id="dec">Decrease by one </button>
    </>
  )
}

export default App
