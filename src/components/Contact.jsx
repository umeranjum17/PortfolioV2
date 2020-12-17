import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Axios } from "../firebase/firebaseConfig";
const Contact = ({openModal}) => {
  const [form, setFormData] = useState({
    name: "",
    email: "",
    msg: "",
  });
  const [loader, setloader] = useState(false)
  const submitForm = async (e) => {
    e.preventDefault();
    setloader(true)
    try {
      let res = await Axios.post(
        "https://api.umerfarooq.dev/.netlify/functions/checkUsers",
        form,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      openModal(true)
      console.log(res);
    } catch (e) {
      console.log(e);
    }
    setloader(false);
  };
  const handleChange = (e) => {
    setFormData({ ...form, [e.target.name]: e.target.value });
  };
  return (
    <>
      <h1 className="font-black text:xl md:text-3xl my-10 text-center">
        Drop Me a mail I would Love to talk to you....
      </h1>
      <form className="w-full max-w-lg mx-auto" onSubmit={submitForm}>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0"></div>
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-last-name"
            >
              Name
            </label>
            <input
              onChange={handleChange}
              name="name"
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="text"
              placeholder="Doe"
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-password"
            >
              E-mail
            </label>
            <input
              onChange={handleChange}
              name="email"
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="email"
              type="email"
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-password"
            >
              Message
            </label>
            <textarea
              onChange={handleChange}
              name="msg"
              cols="30"
              rows="10"
              className=" no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none"
            ></textarea>
          </div>
        </div>
        <div className="mb-10 md:flex md:items-center justify-end">
          <div className="w-full flex justify-end">
            <button
              className="shadow  focus:shadow-outline bg-green-500 focus:outline-none text-white font-bold py-2 px-4 rounded"
              type="submit"
            >
              Send {loader&&<FontAwesomeIcon icon={faSpinner} className="animate-spin"/>}
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default Contact;
