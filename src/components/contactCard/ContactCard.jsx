/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import Person from "../../assets/images/person.svg"
import "./contactCard.scss"
import { faEdit, faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function ContactCard({ key, data, handleEditForm, handleDelete }) {
    return (
        <li className="card" key={key}>
            <div className="leftSide">
                <div className="cardImage"><img src={Person} alt="person" /></div>
                <div className="cardDetails">
                    <h2 className="cardName">{data.contactName}</h2>
                    <span>{data.contactNumber}</span>
                    <span>{data.contactEmail}</span>
                </div>
            </div>
            <div className="options">
                <button onClick={() => handleEditForm(data)}><FontAwesomeIcon icon={faEdit} className='editBtn' /></button>
                <button onClick={()=>handleDelete(data._id)}><FontAwesomeIcon icon={faTrashCan} className='trashBtn' /></button>
            </div>
        </li>
    )
}

export default ContactCard