import React from 'react'
import GitHubIcon from "../../public/github-icon.svg"
import LinkedinIcon from "../../public/linkedin-icon.svg"
import  Link from "next/link";
import Image from "next/image";

const EmailSection = () => {
  return (
    <section className='grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4' id='contact'>
        <div className='z-10'>
            <h5 className="text-xl font-bold text-white my-2">
          Let&apos;s Connect
        </h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          {" "}
          I&apos;m currently looking for new opportunities, my inbox is always
          open. Whether you have a question or just want to say hi, I&apos;ll
          try my best to get back to you!
        </p> 
        <div className='socials flex flex-row gap-2'>
            <Link href={"https://github.com/JaveriaArshadQureshi"}>
            <Image src={GitHubIcon} alt='Github Icon' />
            </Link>
            <Link href={"www.linkedin.com/in/javeria-arshad-qureshi"}>
            <Image src={LinkedinIcon} alt='LinkedinIcon' />
            </Link>
        </div>
        </div>
        <div>
          <form className='flex flex-col '>
            <div className='gap-6'>
            <label  htmlFor="email"  className='text-white  block  text-sm font-medium'>Your email</label>
            <input type='email' id="email" required 
            className='bg-[#18191E] border border-[#33353F] mb-3 placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
            placeholder='Enter your email'/>

           <label  htmlFor="subject"  className='text-white  block   text-sm font-medium'>Subject</label>
            <input type='subject' id="subject" required 
            className='bg-[#18191E] border border-[#33353F] mb-3 placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
            placeholder='Just saying hi'/>
            </div>

            <div>
            <label  htmlFor="message"  className='text-white  block mb-1 text-sm font-medium'>Message</label>
            <input type='message' id="message" required 
            className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
            placeholder="let's talk about"/>
            </div>

            <button
              type="submit"
              className="bg-pink-400 hover:bg-gray-300 mt-5 text-white font-medium py-2.5 px-5 rounded-lg w-full"
            >
              Send Message
            </button>

            
          </form>
        </div>
    </section>
  )
}

export default EmailSection