import { InputBox } from "../components/InputBox";
import { Button } from "../components/Button";
import { Divider } from "../components/Divider";
import { Header } from "../components/Header";
import axios from "axios";
import {useState} from "react";




const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLoginForm = () => {
    axios.post("http://127.0.0.1:8000/api/token/", {
      email: email,
      password: password,
    }).then(
        (response) => {
          if (response.status === 200) {
            localStorage.setItem("accessToken", response.data.access);
            localStorage.setItem("refreshToken", response.data.refresh);
          }
        }
    ).catch(error => console.error(error))
  }
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center p-4">
        <div className="bg-white w-full max-w-md shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-bold text-center mb-6">Welcome back</h2>

          <form className="space-y-4">
            <InputBox  type="email" placeholder="Email address" onChange={(e: any) => setEmail(e.target.value)}/>
            <InputBox type="password" placeholder="Password" onChange={(e: any) => setPassword(e.target.value)}/>

            <Button text="Continue" onClick={handleLoginForm}/>
            <div className="text-center text-sm text-gray-500">
              Don't have an account?{" "}
              <a href="/sign_up" className="text-purple-600 hover:underline" >
                Sign up
              </a>
            </div>

            <Divider />

            <Button text="Continue with GitHub" variant="secondary" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
