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
    <section className="login-page">
      <h2>Silakan masuk untuk melanjutkan ...</h2>
      <LoginInput login={onLogin} />
      <p>
        Belum punya akun? <Link to="/register">Daftar di sini.</Link>
      </p>
    </section>
  );
};

export default LoginPage;