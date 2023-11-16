import React, { useState } from "react";

export const Registeration = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  return (
    <div className="reg-page">
      <label id="palkki">
        Name:
        <input
          id="input-juttu"
          type="text"
          value={name}
          onChange={handleNameChange}
        />
      </label>
      <label id="palkki">
        Email:
        <input
          id="input-juttu"
          type="email"
          value={email}
          onChange={handleEmailChange}
        />
      </label>
      <label id="palkki">
        Password:
        <input
          id="input-juttu"
          type="password"
          value={password}
          onChange={handlePasswordChange}
        />
      </label>
    </div>
  );
};
