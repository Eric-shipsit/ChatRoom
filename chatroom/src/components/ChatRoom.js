import React, { useRef, useState } from 'react';
import { collection, query, orderBy, limit, addDoc, serverTimestamp  } from 'firebase/firestore';
import { handleLogout } from '../firebase/Login'
import { db, auth } from '../firebase/firebase';
import { useCollectionData } from 'react-firebase-hooks/firestore';

const ChatRoom = () => {
    const dummy = useRef();
    const messagesRef = collection(db, 'messages');
    const messagesQuery = query(messagesRef, orderBy('createdAt'), limit(50));
    const [messages] = useCollectionData(messagesQuery, {idField: 'id'});
    console.log(messages);

    const [formValue, setFormValue] = useState('');

    const sendMessage = async (e) => {
        e.preventDefault();
        const { uid, photoURL } = auth.currentUser;
    
        await addDoc(messagesRef, {
          text: formValue,
          createdAt: serverTimestamp(),
          uid,
          photoURL
        });
    
        setFormValue('');
        dummy.current.scrollIntoView({ behavior: 'smooth' });
    };
    
    return (
        <>
            <button onClick={handleLogout}>Logout</button>
            <main>
                {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} />)}
                <span ref={dummy}></span>
            </main>
            <form onSubmit={sendMessage}>
                <input
                    value={formValue}
                    onChange={(e) => setFormValue(e.target.value)}
                    placeholder="say something nice"
                />
                <button type="submit" disabled={!formValue}>
                🕊️
                </button>
            </form>
        </>
    );
}

function ChatMessage(props) {
    const { text, uid } = props.message;
    const isSentByCurrentUser = uid === auth.currentUser?.uid;
    const messageClass = isSentByCurrentUser ? 'sent' : 'received';
    return( 
        <div className = {`message ${messageClass}`}>
            <p>{text}</p>
        </div>)
}

export default ChatRoom;