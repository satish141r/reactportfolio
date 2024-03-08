import React from 'react'
import emailsjs from 'emailjs-com';
import { useRef } from "react";
import { useState } from 'react';


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
    const [loading,setLoading]=useState(false);
const sendEmail=(e)=>{
   
    setTimeout(()=>{
        alert("your message has been sent")
    },0)
   
 }

    return (
        <section id='contact' className='pb-16'>
            <div className='container'>
                <div className='flex flex-col mb-5'>
                <h2 className='text-headingColor font-[700] text-[2.5rem] mb-1'>Get in touch </h2>
                <p>You can directly mail        <a href="mailto:satishraibagi25@gmail.com" className='text-blue-900 text-lg underline'><br /> satishraibagi25@gmail.com</a></p>
                </div>
                <div className='md:flex justify-between items-center'>
                    <div className='w-full md:w-1/2 h-300px sm:h-[450px]'>
                        <iframe title='google-maps' src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d123115.99354875424!2d75.0961435!3d15.356175!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1694171555603!5m2!1sen!2sin"
                            className='border-0 w-full h-full' allowfullscreen="" loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade"></iframe>
                        {/* <iframe src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d123115.99354875424!2d75.0961435!3d15.356175!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1694171555603!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
                    </div>

                    <div className='w-full mt-8 md:mt-0 md:w-1/2 sm:h-[450px] lg:flex items-center bg-indigo-100 px-4 lg:px-8 py-8'>
                        <form className='w-full' >
                            <div className='mb-5'>
                                <input type='text' name='user_name'  placeholder='Enter your name' className='w-full p-3 focus:outline-none rounded-[5px]'></input>
                            </div>
                            <div className='mb-5'>
                                <input name='user_email' type="email"
                                    placeholder="Receiver's Email Address"
                                     className='w-full p-3 focus:outline-none rounded-[5px]'></input>
                            </div>
                            <div className='mb-5'>
                                <textarea type='text'  name='message' rows={3} placeholder='Write Your Message' className='w-full p-3 focus:outline-none rounded-[5px]'></textarea>
                            </div>

                            <button type='submit' onClick={() => sendEmail()} className='w-full p-3 focus:outline-none rounded-[5px] bg-smallTextColor text-white hover:bg-headingColortext-center ease-linear duration-150'>
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact