import React, { useState } from 'react';
import "./Help.css";
import Modal from '../Modal/Modal';

export default function Help() {
    const [showModal, setShowModal] = useState(false);

    const showHideModal = (value) => {
        setShowModal(value);
    }
    return (
        <>
        <div className='help-handle'>
            <div className='help-handle-button' onClick={() => showHideModal(true)}>?</div>
        </div>
        <Modal show={showModal} closeModal={() => showHideModal(false)}/>
        </>
    )
}
