export const Balanace = ({ value }) => {
  return (
    <div className="flex pl-6 pt-5">
      <div className="font-bold text-lg">Your Balance</div>
      <div className="font-semibold text-lg">{value}</div>
    </div>
  );
};
