import React from 'react'
import { useParams } from "react-router-dom"

const EditContact = ({contacts}) => {
    const {id} = useParams()

    const contact = contacts.find(items=> items.id == id)
  return (
    <div>
        <h1>Edit this Contact</h1>

        <form onSubmit={(e)=>{e.preventDefault()}}>

        <div>
            <input type="text" placeholder='name'/>
        </div>
        <div>
            <input type="text" placeholder='email'/>
        </div>

        <button>update</button>
        </form>
      
    </div>
  )
}

export default EditContact
