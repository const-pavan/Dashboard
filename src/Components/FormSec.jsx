const InputField = ({ placeholder, value, name, handleChange }) => (
  <div className='my-7'>
    <h2 className='text-base font-medium my-2'>
      {name.charAt(0).toUpperCase() + name.slice(1)} Link{' '}
      <span className='text-grey'>(optional)</span>
    </h2>
    <input
      className='border-2 border-light rounded-md w-full px-3 py-2'
      type='text'
      placeholder={placeholder}
      name={name}
      value={value}
      onChange={handleChange}
    />
  </div>
)

function FormSec({ formData, handleChange, handleBasic, setShowProfile }) {
  const fields = [
    {
      placeholder: 'Eg. ..instagram.com/username',
      value: formData.insta,
      name: 'insta',
    },
    {
      placeholder: 'Eg. ..youtube.com/username',
      value: formData.youtube,
      name: 'youtube',
    },
  ]

  return (
    <div>
      {fields.map((field) => (
        <InputField {...field} handleChange={handleChange} />
      ))}
      <div className='w-full flex gap-4 justify-end'>
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
  )
}

export default FormSec
