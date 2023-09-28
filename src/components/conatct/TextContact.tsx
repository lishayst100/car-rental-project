'use client'
import React from 'react'
import IconsContact from './IconsContact';
import { useResize } from '@/hooks/useResize';

const TextContact = () => {
    const screenWidth = useResize()
  return (
    <div className={screenWidth > 500 ? 'w-50' : 'w-100'}>
      <h2 className="title">Need additional information?</h2>
      <p className="para-text">
        A multifaceted professional skilled in multiple fields of research,
        development as well as a learning specialist. Over 15 years of
        experience.
      </p>
      <IconsContact />
    </div>
  );
}

export default TextContact