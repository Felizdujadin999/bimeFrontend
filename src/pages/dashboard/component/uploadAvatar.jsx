import React,{useState} from 'react';
import Avatar from 'react-avatar-edit';

function UploadAvatar() {
    const [src, setSrc] = useState(null);
    const [preview, setPreview] = useState(null);
   

const onClose = () =>{
    setPreview(preview);
    localStorage.setItem('userdp', preview)
    window.location.reload(true)

}

const onCrop = (view) =>{
    setPreview(view);
    setSrc(null);

}

const dpstyle ={
 
    border : 'solid 2pt red',
    fontSize: '5px',
    width: '1rem',
    height: '1rem'
}

  return (
    
    
    <div>  
         {preview &&  <img src={preview} style={{dpstyle}}  alt=''/> }
     <Avatar
     width={250}
     height={250}
     onCrop={onCrop}
     onClose={onClose}
     
     src={src}
    
     />
     
    </div>
  );
}

export default UploadAvatar;
