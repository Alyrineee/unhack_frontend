import { InputBox } from "../components/InputBox";
import { Button } from "../components/Button";
import { Header } from "../components/Header";
import Footer from "../components/Footer";

const ResetPassword = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center p-4">
        <div className="bg-white w-full max-w-md shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-bold text-center mb-6">Reset password</h2>

          <form className="space-y-4">
            <InputBox type="password" placeholder="Password" />
            <InputBox type="password" placeholder="Repeat Password" />

            <Button text="Continue" />
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ResetPassword;
