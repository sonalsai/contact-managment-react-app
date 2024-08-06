/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import Person from "../../assets/images/person.svg"
import "./contactCard.scss"
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function ContactCard( {key , data}) {
    return (
        <li className="card" key={key}>
            <div className="cardImage"><img src={Person} alt="person" /></div>
            <div className="cardDetails">
                <h2 className="cardName">{data.contactName}</h2>
            </div>
            <div className="options">
                <button><FontAwesomeIcon icon={faEdit}/></button>
                <button><FontAwesomeIcon icon={faTrash}/></button>
            </div>
        </li>
    )
}

export default ContactCard