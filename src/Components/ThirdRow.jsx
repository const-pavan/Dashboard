import React, { useState } from 'react'
import { AiOutlinePlus } from 'react-icons/ai'
import { useDisclosure } from '@mantine/hooks'
import { Divider, Modal } from '@mantine/core'
import ProductGraph from './ProductGraph'
import './ThirdRow.css'
import './ProductGraph.css'
import Contact from './Contact'
import FormComponent from './FormFir'
import FormSec from './FormSec'

const AddProfileButton = ({ open }) => (
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
)

function ThirdRow() {
  const [opened, { open, close }] = useDisclosure(false)
  const [basic, setBasic] = useState(false)
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

  const handleBasic = () => {
    setBasic(!basic)
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
            <form onSubmit={handleSubmit}>
              {!basic ? (
                <FormComponent
                  formData={formData}
                  handleChange={handleChange}
                  handleBasic={handleBasic}
                />
              ) : (
                <FormSec
                  formData={formData}
                  handleChange={handleChange}
                  handleBasic={handleBasic}
                  setShowProfile={setShowProfile}
                />
              )}
            </form>
          </Modal>
          <AddProfileButton open={open} />
        </div>
      ) : (
        <Contact formData={formData} />
      )}
    </div>
  )
}

export default ThirdRow
