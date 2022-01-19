import React, { useState } from 'react'
import Modal from 'react-modal'
import { useLocation } from 'react-router-dom';



export const Page3 = () => {
    
      const{state}=useLocation();
      console.log(state);

    const[IsModal,setIsModal]=useState(false)
    

        const alertHandler=()=>{
            alert(`Form Submit Successful`);
        }



    return (
        <div>
        <h1>Form submit</h1>
   {/* <button onClick={()=>{submit()}}>submit</button> */}
   <button onClick={()=>setIsModal(true)}>submit</button>
        
        <Modal isOpen={IsModal}>
            <h1>Are you sure you submit the Data? </h1>
            <table>
            
            <tr>
                <th>Name</th>
                <td>{state.fname}</td>
            </tr>
            <tr>
                <th>LastName</th>
                <td>{state.lname}</td>
            </tr>
            <tr>
                <th>Address</th>
                <td>{state.address}</td>
            </tr>
            <tr>
                <th>City</th>
                <td>{state.city}</td>
            </tr>
            <tr>
                <th>Country</th>
                <td>{state.country}</td>
            </tr>
           
           
            </table>
            <br></br>
            <button onClick={()=>setIsModal(false)}>Cancle</button>
            <button onClick={alertHandler}>Submit</button>
            
            </Modal>
        
   
        </div>
    )
}
