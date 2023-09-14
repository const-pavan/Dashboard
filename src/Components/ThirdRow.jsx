import React, { useState } from 'react'

import { AiOutlinePlus } from 'react-icons/ai'
import { useDisclosure } from '@mantine/hooks'
import { Divider, Modal } from '@mantine/core'

import ProductGraph from './ProductGraph'
import './ThirdRow.css'
import './ProductGraph.css'
import Contact from './Contact'
function ThirdRow() {
  const [opened, { open, close }] = useDisclosure(false)

  const [basic, setBasic] = useState(false)

  const handleBasic = () => {
    setBasic(!basic)
  }

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    insta: '',
    youtube: '',
  })

  const [showProfile, setShowProfile] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setShowProfile(true)
  }

  return (
    <div className='grid lg:grid-cols-2 gap-6'>
      <ProductGraph />

      {!showProfile ? (
        <div>
          <Modal
            opened={opened}
            onClose={close}
            title='Add New Profile'
            centered
          >
            <Divider />
            <div className='grid grid-cols-2 gap-10 py-5'>
              <div
                className={
                  !basic
                    ? 'text-center border-b-4 font-mon font-semibold border-primary cursor-pointer'
                    : 'text-center border-b-4 font-mon font-semibold border-grey cursor-pointer'
                }
              >
                Basic
              </div>
              <div
                className={
                  basic
                    ? 'text-center border-b-4 font-mon font-semibold border-primary cursor-pointer'
                    : 'text-center border-b-4 font-mon font-semibold border-grey cursor-pointer'
                }
              >
                Social
              </div>
            </div>
            <div>
              <form onSubmit={handleSubmit}>
                {!basic ? (
                  <div>
                    <div className='my-7'>
                      <h2 className='text-base font-medium my-2'>
                        Enter Name*
                      </h2>
                      <input
                        className='border-2 border-light rounded-md w-full px-3 py-2'
                        type='text'
                        placeholder='Eg. John Doe'
                        required
                        value={formData.name}
                        name='name'
                        onChange={handleChange}
                      />
                    </div>
                    <div className='my-7'>
                      <h2 className='text-base font-medium my-2'>
                        Enter Email*
                      </h2>
                      <input
                        className='border-2 border-light rounded-md w-full px-3 py-2'
                        type='email'
                        placeholder='Eg. John@xyz.com'
                        required
                        value={formData.email}
                        name='email'
                        onChange={handleChange}
                      />
                    </div>
                    <div className='my-7'>
                      <h2 className='text-base font-medium my-2'>
                        Enter Phone*
                      </h2>
                      <input
                        className='border-2 border-light rounded-md w-full px-3 py-2'
                        type='text'
                        placeholder='Eg. 9123456789'
                        required
                        value={formData.phone}
                        name='phone'
                        onChange={handleChange}
                      />
                    </div>
                    <div
                      className='w-full flex justify-end '
                      onClick={handleBasic}
                    >
                      <button className='bg-primary text-white px-5 py-2 rounded-lg hover:bg-white hover:text-primary border-2 border-primary'>
                        Next
                      </button>
                    </div>
                  </div>
                ) : (
                  <div>
                    <div className='my-7'>
                      <h2 className='text-base font-medium my-2'>
                        Instagram Link{' '}
                        <span className='text-grey'>(optional)</span>
                      </h2>
                      <input
                        className='border-2 border-light rounded-md w-full px-3 py-2'
                        type='text'
                        placeholder='Eg. ..instagram.com/username'
                        name='insta'
                        value={formData.insta}
                        onChange={handleChange}
                      />
                    </div>
                    <div className='my-7'>
                      <h2 className='text-base font-medium my-2'>
                        Youtube Link{' '}
                        <span className='text-grey'>(optional)</span>
                      </h2>
                      <input
                        className='border-2 border-light rounded-md w-full px-3 py-2'
                        type='text'
                        placeholder='Eg. ..youtebe/username'
                        name='youtube'
                        value={formData.youtube}
                        onChange={handleChange}
                      />
                    </div>
                    <div className='w-full flex gap-4 justify-end '>
                      <button
                        className='border-2 bg-white border-primary text-primary hover:bg-primary hover:text-white px-5 py-2 rounded-lg'
                        onClick={handleBasic}
                      >
                        Back
                      </button>
                      <button
                        className='bg-primary text-white px-5 py-2 rounded-lg hover:bg-white hover:text-primary border-2 border-primary'
                        onClick={() => setShowProfile(true)}
                      >
                        Done
                      </button>
                    </div>
                  </div>
                )}
              </form>
            </div>
          </Modal>
          <div
            className='grid lg:gap-3 h-56 lg:h-72 place-content-center bg-light border-2 border-grey shadow-xl lg:my-7 rounded-2xl cursor-pointer'
            onClick={open}
          >
            <div className='bg-grey rounded-full p-5 w-fit mx-auto'>
              <AiOutlinePlus className='h-10 w-10 text-lightgrey' />
            </div>
            <div>
              <h2 className='text-xl font-mon text-lightgrey font-semibold'>
                Add Profile
              </h2>
            </div>
          </div>
        </div>
      ) : (
        <Contact formData={formData} />
      )}
    </div>
  )
}

export default ThirdRow
