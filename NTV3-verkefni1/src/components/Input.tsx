import type React from "react";

export function Input( { value, onChange }: { value: string; onChange: (e: React.ChangeEvent<HTMLInputElement>) => void }) {
   
    function handleChange(e: React.ChangeEvent<HTMLInputElement, HTMLInputElement>): void {
     onChange(e);
    }



 
  




return(
    <>
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