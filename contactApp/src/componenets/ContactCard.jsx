import {  useState } from "react"
import avatar from "../images/avatar.jpg"
import { Link } from "react-router-dom"

const ContactCard = ({contacts}) => {

    const [input,setInput] = useState("")

    const filteredContacts = contacts.filter(item =>
      item.name.toLowerCase().includes(input.toLowerCase()) ||
      item.email.toLowerCase().includes(input.toLowerCase()))



    const listitems = filteredContacts.map(items =>  <li key={items.id}>
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
    <div>
    
        <input type="text" value={input} onChange={(e)=>setInput(e.target.value)} />

      <Link to="/add">
        <button>Add contact</button>
        </Link>
      <ol>
        {listitems}
      </ol>
    </div>
  )
}

export default ContactCard
