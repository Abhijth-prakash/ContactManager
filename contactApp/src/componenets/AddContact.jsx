import { useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form"
import {z} from 'zod'
import {zodResolver} from '@hookform/resolvers/zod'


    const registerSchema = z.object({
      name:z.string().min(1,{message:"name is required"}),
      email:z.string().min(1,{message:"email is required"}).email({message:"invalid email"})
    })

const AddContact = ({ contactRec,contactList }) => {

    const { register, handleSubmit,formState,setError } = useForm({
      resolver:zodResolver(registerSchema)
    })
    const navigate = useNavigate()
    const { errors } = formState


function dataHandling(contact) {
  const duplicate = contactList.find(
    item => item.name === contact.name || item.email === contact.email
  )

  if (duplicate) {
    if (duplicate.name === contact.name) {
      setError("name", { message: "Name is already taken" })
    }
    if (duplicate.email === contact.email) {
      setError("email", { message: "Email is already taken" })
    }
  } else {
    contactRec(contact)
    navigate('/')
  }
}

  return (
    <div className="max-w-md mx-auto mt-8 px-4">
      <h1 className="text-2xl font-semibold text-gray-800 mb-4">Add Contact</h1>

      <form onSubmit={handleSubmit(dataHandling)} className="flex flex-col gap-4">

        <input
          type="text"
          {...register("name")}
          placeholder="Name"
          className="w-full p-3 border border-gray-200 rounded-xl outline-none focus:border-blue-400"
        />
        {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}

        <input
          type="email"
          placeholder="Email"
          {...register("email")}
          className="w-full p-3 border border-gray-200 rounded-xl outline-none focus:border-blue-400"
        />
        {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-xl hover:bg-blue-600"
        >
          Add Contact
        </button>

      </form>
    </div>
  )
}

export default AddContact