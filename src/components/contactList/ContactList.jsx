/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import "./contactList.scss";
import ContactCard from '../contactCard/ContactCard';
import axios from 'axios';

function ContactList({handleEditForm, handleDelete}) {

    const [datas, setDatas] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3000")
            .then((result) => {
                setDatas(result.data)
            }).catch((err) => {
                console.log(err)
            });
    }, [])
    return (
        <ul className='contactListContainer'>
            {
                datas?.map(data => (
                    <ContactCard
                        key={data._id}
                        data={data}
                        handleEditForm={handleEditForm}
                        handleDelete={handleDelete} />
                ))
            }

        </ul>
    )
}

export default ContactList