import React from 'react';

const MessageDetails = ({cardClicked}) => {
    return (
        <div class="fixed inset-0 h-full w-full bg-gray-900 opacity-90 cursor-default z-20">
            <div class="bg-white box-border min-h-[50%] min-w-[50%] mx-80 my-40" onClick={() => cardClicked()}>
            <div class="bg-black shadow-md box-border h-20">
                <div class="text-center p-8">
                    <div class="text-white font-bold">Subject</div>
                </div>
            </div>
            <div>Email</div>
            <div>Message</div>
            </div>
        </div>
           
    );
}

export default MessageDetails;