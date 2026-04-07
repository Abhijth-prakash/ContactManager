import avatar from "../images/avatar.jpg"
import { Link } from "react-router-dom"

const ContactCard = ({contacts,contactDelete}) => {

    function deleteContact(id){
        contactDelete(id)
    }

    const listitems = contacts.map(items=> <li key={items.id}>
        <img src={avatar} style={{width:"60px"}} alt="avtar" />
         <Link to={{pathname:`/contact/${items.id}`,state:{contacts}}}>
        {items.name} {items.email}
        </Link>
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
