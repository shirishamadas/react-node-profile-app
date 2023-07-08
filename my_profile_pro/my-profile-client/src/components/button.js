import React from 'react';
import './button.css';

const Button = ({label}) => {
    return (
        <div class="button-area">
            <button class="send-msg" name="send">{label}</button>
        </div>
    );
}

export default Button;