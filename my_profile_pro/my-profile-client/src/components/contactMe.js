import React,{useState} from 'react';
import axios from 'axios';
import './contactMe.css';
import Button from './button';

const ContactMe = () => {
    const [contactInfo, setInputText] = useState({ name: '', email: '', subject: '', message: '' });

    const sendMessage = () => {
        console.log(contactInfo, 'contactInfo');              
        
        axios.post('http://localhost:8000/contact/create', contactInfo).then((r) => {
            console.log(r);
        }).catch((err) => {
            console.log(err);
        })
    }

    return (
        <div class="contact" id="contact">
            <div class="max-width">
                <h2 class="title">Contact me</h2>
                <div class="contact-content">
                    <div class="column left">
                        <div class="text">Catch up with me at</div>
                        <div class="icons">
                            <div class="row">
                                <i class="fas fa-user"></i>
                                <div class="info">
                                    <div class="head">Name</div>
                                    <div class="sub-title">Madas Shirisha</div>
                                </div>
                            </div>
                            <div class="row">
                                <i class="fas fa-map-marker-alt"></i>
                                <div class="info">
                                    <div class="head">Address</div>
                                    <div class="sub-title">Sircilla, Telangana</div>
                                </div>
                            </div>
                            <div class="row">
                                <i class="fas fa-envelope"></i>
                                <div class="info">
                                    <div class="head">Email</div>
                                    <div class="sub-title">shirishamadas237@gmail.com</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="column right">
                        <div class="text">Message me</div>
                        <form class="contact-form" action="#" method="POST">
                            <div class="fields">
                                <div class="field name">
                                    <input type="text" class="fullname" placeholder="Name" onChange={(e) => setInputText({...contactInfo, name: e.target.value})} />
                                </div>
                                <div class="field email">
                                    <input type="text" class="email-input" placeholder="Email" onChange={(e) => setInputText({...contactInfo, email: e.target.value})} />
                                </div>
                            </div>
                            <div class="field">
                                <input type="text" class="subject" placeholder="Subject" onChange={(e) => setInputText({...contactInfo, subject: e.target.value})}/>
                            </div>
                            <div class="field textarea">
                                <textarea class="Message" cols="30" rows="10" placeholder="Message.." onChange={(e) => setInputText({...contactInfo, message: e.target.value})}></textarea>
                            </div>
                            <button class="sendMessage" onClick={(e) => {e.preventDefault(); sendMessage()}}>Send Message</button>
                            {/* <Button label="Send Message" onClick={(e) => {e.preventDefault(); sendMessage()}}/> */}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactMe;