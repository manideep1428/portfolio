import React, { useState } from 'react';
import { InstagramSvg, LinkedInSvg, TwitterSvg, WhatsAppSvg } from './Svg';
import SaveMessages from '@/app/server';

interface Contact{
  name:string
  email:string
  message:string
}


export default function ContactUs() {
  const [send ,setSend]  = useState(false)
  const [error ,setError]  = useState("")
  const [contactForm , setcontactForm] = useState<Contact>({name:"", email :"", message:"" });
  //@ts-ignore
  const sendMessage = async  (event)=>{
    event.preventDefault();
    try {
    if(contactForm.name && contactForm.email && contactForm.message !== ""){
      setSend(true)
      setTimeout(()=>{}, 1000)
      SaveMessages( contactForm )
      setTimeout(()=>{
        setSend(false)
      },3000)
    }else{
      setError("Please Send Valid Message")
    }
   } catch (error:any) {
    console.log(error)
    setError(error)
   }
  }
  
  return (
    <div className="container mx-auto px-4 md:px-6 lg:px-8">
      <h2 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">Contact Me</h2>
      <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-6 items-center">
        <div className="md:col-span-4">
          <p className="text-gray-600">
            {"Have a project in mind or just want to say hello? Fill out the form below and I'll get back to you as soon as possible."}
          </p>
          {error ?  (
              <div className='text-[red] text-xl font-bold m-6 px-6'>
                    {error}
              </div>
            ): ""}
            {send ?  (
              <div className='text-[green] text-xl font-bold m-6 px-6'>
                    {"Your Message Is Send To Owner . Please Wait For His Response"}
              </div>
            ): ""}
          <form className="mt-6 space-y-6 space-x-8" onSubmit={sendMessage}>
            <div>
              <label htmlFor="name" className="block ml-12 text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                className="h-10 ml-8 bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 mt-2 block w-full rounded-md border-2 border-[#6c5ce7] shadow-lg focus:border-[#a29bfe] focus:ring-[#a29bfe]"
                id="name"
                placeholder="Manideep"
                type="text"
                value={contactForm.name}
                onChange={(e)=>setcontactForm({...contactForm , name:e.target.value})}
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                className="h-10 bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 mt-2 block w-full rounded-md border-2 border-[#6c5ce7] shadow-lg focus:border-[#a29bfe] focus:ring-[#a29bfe]"
                id="email"
                type="email"
                placeholder="your-mail@example.com"
                value={contactForm.email}
                onChange={(e)=>setcontactForm({...contactForm , email:e.target.value})}
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                className="min-h-[80px] bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 mt-2 block w-full rounded-md border-2 border-[#6c5ce7] shadow-lg focus:border-[#a29bfe] focus:ring-[#a29bfe]"
                id="message"
                rows={10}
                placeholder="Your message..."
                value={contactForm.message}
                onChange={(e)=>setcontactForm({...contactForm, message:e.target.value})}
              ></textarea>
            </div>
            <div>
              <button
                className="justify-center whitespace-nowrap ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 inline-flex items-center rounded-md bg-[#000000] text-[#ffffff] px-6 py-2 text-sm font-medium shadow-lg transition-colors hover:bg-[#494747] focus:outline-none focus:ring-2 focus:ring-[#ffffff] focus:ring-offset-2"
                type="submit"
              >
               {  send ? " Sending... " : "Send Message" }
              </button>
            </div>
          </form>
        </div>
        <div className="flex justify-center items-center">
          <div className="flex flex-col items-center">
            <div className="border-l border-gray-300 h-12"></div>
            <span className="mx-4 my-2 text-gray-500">or</span>
            <div className="border-l border-gray-300 h-12"></div>
          </div>
        </div>
        <div className="md:col-span-1 flex flex-col items-center">
          <div className="flex space-x-4">
          <a href="https://wa.me/+918096368241" target="_blank" rel="noopener noreferrer" className="text-[#25D366] hover:text-[#128C7E]">
             <WhatsAppSvg/>
            </a> <a href="https://www.instagram.com/manideep1428/" target="_blank" rel="noopener noreferrer" className="text-[#25D366] hover:text-[#128C7E]">
             <InstagramSvg/>
            </a> <a href="https://x.com/manideep1428" target="_blank" rel="noopener noreferrer" className="text-[#25D366] hover:text-[#128C7E]">
              <TwitterSvg/>
            </a>
            <a href="https://www.linkedin.com/in/sai-manideep-cherukuri-856b6927a" target="_blank" rel="noopener noreferrer" className="text-[#0077B5] hover:text-[#005582]">
              <LinkedInSvg />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
