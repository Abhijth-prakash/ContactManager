import avatar from "../images/avatar.jpg"
import { Link } from "react-router-dom"
import AddContact from "./AddContact"

const ContactCard = ({contacts,contactDelete}) => {

    function deleteContact(id){
        contactDelete(id)
    }

    const listitems = contacts.map(items=> <li key={items.id}>
        <img src={avatar} style={{width:"60px"}} alt="avtar" />
        {items.name} {items.email}
        <button onClick={()=>deleteContact(items.id)} >Del</button>
        </li>)
        
  return (
    <div><Link to="/add">
        <button>Add contact</button>
        </Link>
      <ol>
        {listitems}
      </ol>
    </div>
  )
}

export default ContactCard
