import { useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form"

const AddContact = ({ contactRec }) => {

    const { register, handleSubmit } = useForm()
    const navigate = useNavigate()

    function dataHandling(contact){
        contactRec(contact)
        navigate('/')
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

        <input
          type="email"
          placeholder="Email"
          {...register("email")}
          className="w-full p-3 border border-gray-200 rounded-xl outline-none focus:border-blue-400"
        />

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