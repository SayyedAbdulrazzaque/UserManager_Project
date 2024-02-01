import { faPenToSquare } from '@fortawesome/free-regular-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const User = ({user, deleteUser, editUser}) => {
  return (
    <div className='User'>
        <p>
            {`${user.nameValue}`}
        </p>
        <div>
            <FontAwesomeIcon className="fa-edit" icon={faPenToSquare} onClick={() => {editUser(user)}}/>
            <FontAwesomeIcon className="fa-trash" icon={faTrash} onClick={() => deleteUser(user.id)}/>
        </div>
    </div>
  )
}

export default User