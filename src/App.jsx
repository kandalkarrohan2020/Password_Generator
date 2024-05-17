import { useState,useCallback, useEffect} from 'react'

import './App.css'

function App() {
  let [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [numbers, setNumbers] = useState(false);
  const [range, setRange] = useState(8);
  const [characters, setCharacters] = useState(false);
  
  
  let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let number = "0123456789";
  let character = "!@#$%&*:><?";
 
  


  let upadatePassword = useCallback(() => {
    setPassword(password = "");
    let demoPassword = "";
    
    if(range != 0){
      if(numbers == true){
        str += number;
      }
      if(characters == true){
        str += character;
      }
      if(name != ""){
        demoPassword = name;
      }

      for(let i = 0; i < range; i++){
         let Random = Math.floor(Math.random() * str.length) + 1;
         demoPassword += str.charAt(Random);
         setPassword(password += demoPassword.charAt(i));
      }
     
    }

  },[range,numbers,characters,name]);
    
   let copy = (event)=>{
    if(password != ""){
      window.navigator.clipboard.writeText(password);
     
      alert("Password Copied Succesfully");
    }
    
  }


  return (
    <div className='App'>
       <div className="Input">
          <input type="text" placeholder='Password'className='password' onChange={(event)=> {setPassword(event.target.value)}} value={password} name='password' disabled/>
          <button type='button' onClick={copy}>Copy</button>
       </div>

       <div className="Name">
           <input type="text" placeholder='Name' className="name" onChange={(event)=> {setName(event.target.value)}} value={name} />
       </div>

       <div className="Select-Items">
         <div className="Numbers">
            <p>Numbers</p>
            <input type="checkbox" className='check' onChange={(event)=> {setNumbers(event.target.checked)}} value={numbers}/>
         </div>

         <div className="Characters">
            <p>Characters</p>
            <input type="checkbox" className='check' onChange={(event)=> {setCharacters(event.target.checked)}} value={characters}/>
         </div>
       </div>
       
       <div className="Range">
           <input type="range" className='range' min="0" max="20" onChange={(event)=> {setRange(event.target.value)}} value={range} />
           <p>{range}</p>
       </div>
       <button onClick={upadatePassword}>
           <h3>Generate Password</h3>
       </button>
    </div>
  )
}

export default App
