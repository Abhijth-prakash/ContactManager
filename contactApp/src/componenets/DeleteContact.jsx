import { useParams,Link,useNavigate } from "react-router-dom"

const DeleteContact = ({contactDelete}) => {
    const {id} = useParams()
    const navigate = useNavigate()

        function deleteContact(id){
        contactDelete(id)
        navigate('/')
        console.log(id)
    }

  return (
    <div>
      <h1>do u wanna delete this contact</h1>
      <button onClick={()=>deleteContact(id)} >yes</button>
      <Link to="/">
      <button>no</button>
      </Link>
    </div>
  )
}

export default DeleteContact
