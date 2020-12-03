import React, { useState } from 'react';
import ReactDOM from 'react-dom';


const History = (props) => {
  if (props.allclicks.length === 0) {
    return  <div>The app is pressing</div>
  }
  return <div>
    button press the history : { props.allclicks.join(" ") }
  </div>
}


const App = () => {

  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)
  const [allclicks, setAllClick] = useState([])

  const handleLeftClick = () => {
    setAllClick(allclicks.concat("L"))
   
    setLeft(left+1)
  }
  const handleRightClick = () => {
    setAllClick(allclicks.concat("R"))
    setRight(right+1)
  }
 
  return(
    <div>
      {left}
      <button onClick={handleLeftClick}>Left</button>
      <button onClick={handleRightClick}>Right</button>
      {right}
      <div>
        <p> {allclicks.join(" ")} </p>
      </div>
      <History allclicks={ allclicks } />
    </div>
  );
}


ReactDOM.render(<App />,document.getElementById('root'));
