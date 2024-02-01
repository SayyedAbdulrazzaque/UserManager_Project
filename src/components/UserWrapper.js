import React, {useState} from 'react'
import UserForm from './UserForm'
import AddUserBtn from './AddUserBtn';
import {v4 as uuidv4}  from 'uuid';
import User from './User';
import { EditUser } from './EditUser';


const UserWrapper = () => {
    const [isButtonVisible, setButtonVisible] = useState(true);
    const [userData, setusers] = useState([]);

  const handleButtonClick = () => {
    setButtonVisible(false);
  };

  const addUser = (newUsers) =>{
    setusers((prevUsers)=> [...prevUsers, {id : uuidv4(), ...newUsers , isEditing : false}]); 
    // console.log(newUsers);
  }; 

  const handleWindowOnClick = () => {
    setButtonVisible(true);
  };

  const deleteUser = (id) => {
    setusers(userData.filter(user => user.id !== id))
  }

  const editUser = (id) => {
    setusers((prevUsers) =>
      prevUsers.map((user) => (user.id === id ? { ...user, isEditing: !user.isEditing } : user))
    );
  };
  const updateUser = (id, updatedUser) => {
    setusers((prevUsers)=>
      prevUsers.map((user) => user.id === id ? {...user, ...updatedUser, isEditing: !user.isEditing}: user))
      console.log(updatedUser);
  }
    
  return (
    <div className='UserWrapper'>
        <h1>Add User!</h1>
        {isButtonVisible && <AddUserBtn onClick={handleButtonClick} />}
        <UserForm isFormVisible={!isButtonVisible} addUser={addUser} onAddbtnClick={handleWindowOnClick} onCancelbtnClick={handleWindowOnClick}/>
        {
            userData.map((user) =>(
                    user.isEditing ? (
                    <EditUser key={user.id} isFormVisible={isButtonVisible} user={user} onUpdate={updateUser} onCancel={()=>{editUser(user.id)}}/>
                ): (
                    <User key={user.id} user={user} deleteUser = {deleteUser} editUser={() => {editUser(user.id)}}/>
                )                
            ))
        }

    </div>
  )
}

export default UserWrapper