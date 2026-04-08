import avatar from "../images/avatar.jpg"
import { useParams, Link } from "react-router-dom"

const ContactDetails = ({ contacts }) => {
  const { id } = useParams()
  const contact = contacts.find(items => items.id == id)

  return (
    <div className="max-w-md mx-auto mt-8 px-4">

      <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-6 flex flex-col items-center text-center">
        
        <img
          src={avatar}
          alt="avatar"
          className="w-24 h-24 rounded-full object-cover mb-4"
        />

        <h1 className="text-xl font-semibold text-gray-800">
          {contact.name}
        </h1>

        <p className="text-gray-400 mt-1">
          {contact.email}
        </p>

      </div>

      <Link to="/">
        <button className="w-full mt-4 bg-blue-500 text-white py-2 rounded-xl hover:bg-blue-600">
          Back to Contact list
        </button>
      </Link>

    </div>
  )
}

export default ContactDetails