import React, { useState } from 'react';

function UploadPic({ exitForm, handleUpdatePic }){
    const [profileImage, setProfileImage] = useState()
    const [loading, setLoading] = useState(false)
    const [image, setImage] = useState("")

    const uploadImage = async e => {
        const files = e.target.files
        const data = new FormData()
        data.append('file', files[0])
        data.append('upload_preset', 'lifeleague')
        setLoading(true)

        const res = await fetch(`https://api.cloudinary.com/v1_1/dk88vzbyw/image/upload`, {
            method: 'POST',
            body: data
        }) 

        const file =  await res.json()

        console.log(file)

        setImage(file.secure_url)
        setLoading(false)

        handleUpdatePic(file.secure_url)
    }
    
      return (
        <div className="profile-pic-change">
          <button onClick={exitForm} className="exit">X</button>
          <h1 className="change-profile-pic">Change Profile Picture</h1>
            <input type="file" name="file" accept="image/*" placeholder="Upload a profile picture" onChange={uploadImage} />


        { loading ? <h3> ...Loading...</h3> : <img src={image} style={{width: '300px'}}/> }
        </div>
      )
}

export default UploadPic;