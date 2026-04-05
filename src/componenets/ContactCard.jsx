import avatar from "../images/avatar.jpg"

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
    <div>
      <ol>
        
        {listitems}
      </ol>
    </div>
  )
}

export default ContactCard
