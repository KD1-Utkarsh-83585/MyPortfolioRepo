import React from 'react'
import { getImageUrl } from '../../utils'
import styles from "./Contact.module.css";

const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
        <div className={styles.text}>
            <h2>Get In Touch</h2>
            <p>Feel Free to Reach Out !!!</p>
            <p>+91-8299120060</p>
        </div>
        <ul className={styles.links}>
            <li className={styles.link}>
                <img src={getImageUrl("contact/emailIcon.png")} alt="email Icon"/>
                <a href="mailto:utkarshsingh379outlook.com">Write me a Mail</a>
            </li>

            <li className={styles.link}>
                <img src={getImageUrl("contact/linkedinIcon.png")} alt="linkedin Icon"/>
                <a href="https://www.linkedin.com/in/utkarsh-singh-650b51307/">LinkedIn</a>
            </li>

            <li className={styles.link}>
                <img src={getImageUrl("contact/githubIcon.png")} alt="email Icon"/>
                <a href="https://github.com/KD1-Utkarsh-83585">Github</a>
            </li>
        </ul>
    </footer>
  )
}

export default Contact