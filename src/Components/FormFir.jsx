const InputField = ({ type, placeholder, value, name, handleChange }) => (
  <div className='my-7'>
    <h2 className='text-base font-medium my-2'>
      Enter {name.charAt(0).toUpperCase() + name.slice(1)}*
    </h2>
    <input
      className='border-2 border-light rounded-md w-full px-3 py-2'
      type={type}
      placeholder={placeholder}
      required
      value={value}
      name={name}
      onChange={handleChange}
    />
  </div>
)

function FormComponent({ formData, handleChange, handleBasic }) {
  const fields = [
    {
      type: 'text',
      placeholder: 'Eg. John Doe',
      value: formData.name,
      name: 'name',
    },
    {
      type: 'email',
      placeholder: 'Eg. John@xyz.com',
      value: formData.email,
      name: 'email',
    },
    {
      type: 'text',
      placeholder: 'Eg. 9123456789',
      value: formData.phone,
      name: 'phone',
    },
  ]

  return (
    <div>
      {fields.map((field) => (
        <InputField {...field} handleChange={handleChange} />
      ))}
      <div className='w-full flex justify-end' onClick={handleBasic}>
        <button className='bg-primary text-white px-5 py-2 rounded-lg hover:bg-white hover:text-primary border-2 border-primary'>
          Next
        </button>
      </div>
    </div>
  )
}

export default FormComponent
