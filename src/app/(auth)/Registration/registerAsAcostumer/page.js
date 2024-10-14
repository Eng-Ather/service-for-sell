// Costumer Regrestration Page

import styles from "../../../(auth)/signin_signup.css"
import logo from "../../../public/logo.png"
import { Button } from "@/components/ui/button";

const CostumerRegrestrationPage = () => {
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
          {/* Add your login form elements here */}
          <div>
            <label>First Name:</label>
            <input
              className="signup_fname"
              type="text"
              id="signup_clien_fname"
              required
            />
          </div>

          <div>
            <label>Last Name:</label>
            <input
              className="signup_lname"
              type="text"
              id="signup_clien_lname"
              required
            />
          </div>
          
          <div>
            <label>Email:</label>
            <input
              className="signup_email"
              type="email"
              id="signup_clien_email"
              required
            />
          </div>
          
          <div>
            <label>Password:</label>
            <input
              className="signup_password"
              type="password"
              id="signup_clien_password"
              required
            />
          </div>

          <div>
            <label>Contact No:</label>
            <input
              className="signup_contact"
              type="number"
              id="signup_clien_contact"
              required
            />
          </div>

          <div>
            <label>Image</label>
            <input
            className="signup_image"
            type="file"
            id="client_clien_image"
            required
            />
          </div>

          <Button variant='destructive'>Submit</Button>

        </div>
      </div>
    </>
  );
};

export default CostumerRegrestrationPage;
