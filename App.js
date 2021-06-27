import logo from './logo.svg';
import './App.css';
import JSONDATA from './MOCK_DATA.json'
import { useState } from 'react';
import Nav from './components/Nav';
import SuccessBox from './components/SuccessBox';


function App() {
  const [searchTerm, setSearchTerm] = useState("");
 const onQueue = (key) => {
  setSearchTerm(key)
  }

  const copyFunc = (e) => {
    var copyText = document.getElementsByClassName('myText')[e];
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    document.execCommand('copy')
    

   // alert('copied text' + copyText.value)
    const showAlertBox = () => {
      var success = document.getElementsByClassName('success')[0]
      if(!success.classList.contains('show')){
        success.classList.add('show')
       // console.log('shown',success);
      } 
      setTimeout(function(){(success.classList.remove('show'))}, 1000)
   }
   showAlertBox()
  }

  return (
    <div className="App">
      <div className="success">
        <SuccessBox style={{position:'absolute'}} />
      </div>
      <div>
      <Nav onQueued={onQueue} />
      </div>
      <div>
        <input style={{margin:'25px',borderRadius:'15px',outline:'none'}} type='text' placeholder='Search..' onChange={event => {setSearchTerm(event.target.value)}} />
      </div>
      <div>
      <h4 style={{color:'#bebebe'}}>double click to copy</h4>
     
     {JSONDATA.filter((val) => {
       if(searchTerm == ""){
         return <div>welcome</div>
       } else if (val.message.toLowerCase().includes(searchTerm.toLowerCase()) || val.call_type.toLowerCase().includes(searchTerm.toLowerCase()) || val.queue.toLowerCase().includes(searchTerm.toLowerCase()) | val.result.toLowerCase().includes(searchTerm.toLowerCase())){
         return val
       }
     }).map((val, key) => {
       return <div> <span>
         <div className='box'>
           <input 
           key={val.call_type}
           className="myText"
           onDoubleClick={()=>{copyFunc(key)}}
           type="text"
           value={`${val.call_type}` + ` ` + `${val.queue}` + ` ` + `${val.message}`+ '. ' + `${val.result}`}
           />
         </div>
         </span>
       </div>
     })}
    </div>
    </div>
  );
}

export default App;
