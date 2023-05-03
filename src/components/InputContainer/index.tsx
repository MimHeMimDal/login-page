import { useState } from "react";

type InputContainer = {
  placeholder: string;
  type: string;
  name: string;
  id: string;
  setInputValue: React.Dispatch<
    React.SetStateAction<{
      email: string;
      userName: string;
      password: string;
      confirmPassword: string;
    }>
  >;
  inputValue: {
    email: string;
    userName: string;
    password: string;
    confirmPassword: string;
  };
  pattern?: RegExp;
  message: string;
};

export function InputContainer({
  placeholder,
  name,
  id,
  type,
  inputValue,
  setInputValue,
  pattern,
  message,
}: InputContainer) {
  // const reg = new RegExp(pattern);
  const [errorMsg, setErrorMsg] = useState("");
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (name !== "confirmPassword") {
      if (e.target.value.match(pattern)) {
        setInputValue({ ...inputValue, [name]: e.target.value });
        setErrorMsg("");
      } else {
        setInputValue({ ...inputValue, [name]: "" });
        setErrorMsg(message);
      }
    } else {
      if (e.target.value === inputValue.password) {
        setInputValue({ ...inputValue, [name]: e.target.value });
        setErrorMsg("");
      } else {
        setInputValue({ ...inputValue, [name]: "" });
        setErrorMsg(message);
      }
    }
  };
  return (
    <div>
      <div
        className={`bg-white flex items-center gap-2 rounded px-2 py-1 ${
          errorMsg === "" ? "" : "border border-red-500"
        }`}
      >
        <label htmlFor={id} className="flex items-center">
          {/* <ion-icon className="text-slate-500" name="mail-outline"></ion-icon> */}
        </label>
        <input
          type={type}
          placeholder={placeholder}
          name={name}
          id={id}
          className="bg-transparent focus:outline-none"
          onChange={handleInputChange}
        />
      </div>
      <p className="h-5 text-xs text-red-500 ml-2">{errorMsg}</p>
    </div>
  );
}
