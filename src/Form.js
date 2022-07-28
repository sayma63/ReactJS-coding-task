import React, { useState } from 'react';
import './Form.css'

const Form = () => {
    const [date, setDate] = useState('');
    const [amount, setAmount] = useState('');
    const [remark, setRemark] = useState('');
    const [dataList, setDataList] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const payment = e.target.payment.value;
        const data = { date, amount, payment, remark };
        console.log(data)
        if (date && amount && payment && remark) {
            setDataList((dl) => [...dl, data]);
            setDate('');
            
            setAmount('');
            setRemark('');

        }

    }

    return (
        <div  >
            <div className='container form'>
                <h2 className='title mb-3 mt-5'><u>Receipt Details</u></h2>
                <form onSubmit={handleSubmit} className='d-flex justfy-content-center  ' action="">

                    <div >
                        <label htmlFor="date" className='mb-2 '>Date:  </label> <br /><br />
                        <label htmlFor="amount" className='mb-1'>Amount:  </label><br /> <br />
                        <label htmlFor="payment" className='mb-0'>Payment Mode:  </label><br /><br />
                        <label htmlFor="remark" className='mb-2'>Remark:  </label><br /><br />

                    </div>
                    <div>
                        {/* <input type='text' name='date' id='date' placeholder='Enter Date'/>   */}

                        <input type="text" name="date" value={date} onChange={(e) => setDate(e.target.value)} style={{ width: '250px' }} placeholder=' Enter Date' id="date" required /> <br />
                        <input type="text" name="amount" style={{ width: '750px' }} placeholder='Enter Amount(in INR)' value={amount} onChange={(e) => setAmount(e.target.value)} id="amount" required />
                        <select name="payment" id="payment" required style={{ width: '500px' }}>
                            <option value="cash" >Cash</option> <br />
                        </select> <br /> <br />
                        <input type="text" value={remark} onChange={(e) => setRemark(e.target.value)} name="remark" id="remark" placeholder='Enter Remark' style={{ width: '750px' }} /> <br />

                        <input type="submit" value="Submit" className=' color mb-2   rounded' />
                        <button disabled className='button'>Cancel</button>
                    </div>
                </form>
            </div>

            
            <div>
                <h2 className='text-center text-primary mt-4'>Details Table</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col"></th>
                        <th scope="col">Date</th>
                        <th scope="col">Amount</th>
                        <th scope="col">Payment Mode</th>
                        <th scope="col">Remark</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        dataList.map((list, index) => <tr>
                            <th scope="row">{index + 1}</th>
                            <td>{list.date}</td>
                            <td>{list.amount}</td>
                            <td>{list.payment}</td>
                            <td>{list.remark}</td>



                        </tr>)
                    }



                </tbody>
            </table>
            </div>
           


        </div>
    );
};

export default Form;