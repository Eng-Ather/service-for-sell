// app/updateProfile/page.js (or .jsx/.tsx depending on your setup)
"use client"
import React, { useState } from "react";
import { Header } from "@/hader/page";
import logo from "@/app/public/logo.png";
import { Button } from "@/components/ui/button";
import styles from "@/app/(auth)/signin_signup.css"; // Ensure this path is correct

import { getDownloadURL, uploadBytes, ref, storage, auth, updateProfile, updateEmail, updatePassword } from "@/lib/firebase";

const UpdateProfile = () => {
  // const auth = getAuth();
  const [userUpdatedName, setUserUpdatedName] = useState("");
  const [userUpdatedEmail, setUserUpdatedEmail] = useState("");
  // const [userUpdatedPassword, setUserUpdatedPassword] = useState("");
  const [userUpdatedContact, setUserUpdatedContact] = useState("");
  const [userUpdatedWorkField, setUserUpdatedWorkField] = useState("");
  const [userUpdatedImage, setUserUpdatedImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const currentUser = auth.currentUser; // Get the current user

      // Handle image upload
      let imageUrl = "";
      if (userUpdatedImage) {
        const imageRef = ref(storage, `userUpdatedImage/${currentUser.uid}`); // Create a reference with the user's UID
        await uploadBytes(imageRef, userUpdatedImage); // Upload the file
        imageUrl = await getDownloadURL(imageRef); // Get the download URL of the uploaded image
      }

      // Update the profile
      await updateProfile(auth.currentUser, {
        name: userUpdatedName,
        email: userUpdatedEmail,
        phone: userUpdatedContact,
        feild: userUpdatedWorkField,
        image: imageUrl
      });

      // Additional logic to handle email, password, etc.
      // ...

      // Reset the form or show a success message
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };
  // // const auth = getAuth();
  // updateProfile(auth.currentUser, {
  //   displayName: "Jane Q. User",
  //   photoURL: "https://example.com/jane-q-user/profile.jpg",
  // })
  //   .then(() => {
  //     // Profile updated!
  //     // ...
  //   })
  //   .catch((error) => {
  //     // An error occurred
  //     // ...
  //   });

    return (
      <div>
        <Header />
  
        <div className="Login_box">
          <div className="login_image">
            <img
              src={logo.src}
              style={{ width: "300px", height: "180px", margin: "0px auto" }}
              alt="Logo"
            />
          </div>
  
          <h2 className="text-center text-white bg-red-500">Update Details</h2>
  
          {loading ? (
            <div className="text-2xl text-center my-10 text-red-500 font-extrabold opacity-100 transition-opacity duration-700 ease-in-out animate-pulse" style={{ textShadow: "2px 1px 3px black" }}>
              Please wait, synchronizing Data with Firebase...
            </div>
          ) : (
            <form className="registration_form" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="fname">Name:</label>
                <input
                  name="name"
                  type="text"
                  required
                  className="userUpdated_name"
                  placeholder="Ather Ali Siddiui"
                  onChange={(e) => setUserUpdatedName(e.target.value)}
                />
              </div>
  
              <div>
                <label htmlFor="email">Email:</label>
                <input
                  name="email"
                  type="email"
                  className="userUpdated_email"
                  placeholder="abc@gmail.com"
                  onChange={(e) => setUserUpdatedEmail(e.target.value)}
                />
              </div>
  
              {/* <div>
                <label htmlFor="password">Password:</label>
                <input
                  name="password"
                  type="password"
                  minLength={6}
                  maxLength={12}
                  className="userUpdated_password"
                  placeholder="*******"
                  onChange={(e) => setUserUpdatedPassword(e.target.value)}
                />
              </div> */}
  
              <div>
                <label htmlFor="contact">Contact No:</label>
                <input
                  name="contact"
                  type="text"
                  required
                  className="userUpdated_contact"
                  placeholder="must be in this format => 923212257154"
                  onChange={(e) => setUserUpdatedContact(e.target.value)}
                />
              </div>
  
              <div>
                <label htmlFor="workField">Profession</label>
                <input
                  name="workField"
                  type="text"
                  required
                  className="userUpdated_workField"
                  placeholder="electrician/carpenter/driver"
                  onChange={(e) => setUserUpdatedWorkField(e.target.value)}
                />
              </div>
  
              <div>
                <label htmlFor="image">Image:</label>
                <input
                  name="image"
                  type="file"
                  required
                  className="userUpdated_image"
                  onChange={(e) => setUserUpdatedImage(e.target.files[0])}
                />
              </div>
  
              {error && <div className="text-red-500">{error}</div>}
  
              <Button type="submit" variant="destructive">
                Submit
              </Button>
            </form>
          )}
        </div>
      </div>
    );
  };
  
  export default UpdateProfile;
