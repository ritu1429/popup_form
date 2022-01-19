import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export const Page1 = () => {

    const[data,setData]=useState({
        fname:"",
        lname:"",
        address:"",
        city:"",
        country:""
    });

    const formSubmit=(e)=>{
        e.preventDefault();
        console.log(data);
       setData(data);
    }


    const formChange=(e)=>
    {
      //setData ( e.target.value);
      setData({...data,[e.target.name]:e.target.value})
     // console.log(e.target.value);
    }

        let navigate=useNavigate();
    return (

        <div>

            <form action='' onSubmit={formSubmit}>
            
            <div>
            <label>First Name</label>
                <input type="text"
                       required
                       name="fname"
                       onChange={formChange}
                         />
                 </div>        
            
            
            <div>
            <label>Last Name</label>
                <input type="text"
                       required
                       name="lname"
                       
                       onChange={formChange}
                        />
                        </div>            
                

                <div>
            <label>address</label>
                <input type="text"
                       required
                       name="address"
                       
                       onChange={formChange}
                        /> 
                        </div>

                <div>
            <label>city</label>
                <input type="text"
                       required
                       name="city"
                       
                       onChange={formChange}
                        /> 
                        </div>
                        
                
                <div>
            <label>country</label>
                <input type="text"
                       required
                       name="country"
                       
                       onChange={formChange}
                        />
                    </div>
                    
              <div>  <button type='submit' onClick={() =>{navigate("/Page2",{state:data})}}>Next</button></div>
                
                
            </form>
            
        </div>
    )
}
