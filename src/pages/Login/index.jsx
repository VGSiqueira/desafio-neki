import { useState } from "react";
import { Link } from "react-router-dom";
import Titulo from "../../components/Titulo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [value, setValue] = useState(true);

  const showPassword = () => {
    setValue(!value);
  };

  const login = (e) => {
    e.preventDefault();
    const user = {
      user: username,
      pass: password,
    };
  };

  return (
    <div className="mx-auto">
      <Titulo titulo="Login" />

      <form className="container mt-5" onSubmit={login}>
        <div className="mb-3 col-lg-4 col-md-10 col-sm-12 mx-auto">
          <input
            className="form-control"
            required
            type="text"
            placeholder="Usuário"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="mb-3 col-lg-4 col-md-10 col-sm-12 mx-auto d-flex">
          <input
            className="form-control"
            required
            type={value ? "password" : "text"}
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="my-auto" onClick={showPassword}>
            {value ? (
              <FontAwesomeIcon icon={faEye} className="fa ms-2" />
            ) : (
              <FontAwesomeIcon icon={faEyeSlash} className="fa ms-2" />
            )}
          </div>
        </div>
        <div className="col-lg-4 col-md-10 col-sm-12 d-grid mx-auto">
          <button className="btn btn-dark my-2">Entrar</button>
        </div>
      </form>
      <div className="col-lg-4 col-md-10 col-sm-12 d-flex mx-auto justify-content-center">
        <p className="d-flex justify-content-center mx-1">Não tem uma conta?</p>
        <Link to="/cadastro">Cadastre-se</Link>
      </div>
    </div>
  );
};

export default Login;
