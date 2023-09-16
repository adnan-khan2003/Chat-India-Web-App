/*
import React, { useContext } from 'react'
import cam from '../Images/cam.svg'
import add from '../Images/add.svg'
import more from '../Images/more.svg'
import Messages from './Messages'
import Input from './Input'
import { ChatContext } from '../context/ChatContext'

const Chat = () => {
  const {data} = useContext(ChatContext)

  return (
    <div className='chat'>
        <div className="chatinfo">
          <div>{data.user?.displayName}</div>
          <div className="chaticons">
            <img src={cam} alt="video call" />
            <img src={add} alt="add friend" />
            <img src={more} alt="more" />
          </div>
        </div>
        <Messages/>
        <Input/>
    </div>
  )
}

export default Chat
*/


import React, { useContext } from "react";
import cam from '../Images/cam.svg'
import add from '../Images/add.svg'
import more from '../Images/more.svg'
import Messages from "./Messages";
import Input from "./Input";
import { ChatContext } from "../context/ChatContext";

const Chat = () => {
  const { data } = useContext(ChatContext);

  return (
    <div className="chat">
      <div className="chatinfo">
        <div>{data.user?.displayName}</div>
        <div className="chaticons">
          <img src={cam} alt="" />
          <img src={add} alt="" />
          <img src={more} alt="" />
        </div>
      </div>
      <Messages/>
      <Input/>
    </div>
  );
};

export default Chat;