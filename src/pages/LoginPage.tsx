import React from "react";
import { Link } from "react-router-dom";
import LoginInput from "../components/LoginInput";
import { login, LoginParams } from "../utils/api";

interface LoginPageProps {
  loginSuccess: (data: any) => void;
}

const LoginPage: React.FC<LoginPageProps> = ({ loginSuccess }) => {
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
          <h1>Sign In</h1>
        </div>
        <p>Silakan masuk untuk melanjutkan</p>
        <LoginInput login={onLogin} />
        <div className="text-container">
          <p>
            Belum punya akun? <Link to="/register">Daftar di sini.</Link>
          </p>
        </div>
      </section>
    </div>
  );
};

export default LoginPage;