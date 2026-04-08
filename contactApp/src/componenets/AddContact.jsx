import { useState } from "react"
import { useNavigate } from "react-router-dom"

const AddContact = ({ contactRec }) => {

  const [contact, setContact] = useState({
    name: "",
    email: ""
  })

  const navigate = useNavigate()

  function handle(e) {
    e.preventDefault()
    if (contact.name === "" || contact.email === "") {
      alert("all data is manadtory")
    } else {
      setContact({ name: "", email: "" })
      contactRec(contact)
      navigate('/')
    }
  }

  return (
    <div className="max-w-md mx-auto mt-8 px-4">
      <h1 className="text-2xl font-semibold text-gray-800 mb-4">Add Contact</h1>

      <form onSubmit={handle} className="flex flex-col gap-4">

        <input
          type="text"
          placeholder="Name"
          value={contact.name}
          onChange={(e) => setContact({ ...contact, name: e.target.value })}
          className="w-full p-3 border border-gray-200 rounded-xl outline-none focus:border-blue-400"
        />

        <input
          type="email"
          placeholder="Email"
          value={contact.email}
          onChange={(e) => setContact({ ...contact, email: e.target.value })}
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