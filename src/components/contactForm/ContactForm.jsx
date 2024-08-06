/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import "./contactForm.scss"
import axios from 'axios';

function ContactForm({ handleDisplay, formTitle, buttonTitle }) {

    const [contactName, setContactName] = useState("");
    const [contactNumber, setContactNumber] = useState("");
    const [contactEmail, setContactEmail] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const dateCreated = Date.now();

        axios.post(`http://localhost:3000/create`, { contactName, contactNumber, contactEmail, dateCreated })
            .then((result) => {
                console.log(result);
            }).catch((err) => {
                console.log(err);
            });

        setContactName("");
        setContactNumber("");
        setContactEmail("");

        handleDisplay(false)
        window.location.reload()
    }


    const handleNameChange = (e) => {
        setContactName(e.target.value);
    }
    const handleNumberChange = (e) => {
        setContactNumber(e.target.value);
    }
    const handleEmailChange = (e) => {
        setContactEmail(e.target.value);
    }

    return (
        <form action="post" id="contactForm">
            <h3 className='formHead'>{formTitle}</h3>

            <div className="formName">
                <label htmlFor="nameInput">Contact Name</label>
                <input type="text" id="nameInput" name='nameInput' value={contactName} onChange={handleNameChange} required />
            </div>

            <div className="formNumber">
                <label htmlFor="numberInput">Contact Number</label>
                <input type="number" id="numberInput" name='numberInput' value={contactNumber} onChange={handleNumberChange} required />
            </div>

            <div className="formEmail">
                <label htmlFor="emailInput">Contact Email</label>
                <input type="email" id="emailInput" name='emailInput' value={contactEmail} onChange={handleEmailChange} required />
            </div>

            <div className="formBtns">
                <button type='reset' className="resetBtn">Clear</button>
                <button className="closeBtn" onClick={() => handleDisplay()}>Close</button>
                <button type='submit' className="submitBtn" onClick={(e) => handleSubmit(e)}>{buttonTitle}</button>
            </div>
        </form>
    )
}

export default ContactForm