import Avatar from "@mui/material/Avatar";
import { useState } from "react";
import { storage } from "../firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { artists } from "../mock";

const UserPicture = () => {
  const [image, setImage] = useState<File | null>(null);
  const [url, setUrl] = useState<string>("");

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleSubmit = () => {
    if (image) {
      const imageRef = ref(storage, "image");
      uploadBytes(imageRef, image)
        .then(() => {
          getDownloadURL(imageRef)
            .then((downloadUrl) => {
              setUrl(downloadUrl);
            })
            .catch((error) => {
              console.log(error.message, "error getting the image");
            });
        })
        .catch((error) => {
          console.log(error.message);
        });
    }
  };

  return (
    <div>
      <Avatar alt="" src={url} sx={{ width: 56, height: 56 }} />
      <input
        className="text-transparent text-xs "
        type="file"
        onChange={handleImageChange}
      />
      <button onClick={handleSubmit}>Enviar</button>
    </div>
  );
};

export default UserPicture;
