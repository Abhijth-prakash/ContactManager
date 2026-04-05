const ContactCard = ({contacts}) => {

    const listitems = contacts.map(items=> <li key={items.id}>{items.name} {items.email}</li>)
  return (
    <div>
      <ol>
        {listitems}
      </ol>
    </div>
  )
}

export default ContactCard
