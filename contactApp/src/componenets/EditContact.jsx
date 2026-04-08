import React from 'react'
import { useParams,useNavigate } from "react-router-dom"
import  {useForm} from "react-hook-form"

const EditContact = ({contacts,updatingContact}) => {
    const {id} = useParams()
    const navigate = useNavigate()
    const contact = contacts.find(items=> items.id == id)
    const {register,handleSubmit,formState}  = useForm({
        defaultValues:{
            name:contact?.name,
            email:contact?.email
        }
    })
    const {errors} = formState
    

    const updation = (data)=>{
        console.log("edit form data is", data)
        updatingContact(data,id)
        navigate('/')
    }
  return (
    <div>
        <h1>Edit this Contact</h1>

       <form onSubmit={handleSubmit(updation)} noValidate>
        <div>

            <input {...register("name",{required:{
                value:true,
                message:"name is required"
            }})} type="text" placeholder='name'/>
          {errors.name && <p>{errors.name.message}</p>}
        </div>
        <div>

            <input type="email" {...register("email",{
                    required: "email is required",
                        pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: "invalid email address"
                         }
        })}  placeholder='email'/>
        {errors.email && <p>{errors.email.message}</p>}
        </div>

        <button>update</button>
        </form>
      
    </div>
  )
}

export default EditContact
