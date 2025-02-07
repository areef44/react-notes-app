import React, { useContext } from "react";
import { Link } from "react-router-dom";
import LoginInput from "../components/LoginInput";
import { login, LoginParams } from "../utils/api";
import LocaleContext from "../contexts/LocaleContext";

interface LoginPageProps {
  loginSuccess: (data: any) => void;
}

const LoginPage: React.FC<LoginPageProps> = ({ loginSuccess }) => {
  const { localeContext } = useContext(LocaleContext);
  const onLogin = async (user: LoginParams) => {
    const { error, data } = await login(user);
    if (!error) {
      loginSuccess(data);
    }
  };

  return (
    <div className="login-page">
      <section className="container-login">
        <div className="text-title-container">
          <h1>{localeContext === 'id' ? 'Sign In' : 'Masuk'}</h1>
        </div>
        <p>{localeContext === 'id' ? 'Please log in to continue' : 'Silakan masuk untuk melanjutkan' }</p>
        <LoginInput login={onLogin} />
        <div className="text-container">
          <p>
            {localeContext === 'id' ? 'Dont have an account yet?' : 'Belum punya akun?' } <Link to="/register">{localeContext === 'id' ? 'Register here.' : 'Daftar di sini.' }</Link>
          </p>
        </div>
      </section>
    </div>
  );
};

export default LoginPage;