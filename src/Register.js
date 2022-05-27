import React, { useState } from "react";
import env from "react-dotenv";
import swal from "sweetalert";
const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const Submitdata = (e) => {
    e.preventDefault();
    //console.log(username, email, password);
    var data = {
      username: username,
      email: email,
      password: password,
    };
    fetch('http://localhost:1337/api/auth/local/register', {
      method: "POST",
      headers: {
        'Content-Type': "application/json"
      },
      body: JSON.stringify(data)
    })
      .then((response) => {
        console.log(response);
      
        response.json();
      })
      .then((data) => {
        //localStorage.setItem("userInfo", JSON.stringify(data));
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  return (
    <div className="row">
      <div className="col-6 offset-3">
        <form className="">
          <h1 className="text-center">Registation Form</h1>
          <input
            type="text"
            className="form-control"
            name="username"
            placeholder="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <br />
          <input
            type="email"
            className="form-control"
            name="email"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <input
            type="password"
            className="form-control"
            name="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />

          <div className="d-grid gap-2">
            <button
              className="btn btn-primary"
              onClick={Submitdata}
              type="button"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
