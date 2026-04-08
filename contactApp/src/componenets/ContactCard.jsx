import { useState } from "react"
import avatar from "../images/avatar.jpg"
import { Link } from "react-router-dom"
import { FiEdit2, FiTrash2 } from "react-icons/fi"

const ContactCard = ({contacts}) => {

    const [input,setInput] = useState("")

    const filteredContacts = contacts.filter(item =>
      item.name.toLowerCase().includes(input.toLowerCase()) ||
      item.email.toLowerCase().includes(input.toLowerCase()))

    const listitems = filteredContacts.map(items => (
      <li key={items.id} className="flex items-center gap-3 p-3 bg-white border border-gray-200 rounded-xl shadow-sm">
        <img src={avatar} className="w-12 h-12 rounded-full object-cover" alt="avatar" />
        <div className="flex-1 min-w-0">
          <Link to={{pathname:`/contact/${items.id}`,state:{contacts}}}>
            <p className="font-medium text-gray-800">{items.name}</p>
            <p className="text-sm text-gray-400 truncate">{items.email}</p>
          </Link>
        </div>
        <div className="flex gap-3 items-center">
          <Link to={{pathname:`/contact/edit/${items.id}`}}>
            <FiEdit2 className="text-blue-500 hover:text-blue-700 text-xl cursor-pointer" />
          </Link>
          <Link to={{pathname:`/contact/delete/${items.id}`}}>
            <FiTrash2 className="text-red-400 hover:text-red-600 text-xl cursor-pointer" />
          </Link>
        </div>
      </li>
    ))

  return (
    <div className="max-w-md mx-auto mt-8 px-4">
      <h1 className="text-2xl font-semibold text-gray-800 mb-4">Contacts</h1>

      <input
        type="text"
        value={input}
        onChange={(e)=>setInput(e.target.value)}
        placeholder="Search contacts..."
        className="w-full p-3 border border-gray-200 rounded-xl mb-4 outline-none focus:border-blue-400"
      />

      <Link to="/add">
        <button className="w-full bg-blue-500 text-white py-2 rounded-xl mb-4 hover:bg-blue-600">+ Add Contact</button>
      </Link>

      <ol className="flex flex-col gap-3">
        {listitems}
      </ol>
    </div>
  )
}

export default ContactCard