import React, { FormEvent } from "react";
import useInput from "../hooks/useInput";
import PropTypes from "prop-types";

interface LoginInputProps {
  login: (credentials: { email: string; password: string }) => void;
}

const LoginInput: React.FC<LoginInputProps> = ({ login }) => {
  const [email, handleEmailChange] = useInput<string>("");
  const [password, handlePasswordChange] = useInput<string>("");

  const onSubmitHandler = (event: FormEvent) => {
    event.preventDefault();
    login({ email, password });
  };

  return (
      <form onSubmit={onSubmitHandler} className="login-input">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={handleEmailChange}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
        />
        <button className="login-button">Masuk</button>
      </form>
  );
};

LoginInput.propTypes = {
  login: PropTypes.func.isRequired,
};

export default LoginInput;