import React, { FormEvent, useContext } from "react";
import useInput from "../hooks/useInput";
import PropTypes from "prop-types";
import LocaleContext from "../contexts/LocaleContext";

interface LoginInputProps {
  login: (credentials: { email: string; password: string }) => void;
}

const LoginInput: React.FC<LoginInputProps> = ({ login }) => {
  const { localeContext } = useContext(LocaleContext);
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
          placeholder={localeContext === 'id' ? 'Input your email..' : 'Masukan email kamu..'}
          value={email}
          onChange={handleEmailChange}
        />
        <input
          type="password"
          placeholder={localeContext === 'id' ? 'Input your password..' : 'Masukan password kamu..'}
          value={password}
          onChange={handlePasswordChange}
        />
        <button className="login-button">{localeContext === 'id' ? 'Login' : 'Masuk'}</button>
      </form>
  );
};

LoginInput.propTypes = {
  login: PropTypes.func.isRequired,
};

export default LoginInput;