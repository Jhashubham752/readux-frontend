import React , {useState} from 'react'

const Profile = () => {

    let [user , setuser] = useState({
        photo:'',
        username:"",
        phone_number:"",
})
const handlesubmit = (e)=>{
      e.preventDefault()

}

const handlechange = (e) =>{
    setuser({...user,[e.target.name]:e.target.value})
}

const handlephoto = (e) =>{
    setuser({...user , photo: e.target.files[0]})
}

return (
<div>
    {console.log(user)}
 <form method="POST"  encType='multipart/form-data'>
     <label for='photo'> Photo</label>
<input type="file"  name='photo'
onChange={handlephoto} />
<label for='username'> username</label>
<input type="text"  name='' value={user.username} onChange={handlechange} />

<label for='Phone_number'> Phone Number</label>
<input type="number"  name='phone_number'  value={user.phone_number} onChange={handlechange}/>

<input type="submit" />
 </form>
</div>
    )
}

export default Profile
