import { useEffect, useState } from 'react'
import './App.css'
import AddContact from './componenets/AddContact'
import Header from './componenets/header'
import ContactCard from './componenets/ContactCard'
import { v4 as uuid } from 'uuid'


function App() {

  //retriving data from local storage
    const [contacts,setContacts] = useState(()=>{
    const data = localStorage.getItem("contact")
    return data ? JSON.parse(data): [] 
  })


  //deleting contact function
  function contactDelete(id){
    if(id){
      const Newlist = contacts.filter(items => items.id !=id)
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
    <AddContact contactRec={contactRec}></AddContact>
    <ContactCard  contacts = {contacts} contactDelete={contactDelete}  ></ContactCard>
    </>
  )
}

export default App
