import { useNavigate } from "react-router-dom";
import useField from "../hooks/useSignup";

const LoginComponent = ({ setIsAuthenticated }) => {
  const emailInput = useField("text");
  const passwordInput = useField("password");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await fetch("/api/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: emailInput.value, password: passwordInput.value }),
      });

      if (response.ok) {
        const user = await response.json();
        localStorage.setItem("user", JSON.stringify(user));
        console.log("User logged in successfully!");
        setIsAuthenticated(true);
        navigate("/");
      } else {
        console.error("Login failed");
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <label>
        Username:
        <input {...emailInput}/>
      </label>
      <br />
      <label>
        Password:
        <input {...passwordInput} />
      </label>
      <br />
      <button onClick={handleLogin}>Log In</button>
    </div>
  );
};

export default LoginComponent;
