
import './App.css'
import Lottery from './Lottery'


function App() {
  let winCondition = (arr)=>{
      return arr.every((num)=> num === arr[0])
  }
  return(
    <>
    <Lottery n={3} winCondition = {winCondition}/>
    </>
  )
}

export default App
