export const InputBox = ({ text, placeholder, onChange }) => {
  return (
    <div>
      <div className="text-sm font-medium text-left py-2">{text}</div>
      <input
        onChange={onChange}
        placeholder={placeholder}
        className=" w-full px-2 border rounded border-slate-400  "
      />
    </div>
  );
};
