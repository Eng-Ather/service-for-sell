// Client Regrestration Page

import styles from "../../../(auth)/signin_signup.css";
import logo from "../../../public/logo.png"
import { Button } from "@/components/ui/button";

const ClientRegrestrationPage = () => {
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
          Register As A Client
        </h2>

        <div className="registration_form">
          {/* Add your login form elements here */}
          <div>
            <label>First Name:</label>
            <input
              className="client_fname"
              type="text"
              required
            />
          </div>

          <div>
            <label>Last Name:</label>
            <input
              className="client_lname"
              type="text"
              required
            />
          </div>

          <div>
            <label>Email:</label>
            <input
              className="client_email"
              type="email"
              required
            />
          </div>

          <div>
            <label>Password:</label>
            <input
              className="client_password"
              type="password"
              required
            />
          </div>

          <div>
            <label>Contact No:</label>
            <input
              className="client_contact"
              type="number"
              required
            />
          </div>

          <div>
            <label>Image</label>
            <input
            className="client_image"
            type="file"
            required
            />
          </div>

          <Button variant="destructive">Submit</Button>
        </div>
      </div>
    </>
  );
};

export default ClientRegrestrationPage;
