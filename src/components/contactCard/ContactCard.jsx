/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import Person from "../../assets/images/person.svg"
import "./contactCard.scss"


function ContactCard( {key , data}) {


    return (
        <li className="card" key={key}>
            <div className="cardImage"><img src={Person} alt="person" /></div>
            <div className="cardDetails">
                <h2 className="cardName">{data.contactName}</h2>
            </div>
        </li>
    )
}

export default ContactCard