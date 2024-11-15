import React from 'react'
import "aos/dist/aos.css";

function Contact(props) {
  return (
    <section className={`skills about contact ${!props.DarkTheme?"background-light":""}`} id="contact">
      <h2>
        Contact
        <div ></div>
      </h2>
      <form>
        <input type="text" name="name" placeholder='name' data-aos="fade-down" data-aos-easing="linear" />
        <input type='text' name="mail" placeholder='mail id' data-aos="fade-down" data-aos-easing="linear" />
        <textarea name="message" rows="5" placeholder='message' data-aos="fade-down" data-aos-easing="linear" />
      </form>

    </section>
  )
}

export default Contact
