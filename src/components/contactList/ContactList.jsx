/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import "./contactList.scss";
import ContactCard from '../contactCard/ContactCard';

function ContactList() {

    const [datas, setDatas] = useState([]);
    const [name, setName] = useState("");
    const [number, setNumber] = useState("");
    const [email, setEmail] = useState("");

    useEffect(() => {
        const contactDetails = JSON.parse(localStorage.getItem('contactData')) || [];
        setDatas(contactDetails)
    }, [])

    return (
        <ul className='contactListContainer'>
            {
                datas?.map(data => (
                    <ContactCard
                        key={data.id}
                        data={data} />
                ))
            }

        </ul>
    )
}

export default ContactList