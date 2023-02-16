import React from 'react'
import {useForm} from "react-hook-form";
import Card from '@mui/material/Card';
import { Typography } from '@mui/material';
import { Button } from '@mui/material';
import { auth } from "../../helpers/firebaseConfig";
import {storage} from "../../helpers/firebaseConfig";
import { getStorage, ref, uploadBytes } from "firebase/storage";

interface ProfilePhotoFormValues {
    profilePhoto: FileList;
}

const ProfilePhotoForm = () => {
    const {register, handleSubmit} = useForm<ProfilePhotoFormValues>()
    const uploadPhoto = (data: ProfilePhotoFormValues) => {
        
        const photo = data.profilePhoto[0];
         if (auth.currentUser) {
            const storageRef = ref(storage, `/users/${auth.currentUser.uid}/profile`);
            uploadBytes(storageRef, photo).then(() => {
                console.log('sukces!');
        })
        .catch((err) => console.error(err.message));
    }
}
   
  return (
    <form onSubmit={handleSubmit(uploadPhoto)}>
        <Card sx={{p: '1rem'}}>
            <Typography variant= 'h6' align = 'center' sx={{fontSize: '1rem'}} >
                Upload your profile picture
            </Typography>
            <Button variant='contained' component='label' sx={{display: 'block', mx: 'auto', my: '1rem', alignContent: 'center'}}>
            <Typography variant ='h6' align='center' fontSize='1rem'>Select a file
            </Typography>
                <input type="file"  hidden {...register('profilePhoto', {required: true})}/>
            </Button>
            <Button variant='contained' type='submit' sx={{display: 'block', mx: 'auto'}}>
                Upload
            </Button>
          

        </Card>
    </form>
  )
}

export default ProfilePhotoForm

