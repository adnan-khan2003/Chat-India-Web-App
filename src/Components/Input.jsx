/*
import React, { useContext, useState } from 'react';
import attach from '../Images/attach.svg';
import images from '../Images/images.svg';
import { AuthContext } from '../context/AuthContext';
import { ChatContext } from '../context/ChatContext';
import { arrayUnion, doc, serverTimestamp, setDoc, updateDoc } from 'firebase/firestore';
import { db, storage } from '../firebase';
import { v4 as uuid } from 'uuid'; // Import v4 as uuid
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { updateProfile } from 'firebase/auth';
import { Timestamp } from 'firebase/firestore'; // Import Timestamp

const Input = () => {
  const [text, setText] = useState('');
  const [img, setImg] = useState(null);

  const { currentUser } = useContext(AuthContext);
  const { data } = useContext(ChatContext);

  const handleSend = async () => {
    if (img) {
      const storageRef = ref(storage, uuid()); // Call uuid as a function
      const uploadTask = uploadBytesResumable(storageRef, img);

      uploadTask.on(
        (error) => {
          // setErr(true);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            await updateDoc(doc(db, 'chats', data.chatId), {
              messages: arrayUnion({
                id: uuid(), // Call uuid as a function
                text,
                senderId: currentUser.uid,
                date: Timestamp.now(), // Use Timestamp
                img: downloadURL,
              }),
            });
          });
        }
      );
    } else {
      await updateDoc(doc(db, 'chats', data.chatId), {
        messages: arrayUnion({
          id: uuid(), // Call uuid as a function
          text,
          senderId: currentUser.uid,
          date: Timestamp.now(), // Use Timestamp
        }),
      });
    }

    await updateDoc(doc(db,'userChats',currentUser.uid),{
      [data.chatId + ".lastMessage"]: {
        text,
      },
      [data.chatId+'date']: serverTimestamp(),
    })

    await updateDoc(doc(db,'userChats',data.user.uid),{
      [data.chatId + ".lastMessage"]: {
        text,
      },
      [data.chatId+'date']: serverTimestamp(),
    })

    setText("")
    setImg(null)
  };

  return (
    <div className='input'>
      <input className='typehere' type="text" placeholder='Type something.....' onChange={e => setText(e.target.value)} 
      value={text}/>
      <div className="send">
        <img src={attach} alt="attach" className='attach' />
        <input type="file" style={{ display: "none" }} id='file' onChange={e => setImg(e.target.files[0])} />
        <label htmlFor="file">
          <img src={images} alt="images" className="image" />
        </label>
        <button className="sendbtn" onClick={handleSend}>Send</button>
      </div>
    </div>
  );
};

export default Input;
*/


import React, { useContext, useState } from "react";
import attach from '../Images/attach.svg';
import images from '../Images/images.svg';
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";
import {
  arrayUnion,
  doc,
  serverTimestamp,
  Timestamp,
  updateDoc,
} from "firebase/firestore";
import { db, storage } from "../firebase";
import { v4 as uuid } from "uuid";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";

const Input = () => {
  const [text, setText] = useState("");
  const [img, setImg] = useState(null);

  const { currentUser } = useContext(AuthContext);
  const { data } = useContext(ChatContext);

  const handleSend = async () => {
    if (img) {
      const storageRef = ref(storage, uuid());

      const uploadTask = uploadBytesResumable(storageRef, img);

      uploadTask.on(
        (error) => {
          //TODO:Handle Error
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            await updateDoc(doc(db, "chats", data.chatId), {
              messages: arrayUnion({
                id: uuid(),
                text,
                senderId: currentUser.uid,
                date: Timestamp.now(),
                img: downloadURL,
              }),
            });
          });
        }
      );
    } else {
      await updateDoc(doc(db, "chats", data.chatId), {
        messages: arrayUnion({
          id: uuid(),
          text,
          senderId: currentUser.uid,
          date: Timestamp.now(),
        }),
      });
    }

    await updateDoc(doc(db, "userChats", currentUser.uid), {
      [data.chatId + ".lastMessage"]: {
        text,
      },
      [data.chatId + ".date"]: serverTimestamp(),
    });

    await updateDoc(doc(db, "userChats", data.user.uid), {
      [data.chatId + ".lastMessage"]: {
        text,
      },
      [data.chatId + ".date"]: serverTimestamp(),
    });

    setText("");
    setImg(null);
  };
  return (
    <div className="input">
      <input
        className='typehere'
        type="text"
        placeholder="Type something..."
        onChange={(e) => setText(e.target.value)}
        value={text}
      />
      <div className="send">
        <img src={attach} alt="" className='attach' />
        <input
          type="file"
          style={{ display: "none" }}
          id="file"
          onChange={(e) => setImg(e.target.files[0])}
        />
        <label htmlFor="file">
          <img src={images} alt="" 
          className="image"/>
        </label>
        <button 
        className="sendbtn"
        onClick={handleSend}>Send</button>
      </div>
    </div>
  );
};

export default Input;