import React from 'react'
import {
  AiOutlineInstagram,
  AiOutlineMail,
  AiOutlineYoutube,
} from 'react-icons/ai'
import { BsWhatsapp } from 'react-icons/bs'
import './Contact.css'

const ContactItem = ({ Icon, color, data }) => (
  <div className='flex gap-6 items-center'>
    <div className={`bg-light${color} p-2 w-fit rounded-full`}>
      <Icon className={`h-5 w-5 text-${color}`} />
    </div>
    <h2 className='text-lg font-mon font-medium underline'>
      {data || 'Not provided'}
    </h2>
  </div>
)

function Contact({ formData }) {
  const contacts = [
    { Icon: BsWhatsapp, color: 'green', data: formData.phone },
    { Icon: AiOutlineInstagram, color: 'red', data: formData.insta },
    { Icon: AiOutlineMail, color: 'purple', data: formData.email },
    { Icon: AiOutlineYoutube, color: 'red', data: formData.youtube },
  ]

  return (
    <div className='h-72 my-7 bg-light border-2 border-grey shadow-xl w-full rounded-xl'>
      <h1 className='p-10 font-mon text-xl font-semibold'>{formData.name}</h1>
      <div className='px-10'>
        <div className='flex justify-between items-center'>
          <ContactItem {...contacts[0]} />
          <ContactItem {...contacts[1]} />
        </div>
        <div className='flex justify-between items-center py-10'>
          <ContactItem {...contacts[2]} />
          <ContactItem {...contacts[3]} />
        </div>
      </div>
    </div>
  )
}

export default Contact
