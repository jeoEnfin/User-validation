import React, { useState } from 'react'

import classs from './AddUser.module.css';
import Card from '../UI/Card';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';


const AddUser = (props) => {
    const [enterUserName,setEnterUserName] = useState('');
    const [enterUserAge,setEnterUserAge] = useState('');
    const [error,setError] = useState();

    const addUserHandler = (event) => {
        event.preventDefault();
        if(enterUserName.trim().length === 0 || enterUserAge.trim().length === 0){
            setError({
                title: 'Invalid input',
                message: 'Enter valid details'
            })
            return;
        }
        if(+enterUserAge <1){
            setError({
                title: 'Invalid age',
                message: 'Enter valid age(>0)'
            })
            return;
        }
        props.onAddUser(enterUserName, enterUserAge);
        setEnterUserName('');
        setEnterUserAge('');
    }

    const userNameHandler = (event) => {
        setEnterUserName(event.target.value);
    }

    const userAgeHandler = (event) => {
        setEnterUserAge(event.target.value);
    }

    const cancelModal =()=>{
        setError(null)
    }

    return (
        <div>
        {error && <ErrorModal title={error.title} message={error.message} onChangeModal={cancelModal}/>}
        <Card className={classs.input}>
            <form  onSubmit={addUserHandler}>
                <label htmlFor='username'>Username</label>
                <input id="username" type="text" value={enterUserName} onChange={userNameHandler}/>
                <label htmlFor='age'>Age (years)</label>
                <input id="age" type="number" value={enterUserAge} onChange={userAgeHandler}/>
                <Button type='submit'>Add user</Button>
            </form>
        </Card>
        </div>
    )
}

export default AddUser