// Costumer Regrestration Page
"use client";

import { createUserWithEmailAndPassword } from "firebase/auth"; // Ensure correct import
import { useState } from "react";
import { useRouter } from "next/navigation"; // Import from next/navigation for the App Router
import styles from "../../../(auth)/signin_signup.css"; // Adjust path as necessary
import logo from "../../../public/logo.png";
import { Button } from "@/components/ui/button";
import {
  auth,
  addDoc,
  db,
  collection,
  ref,
  uploadBytes,
  getDownloadURL,
  storage,
} from "@/lib/firebase";

const CostumerRegrestrationPage = () => {
  const router = useRouter(); // Initialize useRouter

  // ___use state hooks
  const [customerName, setCustomerName] = useState("");
  const [customerEmail, setCustomerEmail] = useState("");
  const [customerPassword, setCustomerPassword] = useState("");
  const [customerContact, setCustomerContact] = useState("");
  const [customerImage, setCustomerImage] = useState(null);
  const [loading, setLoading] = useState(false); // Loading state

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Set loading to true when submission starts

    console.log(
      "Email",
      customerEmail,
      "Contact No:",
      customerContact,
      "Password:",
      customerPassword
    );

    // Sign up function
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        customerEmail,
        customerPassword
      );
      const user = userCredential.user;
      console.log("User registered successfully:", user);

      // Handle image upload
      let imageUrl = "";
      if (customerImage) {
        const imageRef = ref(storage, `customerImage/${user.uid}`); // Create a reference with the user's UID
        await uploadBytes(imageRef, customerImage); // Upload the file
        imageUrl = await getDownloadURL(imageRef); // Get the download URL of the uploaded image
      }

      // After successful registration, update customer details in Firestore
      const docRef = await addDoc(collection(db, "usercollection"), {
        roll: "customer",
        name: customerName,
        email: customerEmail,
        phone: customerContact,
        image: imageUrl,
      });
      console.log("Document written with ID:", docRef.id);

      // alert("Registration successful!");
      router.push("/"); // Redirect to home page
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error("Error during registration:", errorMessage);
      alert(errorMessage);
    } finally {
      setLoading(false); // Set loading to false when submission completes
    }
  };

  return (
    <>
      <div className="registration_box">
        <div className="registration_image">
          <img
            src={logo.src}
            style={{ width: "300px", height: "180px", margin: "0px auto" }}
            alt="Logo"
          />
        </div>

        <h2 className="text-center text-white bg-red-500">
          Register As A Costumer
        </h2>

        <div className="registration_form">
          {/* Show loading indicator while loading */}
          {loading ? (
            <div
              className="text-2xl text-center my-10 text-red-500 font-extrabold opacity-100 transition-opacity duration-700 ease-in-out animate-pulse "
              style={{ textShadow: "2px 1px 3px black" }}
            >
              Please wait, synchronizing Data with Firebase...
            </div>
          ) : (
            <form className="registration_form" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="costumername">Name:</label>
                <input
                  name="costumername"
                  type="text"
                  required
                  className="costumer_name"
                  placeholder="Ather Ali"
                  onChange={(e) => {
                    setCustomerName(e.target.value);
                  }}
                />
              </div>

              <div>
                <label htmlFor="email">Email:</label>
                <input
                  name="email"
                  type="email"
                  required
                  className="costumer_email"
                  placeholder="abc@gmail.com"
                  onChange={(e) => {
                    setCustomerEmail(e.target.value);
                  }}
                />
              </div>

              <div>
                <label htmlFor="password">Password:</label>
                <input
                  name="password"
                  type="password"
                  required
                  className="costumer_password"
                  placeholder="123456"
                  onChange={(e) => {
                    setCustomerPassword(e.target.value);
                  }}
                />
              </div>

              <div>
                <label htmlFor="contact">Contact No:</label>
                <input
                  name="contact"
                  type="tel"
                  required
                  className="costumer_contact"
                  placeholder="923212257154"
                  onChange={(e) => {
                    setCustomerContact(e.target.value);
                  }}
                />
              </div>

              <div>
                <label htmlFor="image">Image:</label>
                <input
                  name="image"
                  type="file"
                  required
                  className="costumer_image"
                  onChange={(e) => {
                    setCustomerImage(e.target.files[0]);
                  }}
                />
              </div>

              <Button type="submit" variant="destructive">
                {" "}
                Submit{" "}
              </Button>
            </form>
          )}
        </div>
      </div>
    </>
  );
};

export default CostumerRegrestrationPage;
