import React from 'react';
import MessageCards from './messageCards';
import MessageHeading from './messageHeading';

const MessageList = ({cardClicked, FetchedDataFromMDB, getObjFromMsgList}) => {

    return (
        <div class="m-20">
            {console.log(FetchedDataFromMDB, 'FetchedDataFromMDB')}
            <MessageHeading />
            {FetchedDataFromMDB.map((obj) =>
                <div onClick={() => {getObjFromMsgList(obj); cardClicked();}}>
                    <MessageCards key={obj._id} {...obj} />
                </div>
            )}
        </div>
    );
}

export default MessageList;