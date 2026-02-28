import type React from "react";
import { useState } from "react";

export function Input( { value, onChange }: { value: string; onChange: (e: React.ChangeEvent<HTMLInputElement>) => void }) {
   
    function handleChange(e: React.ChangeEvent<HTMLInputElement, HTMLInputElement>): void {
     onChange(e);
    }


    const [myName, setMyName] = useState("")
  const handleNameChange = (e) => {
    setMyName(e.target.value);
  }

  const [email, setEmail] = useState("")
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  }
 
  




return(
    <>

    
 <div>
        <input 
        name='thy name'
        type="text" 
        value={myName} 
        onChange={(e) => handleNameChange(e)}
        />
  
        <div>my Name is</div>
      <div>{myName}</div>
      </div>

      <div>
        <input 
        name='thy email'
        type="email" 
        value={email} 
        onChange={(e) => handleEmailChange(e)}
        />
        
        <div>my email is</div>
      <div>{email}</div>
      <button type='submit' >Submit</button>
      
      </div>





    <div>thy name: </div>
   
    <input 
    type="text"
    value={value}
    onChange={(e) => handleChange(e)}
    />
   <div>{value}</div>
    




    <div>
        
      <button type='submit' onClick={() => alert("Submitted:" + value) }>Submit</button>
      <div className="submitted">Submitted</div>
      
      </div>





      </> 
)

}