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
import ErrorBoundary from './ErrorBoundries/ErrorBoundries'


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
async function contactDelete(id) {
  if (id) {
    const previous = contacts 
    setContacts(prev => prev.filter(item => item.id !== id))  
    try {
      await api.delete(`/contacts/${id}`)
    } catch (error) {
      setContacts(previous)  
      console.error("Delete failed", error)
    }
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
    <Route path='/' element={ <ErrorBoundary> <ContactCard contacts = {contacts}  ></ContactCard> </ErrorBoundary>} ></Route>
    <Route path='/add' element={ <ErrorBoundary> <AddContact contactRec={contactRec} contactList = {contacts} ></AddContact> </ErrorBoundary> }> </Route>
    <Route path='/contact/delete/:id' element={<ErrorBoundary> <DeleteContact contactDelete={contactDelete} ></DeleteContact> </ErrorBoundary> } />
    <Route path='/contact/edit/:id' element={<ErrorBoundary> <EditContact contacts={contacts} updatingContact = {updatingContact} ></EditContact> </ErrorBoundary>} />
    <Route path='/contact/:id' element={<ErrorBoundary> <ContactDetails contacts={contacts}  /> </ErrorBoundary>} />
    </Routes>
    </>
  )
}

export default App 
