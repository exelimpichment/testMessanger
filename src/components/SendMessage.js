import React, { useState } from "react";
import Button from "@mui/material/Button";
import Input from "@mui/base/InputUnstyled";
import firebase from "firebase/compat/app";
import { db, auth } from "../firebase";

function SendMessage({ scroll }) {
  const [msg, setMsg] = useState("");

  async function sendMessage(e) {
    e.preventDefault();
    const { uid, photoURL } = auth.currentUser;

    await db.collection("messages").add({
      text: msg,
      photoURL,
      uid,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setMsg("");
    scroll.current.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div>
      <form onSubmit={sendMessage}>
        <Input
          placeholder="message"
          value={msg}
          onChange={(e) => setMsg(e.target.value)}
        />
        <Button type="submit">Send</Button>
      </form>
    </div>
  );
}

export default SendMessage;
