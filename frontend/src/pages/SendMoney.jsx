import { Heading } from "../components/Heading";

export const SendMoney = () => {
  return (
    <div className="bg-slate-300 h-screen flex justify-center">
      <div className="flex flex-col justify-center">
        <div className="bg-white rounded-lg w-80 h-max text-center p-3">
          <Heading name={"Send Money"} />

          <div className="flex pt-14">
            <div className="rounded-full w-12 h-12 bg-green-500 flex justify-center mt-1 mr-2">
              <div className="flex flex-col justify-center h-full text-xl">
                A
              </div>
            </div>
            <div className="flex flex-col justify-center h-full mr-4 font-medium pt-3 pl-3">
              Friend's Name
            </div>
          </div>
          <p className="flex flex-start pt-2">Amount (in Rs)</p>
          <div className="pt-2">
            <input
              placeholder="Enter amount"
              className="border border-slate-500 w-full "
            />
          </div>
          <div className="pt-4">
            <button class=" rounded-md text-sm font-medium  h-10 px-4 py-2 w-full bg-green-500 text-white">
              Initiate Transfer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
