import { useEffect, useState } from 'react'
import './App.css'
import AddContact from './componenets/AddContact'
import Header from './componenets/header'
import ContactCard from './componenets/ContactCard'
import { v4 as uuid } from 'uuid'
import { Routes,Route } from 'react-router-dom'
import ContactDetails from './componenets/ContactDetails'
import DeleteContact from './componenets/DeleteContact'


function App() {

  //retriving data from local storage
    const [contacts,setContacts] = useState(()=>{
    const data = localStorage.getItem("contact")
    return data ? JSON.parse(data): [] 
  })


  //deleting contact function
  function contactDelete(id){
    if(id){
      const Newlist = contacts.filter(items => items.id !==id)
      setContacts(Newlist)
    }
  }

  //adding data to state
  const contactRec = (contact) =>{
    setContacts([...contacts,{...contact,id:uuid()}])
  }
  
  
  //saving data to localstroage
  useEffect(()=>{
    localStorage.setItem("contact",JSON.stringify(contacts))
  },[contacts])  


  

  return (
    <>
    <Header></Header>
    <Routes>
    <Route path='/' element={<ContactCard contacts = {contacts}  ></ContactCard>} ></Route>
    <Route path='/add' element={<AddContact contactRec={contactRec} ></AddContact>}> </Route>
    <Route path='/contact/delete/:id' element={<DeleteContact contactDelete={contactDelete} ></DeleteContact>} />
    <Route path='/contact/:id' element={<ContactDetails contacts={contacts} />} />
    </Routes>
    </>
  )
}

export default App 
