import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { InputBox } from "../components/InputBox";
import { Button } from "../components/Button";
import { Divider } from "../components/Divider";
import { Header } from "../components/Header";
import apiClient from "../apiClient";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [nickname, setNickname] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [errors, setErrors] = useState({
    email: "",
    name: "",
    nickname: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
  });

  const navigate = useNavigate();

  const validateForm = () => {
    const newErrors = {
      email: "",
      name: "",
      nickname: "",
      phoneNumber: "",
      password: "",
      confirmPassword: "",
    };
    let isValid = true;

    if (!email) {
      newErrors.email = "Email is required.";
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Invalid email format.";
      isValid = false;
    }

    if (!name) {
      newErrors.name = "Name is required.";
      isValid = false;
    }

    if (!nickname) {
      newErrors.nickname = "Nickname is required.";
      isValid = false;
    }

    if (!phoneNumber) {
      newErrors.phoneNumber = "Phone number is required.";
      isValid = false;
    }

    if (!password) {
      newErrors.password = "Password is required.";
      isValid = false;
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters.";
      isValid = false;
    }

    if (!confirmPassword) {
      newErrors.confirmPassword = "Please confirm your password.";
      isValid = false;
    } else if (password !== confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match.";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      const response = await apiClient.post("/api/user/create/", {
        email,
        name,
        nickname,
        phone_number: phoneNumber,
        is_organizer: false,
        is_participant: true,
        password,
      });

      if (response.status === 201) {
        navigate("/login");
      }
    } catch (error: any) {
      console.error("Registration failed:", error.response?.data || error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />

      <div className="flex-1 flex items-center justify-center p-4">
        <div className="bg-white w-full max-w-md shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-bold text-center mb-6">
            Create Account
          </h2>

          <form className="space-y-4" onSubmit={handleSignUp}>
            <InputBox
              type="email"
              placeholder="Email address"
              onChange={(e) => setEmail(e.target.value)}
              error={errors.email}
            />
            <InputBox
              type="text"
              placeholder="Full Name"
              onChange={(e) => setName(e.target.value)}
              error={errors.name}
            />
            <InputBox
              type="text"
              placeholder="Nickname"
              onChange={(e) => setNickname(e.target.value)}
              error={errors.nickname}
            />
            <InputBox
              type="text"
              placeholder="Phone Number"
              onChange={(e) => setPhoneNumber(e.target.value)}
              error={errors.phoneNumber}
            />
            <InputBox
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              error={errors.password}
            />
            <InputBox
              type="password"
              placeholder="Confirm Password"
              onChange={(e) => setConfirmPassword(e.target.value)}
              error={errors.confirmPassword}
            />

            <Button text="Continue" type="submit" />
            <div className="text-center text-sm text-gray-500">
              Already have an account?{" "}
              <a href="/login" className="text-purple-600 hover:underline">
                Login
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

export default SignUp;
