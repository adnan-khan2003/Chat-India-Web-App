/*
import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import { ChatContext } from '../context/ChatContext'
const Message = ({message}) => {
  const {currentUser} = useContext(AuthContext)
  const {data} = useContext(ChatContext)
  return (
    <div className='message owner'>
        { <div className="messageinfo"><img src={} alt="img" />
        <span className="time">just now</span>
        </div>
        <div className="messagecontent">
          <p className="receivedmsg">hello</p>
          <img src="https://images.pexels.com/photos/5791753/pexels-photo-5791753.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="img" className="receivedimg" />
        </div> }
    </div>
  )
}

export default Message
*/



import React, { useContext, useEffect, useRef } from "react";
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";

const Message = ({ message }) => {
  const { currentUser } = useContext(AuthContext);
  const { data } = useContext(ChatContext);

  const ref = useRef();

  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  }, [message]);

  return (
    <div
      ref={ref}
      className={`message ${message.senderId === currentUser.uid && "owner"}`}
    >
      <div className="messageInfo">
        <img
          src={
            message.senderId === currentUser.uid
              ? currentUser.photoURL
              : data.user.photoURL
          }
          alt=""
          className="chatimg"
        />
        <div className="time">just now</div>
      </div>
      <div className="messagecontent">
        <p className="receivedmsg">{message.text}</p>
        {message.img && <img src={message.img} alt="" className="receivedimg" />}
      </div>
    </div>
  );
};

export default Message;