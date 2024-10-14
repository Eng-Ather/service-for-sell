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
              className="costumer_fname"
              type="text"
              required
            />
          </div>

          <div>
            <label>Last Name:</label>
            <input
              className="costumer_lname"
              type="text"
              required
            />
          </div>
          
          <div>
            <label>Email:</label>
            <input
              className="costumer_email"
              type="email"
              required
            />
          </div>
          
          <div>
            <label>Password:</label>
            <input
              className="costumer_password"
              type="password"
              required
            />
          </div>

          <div>
            <label>Contact No:</label>
            <input
              className="costumer_contact"
              type="number"
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
