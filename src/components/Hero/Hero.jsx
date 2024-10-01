import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";
import resume from "/public/Utkarsh_Singh_Resume_io.pdf";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi ! I'm Utkarsh Singh</h1>
        <p className={styles.description}>
        Skilled Java developer with expertise in Core Java, Hibernate, Spring, SpringBoot, and MySQL, along with experience in full-stack development using ReactJS. Successfully built a full end-to-end project using these technologies, which enhanced my problem-solving and technical skills. Eager to kick-start my career in software development and contribute to business growth in a dynamic environment.
        </p>
        <div className={styles.buttonsContainer}>
        <a
          href="mailto:utkarshsingh379@outlook.com"
          className={styles.contactBtn}
        >
          Contact Me
        </a>
        <a 
           href={resume}
           target="_blank"
           alt="my-cv"
           rel="noopener noreferrer"
          className={styles.downloadBtn}
        >
          Download Resume
          <i className={`downloadIcon fa-solid fa-angle-down ${styles.downloadIcon}`}></i>
          
        </a>
        </div>
        
      </div>
      <img
        src={getImageUrl("hero/Hero.png")}
        alt="Hero Image"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};

export default Hero;
