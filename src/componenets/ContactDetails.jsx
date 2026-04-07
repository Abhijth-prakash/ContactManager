import avatar from "../images/avatar.jpg"
import { useParams } from "react-router-dom"

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
      
    </div>
  )
}

export default ContactDetails
