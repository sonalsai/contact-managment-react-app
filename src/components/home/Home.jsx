/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import Header from '../header/Header'
import "./home.scss"
import ContactForm from '../contactForm/ContactForm'
import addContactIcon from "../../assets/images/addContactIcon.svg"
import ContactList from '../contactList/ContactList'

function Home() {
    const [showAddForm, setShowAddForm] = useState(false);

    const handleAddForm = () => {
        setShowAddForm(!showAddForm);
    }

    return (
        <>
            <Header/>
            {showAddForm && <ContactForm handleDisplay={handleAddForm} formTitle="Add Contact" buttonTitle="Add Contact" />}
            <img src={addContactIcon} alt="addContact" className={`addContactIcon ${showAddForm ? `hidden` : `visible`}`} onClick={handleAddForm} />
            <div className='bodyContainer'>
                <ContactList />
            </div>
        </>
    )
}

export default Home