import React from "react";
import SectionTitle from "../shared/section_title/SectionTitle";
import "./contact.scss";

const Contact = () => {
  return (
    <section className="contact-section" id="contact">
      <SectionTitle title="CONTACT" />
      <form action="#" method="post">
        <input type="text" name="userName" id="" placeholder="Name" />
        <input type="email" name="" id="" placeholder="Email" />
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          placeholder="Your text here"
        />
        <button type="submit">Envoyer</button>
      </form>
    </section>
  );
};

export default Contact;
