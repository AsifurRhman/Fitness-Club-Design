
import React, { useState } from "react";
import { ClipLoader } from "react-spinners";
import { toast } from "react-toastify";

const Contact = () => {
 

  return (
    <section className="contact">
      <form >
        <h1>CONTACT US</h1>
        <div>
          <label>Name</label>
          <input
            type="text"
           
           
          />
        </div>
        <div>
          <label>Email</label>
          <input
            type="email"
       
          />
        </div>
        <div>
          <label>Message</label>
          <input
            type="text"
         
          />
        </div>
        <button
          type="submit"
        
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "15px",
          }}
        >
         
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;
