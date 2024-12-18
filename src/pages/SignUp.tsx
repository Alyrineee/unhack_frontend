import { InputBox } from "../components/InputBox";
import { Button } from "../components/Button";
import { Divider } from "../components/Divider";
import { Header } from "../components/Header";

const SignUp = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />

      <div className="flex-1 flex items-center justify-center p-4">
        <div className="bg-white w-full max-w-md shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-bold text-center mb-6">
            Create Account
          </h2>

          <form className="space-y-4">
            <InputBox type="email" placeholder="Email address" />
            <InputBox type="password" placeholder="Password" />
            <InputBox type="password" placeholder="Repeat Password" />

            <Button text="Continue" />
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
