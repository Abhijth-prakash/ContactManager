import React from 'react'
import { useParams, useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form"

const EditContact = ({ contacts, updatingContact }) => {
  const { id } = useParams()
  const navigate = useNavigate()
  const contact = contacts.find(items => items.id == id)

  const { register, handleSubmit, formState,setError } = useForm({
    defaultValues: {
      name: contact?.name,
      email: contact?.email
    }
  })

  const { errors } = formState

  const updation = (data) => {
    const duplicate = contacts.find(items=> items.id != id && items.email === data.email)
    if(duplicate){
      if(duplicate.email === data.email){
       setError("email", { message: "Email is already added" })
      }
    }else{
    updatingContact(data, id)
    navigate('/')
    }

  }

  return (
    <div className="max-w-md mx-auto mt-8 px-4">
      
      <h1 className="text-2xl font-semibold text-gray-800 mb-4">
        Edit Contact
      </h1>

      <form onSubmit={handleSubmit(updation)} noValidate className="flex flex-col gap-4">

        <input
          {...register("name", {
            required: {
              value: true,
              message: "name is required"
            }
          })}
          type="text"
          placeholder="Name"
          className="w-full p-3 border border-gray-200 rounded-xl outline-none focus:border-blue-400"
        />
        {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}

        <input
          type="email"
          {...register("email", {
            required: "email is required",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "invalid email address"
            }
          })}
          placeholder="Email"
          className="w-full p-3 border border-gray-200 rounded-xl outline-none focus:border-blue-400"
        />
        {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-xl hover:bg-blue-600"
        >
          Update Contact
        </button>

      </form>
    </div>
  )
}

export default EditContact