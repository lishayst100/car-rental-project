'use client'
import { addContact } from '@/services/cars';
import { useState } from 'react';
import {SlEnvolopeLetter} from 'react-icons/sl'
const FormContact = () => {

      const [name, setName] = useState<string>('')
      const [email, setEmail] = useState<string>('')
      const [text, setText] = useState<string>('')
      const [message, setMessage] = useState<string>('')

      const newContact = {name,email,text}

      const post = async() => {
       const response = await addContact(newContact)
      }


  return (
    <form className="flex-grow-1 d-flex flex-column gap-4">
      <div>
        <label htmlFor="name" className="para-text font-bolder">
          Full Name <span className="red">*</span>
        </label>
        <input
          type="text"
          required
          className="form-control"
          placeholder='E.g "David Beckham"'
          value={name}
          onChange={(e)=> setName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="email" className="para-text font-bolder">
          Email <span className="red">*</span>
        </label>
        <input
          type="email"
          required
          className="form-control"
          placeholder="youremail@example.com"
          value={email}
          onChange={(e)=> setEmail(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="textarea" className="para-text font-bolder">
          Tell us about it <span className="red">*</span>
        </label>
        <textarea
          required
          className="form-control textarea"
          placeholder="write here whats you want..."
          value={text}
          onChange={(e)=> setText(e.target.value)}
          
        />
      </div>
      <button className="book-ride w-100 font-bolder" onClick={post}>
        Send Message
        <SlEnvolopeLetter />
      </button>
    </form>
  );
}

export default FormContact