import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

export const Page2 = () => {
    let navigate=useNavigate();

    const{state}=useLocation();
    console.log(state);

    return (
        <div>
        <h1>Confirm Information</h1>
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
            <button type='submit' onClick={() =>{navigate("/Page3",{state})}}>Next</button>
        </div>
    )
}
