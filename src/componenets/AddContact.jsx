import { useState } from "react"


const AddContact = ({contactRec}) => {

    const [mail,setMail] = useState("")
    const [name,setName] = useState("")

    function handle(){
        setName("")
        setMail("")
        contactRec(name,mail)
    }

 
  return (
    <div>
        <div className="mainui">
            <h3>Add contact</h3>
            <form onSubmit={(e)=>e.preventDefault()}>
                <input type="text" placeholder="name"  value={name} onChange={(e)=>setName(e.target.value)}/>
                <input type="email" placeholder="email"  value={mail} onChange={(e)=>setMail(e.target.value)}/>
                <button onClick={handle} >Add</button>
            </form>
        </div>
      
    </div>
  )
}

export default AddContact
