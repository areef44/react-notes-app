import React, { FormEvent } from "react";
import PropTypes from "prop-types";
import useInput from "../hooks/useInput";

interface RegisterInputProps {
  register: (userData: { name: string; email: string; password: string }) => void;
}

const RegisterInput: React.FC<RegisterInputProps> = ({ register }) => {
  const [name, handleNameChange] = useInput<string>("");
  const [email, handleEmailChange] = useInput<string>("");
  const [password, handlePasswordChange] = useInput<string>("");

  const onSubmitHandler = (event: FormEvent) => {
    event.preventDefault();

    register({
      name,
      email,
      password,
    });
  };

  return (
    <form onSubmit={onSubmitHandler} className="register-input">
      <input
        type="text"
        placeholder="Nama"
        value={name}
        onChange={handleNameChange}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={handleEmailChange}
      />
      <input
        type="password"
        placeholder="Password"
        autoComplete="current-password"
        value={password}
        onChange={handlePasswordChange}
      />
      <button type="submit">Register</button>
    </form>
  );
};

RegisterInput.propTypes = {
  register: PropTypes.func.isRequired,
};

export default RegisterInput;