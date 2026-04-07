import { useState } from "react"
import { useNavigate } from "react-router-dom"


const AddContact = ({contactRec}) => {


    const [contact,setContact] = useState({
        name:"",
        email:""
    })

    const navigate = useNavigate()

    function handle(e){
        e.preventDefault()
        if(contact.name === "" || contact.email === ""){
        alert("all data is manadtory")
        }else{
        setContact({name:"", email:""})
        contactRec(contact)
        navigate('/')
        }

    }

 
  return (
    <div>
        <div className="mainui">
            <h3>Add contact</h3>
            <form onSubmit={(e)=>e.preventDefault()}>
                <input  type="text" placeholder="name"  value={contact.name} onChange={(e)=>setContact( {...contact,name:e.target.value})}/>
                <input type="email" placeholder="email"  value={contact.email} onChange={(e)=> setContact({...contact,email:e.target.value})} />
                <button onClick={handle} >Add</button>
            </form>
        </div>
      
    </div>
  )
}

export default AddContact
