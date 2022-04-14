import React, {useState} from "react";
import './AddUser.css';
import Card from "../UI/Card";


const AddUser = () => {
    const [userName, setUserName] = useState('');
    const handleChange = (event) => {
        setUserName(event.target.value);
    }
    const [enteredName, setEnteredName] = useState('');
    const addUserName = (event) => {
        event.preventDefault();
        setEnteredName(userName);
    }

    return (
        <Card>
            <form>
                <label className='label'>Username</label>
                <input className='input' type='text' value={userName} onChange={handleChange}/>

                <label className='label'>Age (Year)</label>
                <input className='input' type='number'/>

                <button className='btn' type='submit' onClick={addUserName}>Add User</button>
            </form>
            <div>{enteredName}</div>
        </Card>
    )

}

export default AddUser;