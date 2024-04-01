import { Heading } from "../components/Heading";
import { useSearchParams } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export const SendMoney = () => {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");
  const name = searchParams.get("name");
  const [amount, setAmount] = useState(0);

  return (
    <div className="bg-slate-300 h-screen flex justify-center">
      <div className="flex flex-col justify-center">
        <div className="bg-white rounded-lg w-80 h-max text-center p-3">
          <Heading name={"Send Money"} />

          <div className="flex pt-14">
            <div className="rounded-full w-12 h-12 bg-green-500 flex justify-center mt-1 mr-2">
              <div className="flex flex-col justify-center h-full text-xl">
                {name[0]}
              </div>
            </div>
            <div className="flex flex-col justify-center h-full mr-4 font-medium pt-3 pl-3">
              {name}
            </div>
          </div>
          <p className="flex flex-start pt-2">Amount (in Rs)</p>
          <div className="pt-2">
            <input
              onChange={(e) => {
                setAmount(e.target.value);
              }}
              placeholder="Enter amount"
              className="border border-slate-500 w-full "
            />
          </div>
          <div className="pt-4">
            <button
              onClick={() => {
                axios.post(
                  "http://localhost:4000/api/v1/account/transfer",
                  {
                    to: id,
                    amount,
                  },
                  {
                    headers: {
                      Authorization: "Bearer " + localStorage.getItem("token"),
                    },
                  }
                );
              }}
              className="justify-center rounded-md text-sm font-medium h-10 px-4 py-2 w-full bg-green-500 text-white"
            >
              Initiate Transfer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
