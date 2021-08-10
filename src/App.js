
import './App.css';
import React, { useState } from 'react';

function App() {

const [num,setnum] = useState(0)
const [count,stecount] =useState(1)

function changehandle(e){
  const chh=Number(e.target.value)  
  stecount(chh)

}

function sumhandle(){

const suM = num + count
setnum(suM)
} 
function mhandle(){
const mIn = num-count
setnum(mIn)

}

return (
<div className="App">
<header className="App-header">
<div className="items-co">
<div className="items">
<buttom onClick={mhandle}>-</buttom>
</div>
<div className="item1">
<p>{num}</p>
</div>
<div className="items">
<buttom onClick={sumhandle} >+</buttom>
</div>
</div>

<lable for='text'>step</lable>
<input type="number" onInput={changehandle} placeholder="type number.." />

</header>
</div>
);
}

export default App;


