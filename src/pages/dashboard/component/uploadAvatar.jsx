import React, { useState } from "react";
import Avatar from "react-avatar-edit";

function UploadAvatar() {
  const [src, setSrc] = useState(null);
  const [preview, setPreview] = useState(null);

  const onClose = () => {
    setPreview(preview);
    localStorage.setItem("userdp", preview);
    window.location.reload(true);
    console.log(preview);
  };

  const onCrop = (view) => {
    setPreview(view);
    setSrc(null);
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
        src={src}
      />

      <button className="save-btn" onClick={onClose}>
        save
      </button>
    </div>
  );
}

export default UploadAvatar;
