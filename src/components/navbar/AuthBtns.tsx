'use client'
import React from 'react'
import {signIn, useSession, signOut} from 'next-auth/react'



const AuthBtns = () => {

  const {data:session} = useSession()

  const handleSignIn = () => {
    signIn('google')
  }

  const handleSignOut = () => {
    signOut()
  }
  return (
    <div className="btns d-flex gap-5 align-items-center">
      {session ? (
        <div className="d-flex align-items-center justify-content-center gap-3">
          <p className="para-text m-0">
            Hello, <span className="link-navbar">{session?.user?.name}</span>
          </p>
          <button onClick={handleSignOut} className="register">
            Sign Out
          </button>
        </div>
      ) : (
        <>
          <button onClick={handleSignIn} className="signin btn">
            Sign in
          </button>
          <button className="register">Register</button>
        </>
      )}
    </div>
  );
}

export default AuthBtns