import { useState } from "react";
import { Link } from "react-router-dom";
import Titulo from "../../components/Titulo";

const Cadastro = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  const salvar = (e) => {
    e.preventDefault();

    const novoCadastro = {
      username: username,
      password: password,
    };
  };

  return (
    <div className="mx-auto" onSubmit={salvar}>
      <Titulo titulo="Cadastro" />

      <form className="container mt-5">
        <div className="mb-2 col-lg-6 col-md-10 col-sm-12 mx-auto">
          <input
            className="form-control"
            placeholder="Usuário"
            required
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            maxLength={12}
          />
        </div>
        <div className="mb-2 col-lg-6 col-md-10 col-sm-12 mx-auto">
          <input
            className="form-control"
            placeholder="Senha"
            required
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            maxLength={100}
          />
        </div>
        <div className="mb-2 col-lg-6 col-md-10 col-sm-12 mx-auto">
          <input
            className="form-control"
            placeholder="Repetir senha"
            required
            type="password"
            value={repeatPassword}
            onChange={(e) => setRepeatPassword(e.target.value)}
          />
        </div>
        <div className="col-lg-2 col-md-10 col-sm-12 d-grid mx-auto">
          <button className="btn btn-dark my-2">Cadastrar</button>
        </div>
      </form>
      <div className="col-lg-4 col-md-10 col-sm-12 d-flex mx-auto justify-content-center">
        <p className="d-flex justify-content-center mx-1">Já tem uma conta?</p>
        <Link to="/">Faça o login</Link>
      </div>
    </div>
  );
};

export default Cadastro;
