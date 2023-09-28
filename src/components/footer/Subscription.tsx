"use client";
import { subscribe } from "@/services/subscribe";
import { useState } from "react";

const Subscription = () => {

  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')


  const subHandler = async () => {
    const sub = await subscribe({email:email});
    setMessage(sub)
    setEmail('')
    setTimeout(()=>{
      setMessage('')
    },3000)
  };

  return (
    <div className="col d-flex flex-column">
      <h3 className="subtitle font-bolder pb-3">SUBSCRIPTION</h3>
      <p className="para font-bolder">
        Subscribe your Email address for the latest news & updates
      </p>
      <div className="d-flex flex-column gap-3">
        <input
          type="text"
          value={email}
          className="form-control"
          placeholder="Enter Email Address"
          onChange={(e)=>{setEmail(e.target.value)}}
        />
        <button className="register" onClick={subHandler}>
          Submit
        </button>
        <p className="font-bolder para">{message}</p>
      </div>
    </div>
  );
};

export default Subscription;
