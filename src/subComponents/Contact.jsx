import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RiFacebookBoxLine, RiYoutubeLine, RiGithubLine } from "react-icons/ri";
const SubContact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSendMessage = async (e) => {
    e.preventDefault();

    const note = { name, email, message };

    try {
      const res = await fetch("http://localhost:5000/api/notes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(note),
      });

      const data = await res.json();
      console.log("Note saved:", data);

      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      <section id="contact_Mini">
        <div className="super_container">
        <div className="container_1">
          <h3>Let's connect</h3>
          <div>
            <p>Phone</p>
            <span>+91 000 000 0000</span>
          </div>
          <div>
            <p>Email</p>
            <span>rs@gmail.com</span>
          </div>
          <div>
            <p>Address</p>
            <span>House No.123 Sector A-1</span>
          </div>
          <ul>
          <Link to={"/facebook"} target="_blank"><RiFacebookBoxLine/></Link>
          <Link to={"/facebook"} target="_blank"><RiFacebookBoxLine/></Link>
          <Link to={"/facebook"} target="_blank"><RiFacebookBoxLine/></Link>
        </ul>
        </div>
        
        <div className="container_2">
          <h3>Got a moment? Tell us what you think</h3>
          <form onSubmit={handleSendMessage}>
            <div>
              <input 
                type="text" 
                placeholder="Your Name" 
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input 
                type="email" 
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <textarea 
              rows="4" 
              placeholder="Your Message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <button type="submit">SEND</button>
          </form>
        </div>
        </div>
      </section>
    </>
  );
};

export default SubContact;