import { useEffect, useState } from 'react'
import AddContact from './componenets/AddContact'
import Header from './componenets/header'
import ContactCard from './componenets/ContactCard'
import { v4 as uuid } from 'uuid'
import { Routes,Route } from 'react-router-dom'
import ContactDetails from './componenets/ContactDetails'
import DeleteContact from './componenets/DeleteContact'
import api from './api/contactApi'
import EditContact from './componenets/EditContact'


function App() {

  // intialsing state
    const [contacts,setContacts] = useState([])
  
  // retreving data from server
  useEffect(() => {
  async function fetchContacts() {
    const contact = await api.get("/contacts")
    setContacts(contact.data)
  }
  fetchContacts()
  }, [])



  //deleting contact function
  async function contactDelete(id){
    if(id){
      const Newlist = contacts.filter(items => items.id !==id)
      const request = await api.delete(`/contacts/${id}`)
      setContacts(Newlist)
    }
  }

  //adding data to state && saving to jsonserver
  const contactRec = async (contact) =>{
    const newContact = {
      id:uuid(),
      ...contact
    }
    const request = await api.post("/contacts",newContact)
    setContacts([...contacts,newContact])
  }

  //adding updated data to state && saving to jsonserver
const updatingContact = async (data, id) => {
  if (data) {
    const updatedContact = { id, ...data }
    await api.put(`/contacts/${id}`, updatedContact)
    const newContact = contacts.map(items =>
      items.id == id ? updatedContact : items
    )
    setContacts(newContact)
  }
}
  


  return (
    <>
    <Header></Header>
    <Routes>
    <Route path='/' element={<ContactCard contacts = {contacts}  ></ContactCard>} ></Route>
    <Route path='/add' element={<AddContact contactRec={contactRec} ></AddContact>}> </Route>
    <Route path='/contact/delete/:id' element={<DeleteContact contactDelete={contactDelete} ></DeleteContact>} />
    <Route path='/contact/edit/:id' element={<EditContact contacts={contacts} updatingContact = {updatingContact} ></EditContact>} />
    <Route path='/contact/:id' element={<ContactDetails contacts={contacts}  />} />
    </Routes>
    </>
  )
}

export default App 
