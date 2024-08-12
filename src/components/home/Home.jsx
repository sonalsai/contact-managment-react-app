/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import Header from '../header/Header'
import "./home.scss"
import ContactForm from '../contactForm/ContactForm'
import addContactIcon from "../../assets/images/addContactIcon.svg"
import ContactList from '../contactList/ContactList'
import axios from 'axios'

function Home() {
    const [showAddForm, setShowAddForm] = useState(false);
    const [showEditForm, setShowEditForm] = useState(false);
    const [contactName, setContactName] = useState("");
    const [contactNumber, setContactNumber] = useState("");
    const [contactEmail, setContactEmail] = useState("");
    const [contactId, setContactId] = useState()

    const hostAddress = import.meta.env.VITE_API_URL;

    const handleSubmit = (e) => {
        e.preventDefault();
        const dateCreated = Date.now();

        axios.post(`${hostAddress}/create`, { contactName, contactNumber, contactEmail, dateCreated })
            .then((result) => {
                console.log(result);
                window.location.reload()
            }).catch((err) => {
                console.log(err);
            });

        setContactName("");
        setContactNumber("");
        setContactEmail("");

        handleAddForm(false)
    }

    const handleUpdate = (e) => {
        e.preventDefault();
        const dateCreated = Date.now();
        axios.put(`${hostAddress}/update/${contactId}`, { contactName, contactNumber, contactEmail, dateCreated })
            .then((result) => {
                console.log(result);
                window.location.reload()
            }).catch((err) => {
                console.log(err);
            });

        setContactName("");
        setContactNumber("");
        setContactEmail("");

        handleEditForm(false)
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

    const handleAddForm = () => {
        setShowAddForm(!showAddForm);
    }

    const handleEditForm = (data) => {
        setContactName(data.contactName);
        setContactNumber(data.contactNumber);
        setContactEmail(data.contactEmail);
        setContactId(data._id)
        setShowEditForm(!showEditForm);
    }

    const handleDelete = (id) => {
        axios.delete(`${hostAddress}/delete/${id}`)
            .then((result) => {
                console.log(result);
                window.location.reload()
            }).catch((err) => {
                console.log(err);
            });

    }

    return (
        <>
            <Header />
            {showAddForm && <ContactForm
                handleDisplay={handleAddForm}
                formTitle="Add Contact"
                buttonTitle="Add Contact"
                contactName={contactName}
                contactNumber={contactNumber}
                contactEmail={contactEmail}
                handleSubmit={handleSubmit}
                handleNameChange={handleNameChange}
                handleNumberChange={handleNumberChange}
                handleEmailChange={handleEmailChange}
            />}

            {showEditForm && <ContactForm
                handleDisplay={handleEditForm}
                formTitle="Edit Contact"
                buttonTitle="Edit Contact"
                contactName={contactName}
                contactNumber={contactNumber}
                contactEmail={contactEmail}
                handleSubmit={handleUpdate}
                handleNameChange={handleNameChange}
                handleNumberChange={handleNumberChange}
                handleEmailChange={handleEmailChange}
            />}
            <img src={addContactIcon} alt="addContact" className={`addContactIcon ${showAddForm ? `hidden` : `visible`}`} onClick={() => handleAddForm()} />
            <div className='bodyContainer'>
                <ContactList handleEditForm={handleEditForm} handleDelete={handleDelete} />
            </div>
        </>
    )
}

export default Home