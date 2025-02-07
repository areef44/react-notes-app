import React, { FormEvent, useContext } from "react";
import PropTypes from "prop-types";
import useInput from "../hooks/useInput";
import LocaleContext from "../contexts/LocaleContext";

interface RegisterInputProps {
  register: (userData: { name: string; email: string; password: string }) => void;
}

const RegisterInput: React.FC<RegisterInputProps> = ({ register }) => {
  const { localeContext } = useContext(LocaleContext);
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
    <form onSubmit={onSubmitHandler} className="login-input">
      <input
        type="text"
        placeholder={localeContext === 'id' ? 'Input your name..' : 'Masukan nama kamu..'}
        value={name}
        onChange={handleNameChange}
      />
      <input
        type="email"
        placeholder={localeContext === 'id' ? 'Input your email..' : 'Masukan email kamu..'}
        value={email}
        onChange={handleEmailChange}
      />
      <input
        type="password"
        placeholder={localeContext === 'id' ? 'Input your password..' : 'Masukan password kamu..'}
        autoComplete="current-password"
        value={password}
        onChange={handlePasswordChange}
      />
      <button type="submit" className="login-button">{localeContext === 'id' ? 'Register Now' : 'Daftar Sekarang'}</button>
    </form>
  );
};

RegisterInput.propTypes = {
  register: PropTypes.func.isRequired,
};

export default RegisterInput;