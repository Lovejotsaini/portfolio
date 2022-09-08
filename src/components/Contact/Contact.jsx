import React, { useContext, useRef, useState } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";
import { themeContext } from "../../Context";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../fbase";

async function addContact(e, data) {
  e.preventDefault();
  const { name, email, message } = data;
  if (name&&email&&message) { 
    const docRef = await addDoc(collection(db, "users"), {
      name: name,
      email: email,
      message: message
    });
    console.log("Document written with ID: ", docRef.id);
  }
}



const Contact = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const form = useRef();
  const [done, setDone] = useState(false)
  const chorm = {
    'name': '',
    'email': '',
    'message': ''
  }
  const getFormValues = (event) => chorm[event.target.name] = event.target.value


  return (
    <div className="contact-form" id="contact">
      {/* left side copy and paste from work section */}
      <div className="w-left">
        <div className="awesome">
          {/* darkMode */}
          <span style={{ color: darkMode ? 'white' : '' }}>Get in Touch</span>
          <span>Contact me</span>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>
      </div>
      {/* right side form */}
      <div className="c-right">
        <form ref={form} onSubmit={(e) => addContact(e, chorm)}>
          <input type="text" name="name" className="user" placeholder="Name" onChange={(event) => {
            return getFormValues(event);
          }} />
          <input type="email" name="email" className="user" placeholder="Email" onChange={(event) => {
            return getFormValues(event);
          }} />
          <textarea name="message" className="user" placeholder="Message" onChange={(event) => {
            return getFormValues(event);
          }} />
          <input type="submit" value="Send" className="button" />
          <span>{done && "Thanks for Contacting me"}</span>
          <div
            className="blur c-blur1"
            style={{ background: "var(--purple)" }}
          ></div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
