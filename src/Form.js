import React, { useState } from 'react';
import './Form.css'

const Form = () => {
    const [date,setDate]=useState('');
    const [amount,setAmount]=useState('');
    const [payment,setPayment]=useState('');
    const [remark,setRemark]=useState('');
    const [dataList,setDataList]=useState([]);

    const handleSubmit =(e)=>{
        e.preventDefault();
        const payment=e.target.payment.value;
        const data={date,amount,payment,remark};
        console.log(data)
        if(date && amount && payment && remark){
            setDataList((dl)=>[...dl,data]);
            setDate('');
            setPayment('');
            setAmount('');
            
        }

    } 
    
    return (
        <div className='container form' >
            <h2 className='title mb-4'><u>Receipt Details</u></h2>
            <form onSubmit={handleSubmit} className='d-flex justfy-content-center  ' action="">

              <div >
                <label htmlFor="date" className='mb-2 '>Date:  </label> <br /><br />
                <label htmlFor="amount" className='mb-1'>Amount:  </label><br /> <br />
                <label htmlFor="payment" className='mb-0'>Payment Mode:  </label><br /><br />
                <label htmlFor="remark" className='mb-2'>Remark:  </label><br /><br />
                
              </div>
              <div>
                 {/* <input type='text' name='date' id='date' placeholder='Enter Date'/>   */}

                  <input type="text"  name="date" value={date} onChange={(e)=>setDate(e.target.value)} style={{width:'250px'}} placeholder=' Enter Date' id="date"  /> <br />
                <input type="text" name="amount" style={{width:'750px'}} placeholder='Enter Amount(in INR)' value={amount} onChange={(e)=>setAmount(e.target.value)} id="amount" required />
                <select name="payment"  id="payment" required  style={{width:'500px'}}>
                    <option value="cash" >Cash</option> <br />
                </select> <br /> <br />
                <input type="text" value={remark} onChange={(e)=>setRemark(e.target.value)} name="remark" id="remark" placeholder='Enter Remark'style={{width:'750px'}} /> <br />
                 
                <input type="submit" value="Submit" className=' color mb-2   rounded' /> 
                <button className='button'>Cancel</button>
              </div>
              </form>

              {/* <table align=''>
                <tr><td>Date:</td><td><input type='text' name='date' id='date' placeholder='Enter Date' width='1000'height='100'style={{width:'200px'}}></input></td></tr>
                <tr><td>Datedatee:</td><td><input type='text' name='date' id='date' placeholder='Enter Date'  ></input></td></tr>
                <tr><td>Date:</td><td><input type='text' name='date' id='date' placeholder='Enter Date' ></input></td></tr>
                <tr><td>Date:</td><td><input type='text' name='date' id='date' placeholder='Enter Date'></input></td></tr>
                <tr><td>Date:</td><td><input type='text' name='date' id='date' placeholder='Enter Date'></input></td></tr>
                
              <label htmlFor="date">Date:</label>
             <input type='text' name='date' id='date' placeholder='Enter Date'className='w-25  '></input> <br />
               
            <label htmlFor="amount">Amount:</label>
             <input type='text' name='amount' id='amount' placeholder='Enter Amount(in INR)' className=' w-75'></input> <br />
                
            <label htmlFor="payment">Payment Mode:</label>
            <select name="payment" className='w-50 ' id="payment">
                    <option value="cash">Cash</option><br />
                      
                  </select> <br /> <br />
                
            <label htmlFor="remark">Remark:</label>
             <input type='text' className=' w-75' name='remark' id='remark' placeholder='Enter Remark'></input> <br />
                <input type="submit" className='bg-primary' value="Submit" />
                
                
               
            
 */}
 {
    dataList.map((list)=><div>
        <li>{list.date}</li>
        <li>{list.amount}</li>
        <li>{list.payment}</li>
        <li>{list.remark}</li>
    </div>)
 }

        
        </div>
    );
};

export default Form;