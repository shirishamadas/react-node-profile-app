import React from 'react';

const MessageHeading = () => {
    return (
        <div>
            <div class="bg-black shadow-md box-border h-20 flex flex-row text-center mt-10 mb-1">
                <div class="box-border h-20 w-80 p-6">
                    <div class="text-rose-600">Message Id</div>
                </div>
                <div class="box-border h-20 w-80 p-6">
                    <div class="text-rose-600">Name</div>
                </div>
                <div class="box-border h-20 w-80 p-6">
                    <div class="text-rose-600">Email</div>
                </div>
                <div class="box-border h-20 w-80 p-6">
                    <div class="text-rose-600">Subject</div>
                </div>
                <div class="box-border h-20 w-80 p-6">
                    <div class="text-rose-600">Date</div>
                </div>
            </div>
        </div>
    );
}

export default MessageHeading;