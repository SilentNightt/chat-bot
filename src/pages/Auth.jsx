import React, { useState } from 'react'
import Logo from '../pictures/Logo.jpg'
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, storage,db } from '../firebase';
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";

const Auth = () => {
    const [err, setErr] = useState(false);

    const handlerSubmit =  async (e) => {    
        e.preventDefault();
        const displayName = e.target[0].value;
        const email = e.target[1].value;
        const password = e.target[2].value;
        const file = e.target[3].files[0];

        try{
            // name - так будет называться файл (картинка, которую мы загружаем)
            const res = await createUserWithEmailAndPassword(auth, email, password);

            const storageRef = ref(storage, displayName);

            const uploadTask = uploadBytesResumable(storageRef, file);

            uploadTask.on(
            (error) => {
                setErr(true);
            }, 
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then( async(downloadURL) => {
                    await updateProfile(res.user,{
                        displayName,
                        photoURL:downloadURL
                    })
                     await setDoc(doc(db, "users", res.user.uid), {
                        uid: res.user.uid,
                        displayName,
                        email,
                        photoURL: downloadURL,
                     });
                });
            }
        );

            
        } catch (err) {
            setErr(true);
        }

    }

  return (
    <div className='formContainer'>
        <div className='formWallpaper'>
            <span className='logo'>Chat Bot</span>
            <span className='title'>Register</span>

            <form className='formHolders' onSubmit={handlerSubmit}>
                <input type='text' placeholder = "enter your name"/>
                <input type='email' placeholder = "enter your emale"/>
                <input type='password' placeholder = "enter your password"/>
                <input type='file' style = {{display: 'none'} } id='file'/>
                <label  htmlFor='file'>
                    <img src={Logo}/>
                    <p>Choose your avatar</p>
                </label>
                <button>
                    Registrate
                </button>
                {err && <span>Error</span>}
            </form>
            <p className='footer'>If you registreate. Log in</p>
        </div>
    </div>
  )
}

export default Auth