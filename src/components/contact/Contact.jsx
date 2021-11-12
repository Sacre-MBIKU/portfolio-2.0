import React from "react"
import SectionTitle from "../shared/section_title/SectionTitle"
import "./contact.scss"

const Contact = () => {
  return (
    <section className="contact-section">
      <SectionTitle title= "CONTACT" />
      <form action="#" method="post">
        <input type="text" name="userName" id="" />
        <input type="email" name="" id="" />
        <textarea name="" id="" cols="30" rows="10"></textarea>
        <button type="submit">Envoyer</button>
      </form>
    </section>
  )
}

export default Contact
