 import React, {Fragment, useState} from 'react';
import axios from 'axios';

const Registration = () => {
  const [name,setName]=useState('');
  const [phoneNo,setPhoneNo]=useState('');
  const [address,setAddress]=useState('');

  const handleNameChange =(value)=>{
    setName(value);

}

const handlePhoneNoChange =(value)=>{
    setPhoneNo(value);
    
}

const handleAddressChange =(value)=>{
    setAddress(value);
    
}
const handleSave=()=>{
    const data ={
        Name : name,
        PhoneNo: phoneNo,
        Address : address,
        IsActive : 1
    };
    const url = 'https://localhost:7263/add-user';
axios.post(url, data).then((result)=>{
    alert("Data inserted successfully")
}).catch((error)=>{
    alert(error);
})
    
}

  return (<Fragment>
    <div>Registration</div>
    <label>Name</label>
    <input type="text" name="name" placeholder='Enter Username' onChange={(e) => handleNameChange(e.target.value)} /><br></br>

    <label>Phone no</label>
    <input type="text" name="txtPhoneNo" placeholder='Enter Phone No' onChange={(e) => handlePhoneNoChange(e.target.value)} /><br></br>

    <label>Address</label>
    <input type="text" name="txtAddress" placeholder='Enter Address' onChange={(e) => handleAddressChange(e.target.value)} /><br></br>
 <button onClick={()=>handleSave()} >Save</button>

  
   </Fragment>  
 
  );
    
};

 

export default Registration;
