import React, { useState } from 'react'
import { Axios } from '../firebase/firebaseConfig'
const Contact = () => {
  const [form, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    msg: ""

  })
  const submitForm = (e) => {
    e.preventDefault()
    Axios.post("https://us-central1-notification-ceb6a.cloudfunctions.net/email", form)
  }
  const handleChange = (e) => {
    setFormData({ ...form, [e.target.name]: e.target.value })
  }
  return (
    <>
      <h1 className="font-black text:xl md:text-3xl my-10 text-center">
        Drop Me a mail I would Love to talk to you....
        </h1>
      <form className="w-full max-w-lg mx-auto" onSubmit={submitForm}>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
              First Name
      </label>
            <input onChange={handleChange} name="firstName" className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane" />

          </div>
          <div className="w-full md:w-1/2 px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
              Last Name
      </label>
            <input onChange={handleChange} name="lastName" className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe" />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
              E-mail
      </label>
            <input onChange={handleChange} name="email" className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="email" type="email" />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
              Message

      </label>
            <textarea onChange={handleChange} name="msg" cols="30" rows="10" className=" no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none" ></textarea>
          </div>
        </div>
        <div className="mb-10 md:flex md:items-center justify-end">
          <div className="w-full flex justify-end">
            <button className="shadow  focus:shadow-outline bg-black focus:outline-none text-white font-bold py-2 px-4 rounded" type="submit">
              Send
      </button>
          </div>
        </div>
      </form>
    </>
  )
}

export default Contact
