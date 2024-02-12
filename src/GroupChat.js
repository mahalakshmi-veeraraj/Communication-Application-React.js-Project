import Nav from './Nav';
import { useEffect, useRef } from 'react';
import { useState } from 'react';
export default function GroupChat() {
    let loggedInUser = JSON.parse(localStorage.getItem("loggedinuser"));
    const chatMessageInputElementRef = useRef(null);
    let [chatHistory, setChatHistory] = useState(JSON.parse(localStorage.getItem("chatHistory")));
    chatHistory = chatHistory && chatHistory.length ? chatHistory : [];
    let messages = chatHistory.map(chat => '[' + new Date(chat.chat_SentDateTime).toLocaleString() + '] ' + chat.user_Name + ' : ' + chat.chat_Description);


    useEffect(() => {   
        chatMessageInputElementRef.current.focus();
    })

    const handleSend = (event) => {
        event.preventDefault();
        let chat = {
            user_Id: loggedInUser.id,
            user_Name: loggedInUser.fullName,
            chat_Id: Number(new Date()),
            chat_Description: event.target.elements.chatMessage.value,
            chat_SentDateTime: new Date()
        };
        // Execute validation.
        if (chat.chat_Description == '') {
            alert("Please enter chat description");
            return;
        }

        // Execute save once validation has succeeded.
        let chatHistoryArray = JSON.parse(localStorage.getItem("chatHistory"));
        chatHistoryArray = chatHistoryArray && chatHistoryArray.length ? chatHistoryArray : [];
        chatHistoryArray.push(chat);
        localStorage.setItem("chatHistory", JSON.stringify(chatHistoryArray));
        setChatHistory(JSON.parse(localStorage.getItem("chatHistory")));
        event.target.elements.chatMessage.value = '';
        alert("Message sent sucessfully");
    }

    return (<>
        <Nav />
        <div className='container-fluid text-center'>
            <label style={{ fontSize: '20px', fontWeight: 'bold' }}>Group Chat</label>
            <textarea
                style={{ width: '100%', minHeight: '300px', marginTop: '10px', padding: '5px' }}
                value={messages.join('\n')}
            ></textarea>
        </div>
        <br />
        <div className='container-fluid' style={{ marginTop: '20px', padding: '10px' }}>
            <form onSubmit={handleSend}>
                <label style={{ fontWeight: 'bold' }}>{loggedInUser.fullName}</label> &nbsp; &nbsp;
                <input type="text" style={{ width: '60%', marginLeft: '10px', padding: '5px', borderRadius: '5px', border: '1px solid #ccc' }} placeholder="Type your message here..." ref={chatMessageInputElementRef} name='chatMessage' /> &nbsp; &nbsp;
                <button className="btn btn-outline-dark custom" style={{ height: '30px', marginLeft: '10px' }} type='submit'>Send</button>
                <button className="btn btn-outline-dark custom" style={{ height: '30px', marginLeft: '10px' }}>Refresh</button>
            </form>
        </div>
    </>);
}