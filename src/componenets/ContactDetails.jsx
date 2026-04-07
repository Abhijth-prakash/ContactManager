import avatar from "../images/avatar.jpg"
import { useParams,Link } from "react-router-dom"


const ContactDetails = ({contacts}) => {
    const {id} = useParams()
    const contact = contacts.find(items=> items.id == id)
  return (
    <div>
        <img src={avatar} alt="" />
        <div>
            <h1>{contact.name}</h1>
            <p>{contact.email}</p>
        </div>
        <Link to="/">
      <button>Back to Contact list</button>
      </Link>
    </div>
  )
}

export default ContactDetails
