import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Modal = ({ open, onClose }) => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_1wnrkao', 'template_bhtymon', form.current, 'lBnkkXjD_H9kkfabH')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };
    if (!open) return null;
    return (
        <div onClick={onClose} className="overlay">
            <div onClick={(e) => { e.stopPropagation() }} className="modalContainer">
                <form ref={form} onSubmit={sendEmail}>
                    <label>Name</label>
                    <input type="text" name="user_name" />
                    <label>Email</label>
                    <input type="email" name="user_email" />
                    <label>Message</label>
                    <textarea name="message" />
                    <input type="submit" value="Send" />
                </form>
                <p onClick={onClose}>X</p>
            </div>
        </div>
    )
}

export default Modal