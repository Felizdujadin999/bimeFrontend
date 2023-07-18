import React, { useState } from "react";
import Avatar from "react-avatar-edit";
import {Cloudinary} from "@cloudinary/url-gen";
import { unstable_HistoryRouter } from "react-router-dom";

function UploadAvatar() {
  // const [src, setSrc] = useState(null);
  const [preview, setPreview] = useState(null);
  const [ url, setUrl ] = useState("");



  const uploadImage = () => {
    const data = {
      "file": preview,
      "upload_preset":"bimeupload",
      "cloud_name":"dc7jgb30v"
      

    }
    console.log('the data is -->', data);
    fetch("https://api.cloudinary.com/v1_1/dc7jgb30v/image/upload",{
    method:"post",
    body: data
    })
    .then(resp => resp.json())
    .then(data => {
    setUrl(data.url)
    console.log('the image is -->',data)
    })
    .catch(err => console.log(err))
    }


    
  const onClose = () => {
    setPreview(preview);
    localStorage.setItem("userdp", preview);
    uploadImage();
    window.location.reload(true);
    // console.log(preview);
  };


  const onCrop = (view) => {
    setPreview(view);
    // setSrc(null);
  };





  return (
    <div className="uploadav">
      {preview && <img src={preview} className="prevcrop" alt="" />}

      <Avatar
        width={250}
        height={250}
        onCrop={onCrop}
        onClose={onClose}
        className="avartarprev"
        src={url}
      />

      <button className="save-btn" onClick={onClose}>
        save
      </button>
    </div>
  );
}

export default UploadAvatar;
