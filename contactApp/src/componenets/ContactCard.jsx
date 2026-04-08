import avatar from "../images/avatar.jpg"
import { Link } from "react-router-dom"

const ContactCard = ({contacts}) => {

    const listitems = contacts.map(items=> <li key={items.id}>
        <img src={avatar} style={{width:"60px"}} alt="avtar" />
         <Link to={{pathname:`/contact/${items.id}`,state:{contacts}}}>
        {items.name} {items.email}
        </Link>
        <Link to={{pathname:`/contact/delete/${items.id}`}}>
        <button >Del</button>
        </Link>
        <Link to={{pathname:`/contact/edit/${items.id}`}}>
        <button >Edit</button>
        </Link>
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
