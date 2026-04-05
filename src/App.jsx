import { useEffect, useState } from 'react'
import './App.css'
import AddContact from './componenets/AddContact'
import Header from './componenets/header'
import ContactCard from './componenets/ContactCard'

function App() {
  const [contact,setContact] = useState([])


  const contactRec = (names,emails) =>{
    setContact([...contact,{id:Date.now(),name:names,email:emails}])
  }



  return (
    <>
    <Header></Header>
    <AddContact contactRec={contactRec}></AddContact>
    <ContactCard  contacts = {contact}  ></ContactCard>
    </>
  )
}

export default App
