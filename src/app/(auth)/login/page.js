import styles from "../../(auth)/signin_signup.css"; // Ensure this path is correct
import logo from "../../public/logo.png";
import { Button } from "@/components/ui/button";

const LoginPage = () => {
  return (
    <>

      <div className="Login_box">
        <div className="login_image">
          <img
            src={logo.src}
            style={{ width: "300px", height: "180px", margin: "0px auto" }}
            alt="Logo"
          />
        </div>

        <div className="login_form">
          
          <h2 className="text-center text-white bg-red-500">
          Sign in </h2>

          <div>
            <label>Email:</label>
            <input
              className="current_user_email"
              type="email"
              id="email"
              required
            />
          </div>
          
          <div>
            <label>Password:</label>
            <input
              className="current_user_password"
              type="password"
              id="password"
              required
            />
          </div>

          <div>
            <label>Contact No:</label>
            <input
              className="current_user_contact"
              type="number"
              id="contactnumber"
              required
            />
          </div>

          <Button variant='destructive'>Submit</Button>

        </div>
      </div>
    </>
  );
};

export default LoginPage;
