import React from 'react';
import GitHubIcon from "../../public/github-icon.svg";
import LinkedinIcon from "../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";
import "@/app/style/email.css";

const EmailSection = () => {
  return (
    <section className='email-section' id='contact'>
        <div className='email-content'>
            <h5 className="heading">
              Let&apos;s Connect
            </h5>
            <p className="description">
              I&apos;m currently looking for new opportunities, my inbox is always
              open. Whether you have a question or just want to say hi, I&apos;ll
              try my best to get back to you!
            </p> 
            <div className='socials'>
                <Link href={"https://github.com/JaveriaArshadQureshi"}>
                  <Image src={GitHubIcon} alt='Github Icon' />
                </Link>
                <Link href={"www.linkedin.com/in/javeria-arshad-qureshi"}>
                  <Image src={LinkedinIcon} alt='LinkedinIcon' />
                </Link>
            </div>
        </div>
        <div>
          <form className='form'>
            <div className='form-group'>
              <label htmlFor="email" className='label'>Your email</label>
              <input 
                type='email' 
                id="email" 
                required 
                className='input'
                placeholder='Enter your email'
              />

              <label htmlFor="subject" className='label'>Subject</label>
              <input 
                type='subject' 
                id="subject" 
                required 
                className='input'
                placeholder='Just saying hi'
              />
            </div>

            <div className='form-group'>
              <label htmlFor="message" className='label'>Message</label>
              <input 
                type='message' 
                id="message" 
                required 
                className='input'
                placeholder="let's talk about"
              />
            </div>

            <button
              type="submit"
              className="button"
            >
              Send Message
            </button>
          </form>
        </div>
    </section>
  );
};

export default EmailSection;
