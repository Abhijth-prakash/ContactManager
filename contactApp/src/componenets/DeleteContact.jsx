import { useParams, Link, useNavigate } from "react-router-dom"

const DeleteContact = ({ contactDelete }) => {
  const { id } = useParams()
  const navigate = useNavigate()

  function deleteContact(id) {
    contactDelete(id)
    navigate('/')
  }

  return (
    <div className="max-w-md mx-auto mt-8 px-4">

      <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-6 text-center">
        
        <h1 className="text-lg font-semibold text-gray-800 mb-4">
          Do you want to delete this contact?
        </h1>

        <div className="flex gap-3">

          <button
            onClick={() => deleteContact(id)}
            className="flex-1 bg-red-500 text-white py-2 rounded-xl hover:bg-red-600"
          >
            Yes
          </button>

          <Link to="/" className="flex-1">
            <button className="w-full bg-gray-200 text-gray-700 py-2 rounded-xl hover:bg-gray-300">
              No
            </button>
          </Link>

        </div>

      </div>

    </div>
  )
}

export default DeleteContact