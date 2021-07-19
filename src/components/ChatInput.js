import { Button } from '@material-ui/core';
import React,{useState} from 'react';
import styled from "styled-components";
import { db } from '../firebase';
import firebase from'firebase';
import {useAuthState} from 'react-firebase-hooks/auth';
import { auth } from "../firebase";


function ChatInput({channelId,channelName, chatRef}) {
    const [user,loading] = useAuthState(auth);


    const [input, setInput] = useState('');
    const sendMessage = (e) => {
        e.preventDefault();

        if(!channelId) {
            return false;
        }

        db.collection("rooms").doc(channelId).collection("messages").add({
            message:input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            user: user.displayName,
            userImg:user.photoURL
        });

        setInput('');

        chatRef?.current?.scrollIntoView({
            behavior:"smooth"
        });
    };

    return (
        <ChatInputContainer>

            <form>
                <input onChange={(e) => setInput(e.target.value)} value={input} type="text" placeholder={`Message #${channelName}`}></input>
                <Button type="submit" onClick={sendMessage}>SEND</Button>
            </form>
            
        </ChatInputContainer>
    )
}

export default ChatInput;

const ChatInputContainer = styled.div`

    border-radius:20px;
    >form{
        position: relative;
        display: flex;
        justify-content: center;

        > input{
            position:fixed;
            width: 60%;
            bottom:30px;
            border: 1px solid grey;
            border-radius: 3px;
            padding:20px;
            outline: none;
        }

        > button{
            display:none;
        }
        

    }

`;

