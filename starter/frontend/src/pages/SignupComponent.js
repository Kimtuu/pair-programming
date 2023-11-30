import { useNavigate } from "react-router-dom";
import useField from "../hooks/useSignup";

const SignupComponent = ({ setIsAuthenticated }) => {
  const emailInput = useField("text");
  const passwordInput = useField("password");
  const passwordInputVerify = useField("password");
  const navigate = useNavigate();

  const handleSignup = async () => {
    if (!passwordInput.value === passwordInputVerify.value) {
      return console.log("Passwords do not match");}
    try {
      const response = await fetch("/api/user/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: emailInput.value,
          password: passwordInput.value,
        }),
      });

      if (response.ok) {
        const user = await response.json();
        localStorage.setItem("user", JSON.stringify(user));
        console.log("User signed up successfully!");
        setIsAuthenticated(true);
        navigate("/");
      } else {
        console.error("Signup failed");
      }
    } catch (error) {
      console.error("Error during signup:", error);
    }
  };

  return (
    <div>
      <h2>Signup</h2>
      <label>
        email:
        <input {...emailInput} />
      </label>
      <br />
      <label>
        Password:
        <input {...passwordInput} />
      </label>
      <br />
      <label>
        Verify Password:
        <input {...passwordInputVerify} />
      </label>
      <br />
      <button onClick={handleSignup}>Sign Up</button>
    </div>
  );
};

export default SignupComponent;
