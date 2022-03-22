import { useState } from 'react'

export const FmPinfo = ({person, setPerson, setEditing}) => {
const [inputs, setInputs]=useState({
  fName: 'Nihad',
  lName: 'Marzook',
  title: 'Chef de Projet',
  tel: 9179955154,
  email: 'email@gmail.com',
  city: 'Tetouan',
  summary: 'Dedicated Web Developer with strong commitment to collaboration and problem-solving. Use various web design software, with knowledge in front end and C++, to develop websites and designs. Committed to high standards of web design. Fluent in four languages: English, French, Spanish and Arabic.'
})
const formReset =()=>{
  setInputs({fName: '', lName: '', title: '', tel: '', email: '', city: '', zip: '', summary: ''})
}
  const handleSubmit=(e)=>{
    e.preventDefault()
      setPerson(inputs)
      setEditing(false)
      // formReset()
  }

  const handleChange=(e)=>{
    setInputs({...inputs, [e.target.name]: e.target.value})
  }
  return (
    <section>
    <form onSubmit={handleSubmit}>
      <div className="container">
      <label htmlFor="fName">First name - required</label>
      <input type="text" required placeholder='First Name' name='fName' onChange={handleChange}
      //reset value to '' when submitting
      value={inputs.fName} />

      <label htmlFor="lName">Last name - required</label>
      <input type="text" required placeholder='Last Name' onChange={handleChange} name='lName'
      //reset value to '' when submitting
      value={inputs.lName} />

      <label htmlFor="title">Title</label>
      <input type="text" placeholder='title' onChange={handleChange} name='title'
      //reset value to '' when submitting
      value={inputs.title} />

      <label htmlFor='tel'>Phone number</label>
      <input type="tel" placeholder='Phone Number' onChange={handleChange} name='tel'
      //reset value to '' when submitting
      value={inputs.tel} />

      <label htmlFor='email'>Email address</label>
      <input type="email" placeholder='Phone Number' onChange={handleChange} name='email'
      //reset value to '' when submitting
      value={inputs.email} />

      <label htmlFor='city'>City</label>
      <input type="text" onChange={handleChange} name='city'
      //reset value to '' when submitting
      value={inputs.city} />
      
      <label htmlFor='summary'>Summary</label>
        <textarea onChange={handleChange} name='summary'
      //possibility to insert bullets and numbers
        value={inputs.summary} />

        <label htmlFor='zip'>Postal code</label>
        <input type="text" onChange={handleChange} name='zip'
      //possibility to insert bullets and numbers
        value={inputs.zip} />

          {/*dddddddddddddddddddd*/}
          <label htmlFor="experience">Experience</label>
          <input type="text" />


        <button type='submit'>Save</button> &nbsp; 
        <button onClick={formReset} >Cancel</button>
        </div>
      </form>
    </section>
  )
}
