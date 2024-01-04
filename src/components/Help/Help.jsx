import React, { useState } from 'react';
import "./Help.css";
import Modal from '../Modal/Modal';
import ClickSoundEffect from "../../assets/audio/click_sound.wav";

export default function Help() {
    const [showModal, setShowModal] = useState(false);

    const showHideModal = (value) => {
        setShowModal(value);
        if (value) {
            const audio = document.getElementById("audio");
            audio.play();
        }
    }
    return (
        <>
            <div className='help-handle'>
                <div className='help-handle-button'>
                    <div className='light-bulb' onClick={() => showHideModal(true)}><span>?</span></div>
                    <div className='light-effect'>
                        <audio id="audio" src={ClickSoundEffect}></audio>
                    </div>
                </div>
            </div>
            <Modal show={showModal} closeModal={() => showHideModal(false)} />
        </>
    )
}
