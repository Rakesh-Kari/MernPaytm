import { Heading } from "../components/Heading";
import { InputBox } from "../components/InputBox";
import { Subheading } from "../components/Sub_Heading";
import { Button } from "../components/Button";
import { BottomWarning } from "../components/BottomWarning";

export const Signin = () => {
  return (
    <div className="bg-slate-300 h-screen flex justify-center">
      <div className="flex flex-col justify-center">
        <div className="bg-white rounded-lg w-80 h-max text-center p-3">
          <Heading name={"Sign In"} />
          <Subheading name={"Enter your credentials to access your account"} />
          <InputBox placeholder="johndoe@example.com" text={"Email"} />
          <InputBox placeholder="123456" text={"Password"} />
          <div className="pt-4">
            <Button label={"Sign In"} />
          </div>
          <BottomWarning
            label={"Don't have an account?"}
            buttonText={"Sign Up"}
            to={"/signup"}
          />
        </div>
      </div>
    </div>
  );
};
