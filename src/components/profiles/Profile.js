import React, { useState } from 'react';

function Profile(){
    const [image, setImage] = useState({preview:"", profile_image:""})

    // function handleChange(e){
    //     if (e.target.files.length){
    //         setImage({
    //             preview: URL.createObjectURL(e.target.files[0]),
    //             profile_image: e.target.files[0]
    //         })
    //     }
    // }

    // async function handleUpload(e){
    //     e.preventDefault()
    //     const formData= new FormData()
    //     formData.append("profile_image", image.profile_image)
    //     await fetch(`http://localhost:3000/users/`, {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "multipart/form-data"
    //         },
    //         body: formData
    //     })
    //     .then(r => console.log(r))
    // }

    return (
        <div className="profile">
            hello world
        {/* <label htmlFor="upload-button">
            {image.preview ? (
            <img src={image.preview} alt="dummy" width="300" height="300" />
            ) : (
            <>
                <span className="fa-stack fa-2x mt-3 mb-2">
                <i className="fas fa-circle fa-stack-2x" />
                <i className="fas fa-store fa-stack-1x fa-inverse" />
                </span>
                <h5 className="text-center">Upload your photo</h5>
            </>
            )}
        </label>
        <input
            type="file"
            className="upload-button"
            multiple={false}
            style={{ display: "none" }}
            onChange={handleChange}
        />
        <br />
        <button onClick={handleUpload}>Upload</button> */}
      </div>
    )
}

export default Profile;