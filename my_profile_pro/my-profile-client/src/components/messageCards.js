import React from 'react';

const MessageCards = ({_id, name, email, subject, time}) => {

    return (
        <div>
            <div class="shadow-md box-border border-2 h-20 flex flex-row text-center mb-1">
                <div class="box-border h-20 w-80 p-6">
                    <div class="text-rose-600">{_id}</div>
                </div>
                <div class="box-border h-20 w-80 p-6">
                    <div class="text-rose-600">{name}</div>
                </div>
                <div class="box-border h-20 w-80 p-6">
                    <div class="text-rose-600">{email}</div>
                </div>
                <div class="box-border h-20 w-80 p-6">
                    <div class="text-rose-600">{subject}</div>
                </div>
                <div class="box-border h-20 w-80 p-6">
                    <div class="text-rose-600">{time}</div>
                </div>
            </div>
        </div>
    );
}

export default MessageCards;