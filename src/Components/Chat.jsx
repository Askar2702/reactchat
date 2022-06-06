import { async } from "@firebase/util";
import { Avatar, Button, Grid, TextField } from "@mui/material";
import { border, Container } from "@mui/system";
import React, { useContext, useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Context } from "..";
import { useCollectionData } from "react-firebase-hooks/firestore";
import Loader from "./Loader";
import {
  collection,
  doc,
  orderBy,
  query,
  serverTimestamp,
  setDoc,
} from "firebase/firestore";

import "../Style/Chat.css";
const Chat = () => {
  const { auth, firestore } = useContext(Context);
  const [user] = useAuthState(auth);

  const [value, setValue] = useState("");

  const q = query(collection(firestore, "messages"), orderBy("createdAt"));
  const [messages, loading] = useCollectionData(q);
  const sendMessage = () => {
    setDoc(doc(collection(firestore, "messages")), {
      uid: user.uid,
      displayname: user.displayName,
      photoURL: user.photoURL,
      text: value,
      createdAt: serverTimestamp(),
    });

    setValue("");
  };

  const msgbox = document.querySelector(".containerMessege");

  useEffect(() => {
    if (msgbox == "undefined" || msgbox == null) return;
    msgbox.scrollTop = msgbox.scrollHeight;
  }, [messages]);

  if (loading) return <Loader />;
  return (
    <Container>
      <div className={"containerChat"}>
        <div className={"containerMessege"}>
          {messages.map((m, index) => (
            <div
              key={index}
              className={
                user.uid === m.uid ? "messages My" : "messages stranger"
              }
            >
              <Grid
                container
                className={user.uid === m.uid ? "MyGrid" : "StrangerGrid"}
              >
                <div className="nameUser">{m.displayname.split(" ")[0]}</div>
                <Avatar src={m.photoURL} />
              </Grid>
              <div>{m.text}</div>
            </div>
          ))}
        </div>

        <form className="formMessage" onSubmit={(e) => e.preventDefault()}>
          <input
            placeholder="Write a message..."
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <button type="submit" onClick={() => sendMessage()} className="btn">
            Send
          </button>
        </form>
      </div>
    </Container>
  );
};

export default Chat;
