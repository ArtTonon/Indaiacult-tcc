import { useUser } from "../userContext";
import { Link } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import { useState } from "react";
import { storage } from "../firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { artists } from "../mock";

const ProfileButton = () => {
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

  const { usuario, artista } = useUser();
  return (
    <div className="flex flex-row items-center justify-center">
      <Link to={`/artists/${usuario?._id}`}>
        <Avatar alt="" src={url} sx={{ width: 56, height: 56 }} />
        <input className="transpara" type="file" onChange={handleImageChange} />
        <h1 className="font-semibold text-xl">{usuario?.nome}</h1>
      </Link>
    </div>
  );
};

export default ProfileButton;
