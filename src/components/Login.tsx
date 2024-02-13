import { Link } from "react-router-dom";
import Button from "./Button";
import apiClient from "../lib/apiClient";
import { useState } from "react";

function Login() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    if (!name || !password) return;
    await apiClient
      .post("/accounts/login", {
        login: name,
        password,
      })
      .then(() => {
        localStorage.setItem("user", name);
      })
      .catch((e) => console.log(e));
  };

  const createAccount = async () => {
    if (!name || !password) return;
    await apiClient
      .post("/accounts/register", {
        params: {
          login: name,
          password,
          passwordConfirm: password,
        },
      })
      .then(() => console.log("DONE CREATION"))
      .catch((e) => console.log(e));
  };

  return (
    <div className="flex flex-col items-center justify-center gap-8">
      <h1 className="text-4xl mt-10">Kaizntree</h1>

      {/* login fields */}
      <div className="flex flex-col gap-5">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Username"
          className="input-field"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="input-field"
        />
      </div>

      {/* buttons */}
      <div className="flex gap-14">
        <Button onClick={createAccount} title="Create Account" />
        <Button onClick={handleLogin} title="Log In" />
      </div>

      {/* forgot pass */}
      <Link
        to="/hello"
        className="text-blue-500 hover:underline mr-48 tracking-wide font-thin"
      >
        Forgot Password
      </Link>
    </div>
  );
}

export default Login;
