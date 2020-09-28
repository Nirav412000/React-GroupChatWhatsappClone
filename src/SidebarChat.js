 import React, { useEffect, useState } from 'react';
 import './SidebarChat.css';
 import { Avatar } from '@material-ui/core';
 import db from './firebase';
 import { Link } from 'react-router-dom';

 function SidebarChat({ id, name, addnewChat }) {
     
    const[seed,setSeed] = useState('');
    const[messages,setMessages] = useState([]);
    
    useEffect(() => {
        if(id){
            db.collection('rooms')
                .doc(id)
                .collection('messages')
                .orderBy('timestamp','desc')
                .onSnapshot((snapshot) => 
                    setMessages(snapshot.docs.map((doc) => 
                    doc.data())));
        }
    },[id])

    useEffect(() => {
        setSeed(Math.floor(Math.random()*5000));
    },[]);
    
    const createChat = () => {
        const roomname = prompt("Please enter name for chat");
        if(roomname){
            db.collection('rooms').add({
                name: roomname
            });
        }
    };

     return !addnewChat ? (
         <Link to={`/rooms/${id}`} >
            <div className="sidebarChat">
                <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/>
                <div className="sidebarChat_info">
                    <h2>{name}</h2>
                    <p>{messages[0]?.message}</p>
                </div>
            </div>
         </Link>
     ) : (
         <div className="sidebarChat" onClick={createChat} >
             <h2>Add new Chat</h2>
         </div>
     )
 }
 
 export default SidebarChat;
 