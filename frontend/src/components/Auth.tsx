import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { BookOpen } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { LoginInput, SignupInput } from "@fahimaljadid/surge-common";
import axios from "axios";
import { BACKEND_URL } from "./../config";
// const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;


type AuthInput = SignupInput | LoginInput;

export default function Auth({ type }: { type: "signup" | "login" }) {
  const navigate = useNavigate();

  const initialState: AuthInput =
    type === "signup"
      ? { name: "", email: "", password: "" }
      : { email: "", password: "" };

  const [postInputs, setPostInputs] = useState<AuthInput>(initialState);

  const sendRequest = async () => {
    try {
      const response = await axios.post(
        `${BACKEND_URL}/api/v1/user/${type === "signup" ? "signup" : "login"}`,
        postInputs
      );
      
      const jwt = response.data.jwt;
      
      if (jwt) {
        localStorage.setItem("token", jwt);
        navigate("/blogs");
      } else {
        console.error("JWT token is missing in the response");
      }
    } catch (error) {
      alert(`Error while ${type === "signup" ? "signing up" : "logging in"}`);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <BookOpen className="h-6 w-6" />
            <span className="text-2xl font-bold">Surge</span>
          </div>
          <CardTitle className="text-2xl font-bold text-center">
            {type === "login" ? "Welcome Back" : "Create an account"}
          </CardTitle>
          <CardDescription className="text-center">
            {type === "login"
              ? "Enter your credentials below to Login"
              : "Enter your email below to create your account"}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="space-y-4">
              {type === "signup" ? (
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    placeholder="John Doe"
                    onChange={(e) =>
                      setPostInputs({
                        ...postInputs,
                        name: e.target.value,
                      })
                    }
                    required
                  />
                </div>
              ) : null}
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  onChange={(e) =>
                    setPostInputs({
                      ...postInputs,
                      email: e.target.value,
                    })
                  }
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  onChange={(e) =>
                    setPostInputs({
                      ...postInputs,
                      password: e.target.value,
                    })
                  }
                  required
                />
              </div>
              <Button onClick={sendRequest} type="button" className="w-full">
                {type === "login" ? "Login" : "Sign Up"}
              </Button>
            </div>
          </form>
        </CardContent>
        <CardFooter>
          <p className="text-center text-sm text-gray-600 mt-2">
            {type === "login"
              ? "Don't have an account?"
              : "Already have an account?"}{" "}
            <Link
              to={type === "login" ? "/signup" : "/login"}
              className="text-blue-600 hover:underline"
            >
              {type === "login" ? "Sign Up" : "Login"}
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}
