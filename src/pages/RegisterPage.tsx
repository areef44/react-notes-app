import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import RegisterInput from "../components/RegisterInput";
import { register, RegisterParams } from "../utils/api";
import LocaleContext from "../contexts/LocaleContext";

const RegisterPage: React.FC = () => {
  const { localeContext } = useContext(LocaleContext);
  const navigate = useNavigate();
  const onRegisterHandler = async (user: RegisterParams): Promise<void> => {
    const { error } = await register(user);
    if (!error) {
      navigate("/");
    }
  };

  return (
    <div className="login-page">
      <section className="container-register">
        <div className="text-title-container">
          <h1>{localeContext === "id" ? 'Register Page' : "Halaman Register" }</h1>
        </div>
        <p>{localeContext === "id" ? 'Register your account here' : "Daftar akun kamu disini" }</p>
        <RegisterInput register={onRegisterHandler} />
        <div className="text-container">
          <p>
          {localeContext === 'id' ? 'Back to' : 'Kembali ke?' } <Link to="/">{localeContext === 'id' ? 'Login page.' : 'Halaman login.' }</Link>
          </p>
        </div>
      </section>
    </div>
  );
};

export default RegisterPage;
