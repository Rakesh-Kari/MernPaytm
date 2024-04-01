import { useState } from "react";
import { BottomWarning } from "../components/BottomWarning";
import { Button } from "../components/Button";
import { Heading } from "../components/Heading";
import { InputBox } from "../components/InputBox";
import { Subheading } from "../components/Sub_Heading";
import axios from "axios";

export const Signup = () => {
  const [firstname, setfirstName] = useState("");
  const [lastname, setlastName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="bg-slate-300 h-screen flex justify-center">
      <div className="flex flex-col justify-center">
        <div className="bg-white rounded-lg w-80 h-max text-center px-5 py-5">
          <Heading name={"Signup"} />
          <Subheading name={"Enter your information to create an account"} />
          <InputBox
            onChange={(e) => {
              setfirstName(e.target.value);
            }}
            placeholder="John"
            text="First Name"
          />
          <InputBox
            onChange={(e) => {
              setlastName(e.target.value);
            }}
            placeholder="Doe"
            text="Last Name"
          />
          <InputBox
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            placeholder="ramalexx190@gamil.com"
            text="Email"
          />
          <InputBox
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            placeholder="123456"
            text="Password"
          />
          <div className="pt-4">
            <Button
              onClick={async () => {
                const response = await axios.post(
                  "http://localhost:4000/api/v1/user/signup",
                  {
                    username,
                    firstname,
                    lastname,
                    password,
                  }
                );
                localStorage.setItem("token", response.data.token);
              }}
              label={"Sign up"}
            />
          </div>
          <BottomWarning
            label={"Already have an account?"}
            buttonText={"Sign in"}
            to={"/signin"}
          />
        </div>
      </div>
    </div>
  );
};
