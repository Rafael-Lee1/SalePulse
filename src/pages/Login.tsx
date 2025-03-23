
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would handle authentication here
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-[#30313A] flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-[#171821] rounded-xl p-8 shadow-lg">
        <div className="mb-6 text-center">
          <svg
            width="38"
            height="10"
            viewBox="0 0 38 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="mx-auto mb-2"
          >
            <circle cx="5" cy="5" r="5" fill="#EA1701" />
            <circle cx="19" cy="5" r="5" fill="#FEB002" />
            <circle cx="33" cy="5" r="5" fill="#029F04" />
          </svg>
          <h1 className="text-2xl font-bold text-white mt-4">Welcome Back</h1>
          <p className="text-[#87888C] mt-2">Login to your account</p>
        </div>
        
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-white mb-1">
              Email
            </label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="w-full bg-[#21222D] border-none text-white"
            />
          </div>
          
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-white mb-1">
              Password
            </label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
              className="w-full bg-[#21222D] border-none text-white"
            />
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input 
                id="remember"
                type="checkbox"
                className="h-4 w-4 bg-[#21222D] border-none rounded text-[#A9DFD8] focus:ring-[#A9DFD8]"
              />
              <label htmlFor="remember" className="ml-2 block text-sm text-[#87888C]">
                Remember me
              </label>
            </div>
            <a href="#" className="text-sm text-[#A9DFD8] hover:underline">
              Forgot password?
            </a>
          </div>
          
          <Button 
            type="submit" 
            className="w-full bg-[#A9DFD8] text-[#171821] hover:bg-[#8FCDC5] transition-colors"
          >
            Sign In
          </Button>
        </form>
        
        <div className="mt-6 text-center text-sm text-[#87888C]">
          Don't have an account?{" "}
          <a href="#" className="text-[#A9DFD8] hover:underline">
            Sign up
          </a>
        </div>
      </div>
    </div>
  );
}
