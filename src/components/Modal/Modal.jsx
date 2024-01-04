import React from 'react';
import "./Modal.css";
import ContextMenuImage from "../../assets/images/context_menu.jpg";
import CopyImage from "../../assets/images/copy_guide.jpg";
import DownloadImage from "../../assets/images/download_guide.jpg";

export default function Modal({ show, closeModal }) {
    if (!show) return (<></>);
    return (
        <div className='modal-segment'>
            <div className='modal-close-button' onClick={closeModal}>X</div>
            <div className='modal-content'>
                <div className='content-segment'>
                    <div className='content-header'>Guide</div>
                    <div className='content-body'>
                        <ul>
                            <li>
                                <div>
                                    <span>Right Click on Shape to Open Actions context menu</span>
                                    <span>
                                        <img src={ContextMenuImage} alt="context menu" width={150}></img>
                                    </span>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <span>To Download Shape as SVG select download option</span>
                                    <span>
                                        <img src={DownloadImage} alt="context menu" width={150}></img>
                                    </span>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <span>Select copy to copy SVG code to clipboard</span>
                                    <span>
                                        <img src={CopyImage} alt="context menu" width={150}></img>
                                    </span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
