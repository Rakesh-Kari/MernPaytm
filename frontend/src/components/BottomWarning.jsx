import { Link } from "react-router-dom";

export const BottomWarning = ({ label, to, buttonText }) => {
  return (
    <div className="text-sm flex justify-center">
      <div>{label}</div>
      <Link className="pl-2 pointer underline cursor-pointer" to={to}>
        {buttonText}
      </Link>
    </div>
  );
};
