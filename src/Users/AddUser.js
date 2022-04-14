import React from "react";
import './AddUser.css';
import Card from "../UI/Card";


const AddUser = () => {
    return (
        <Card>
            <form>
                <label className='label'>Username</label>
                <input className='input' type='text'/>

                <label className='label'>Age (Year)</label>
                <input className='input' type='number'/>

                <button className='btn' type='submit'>Add User</button>
            </form>

        </Card>
    )

}

export default AddUser;