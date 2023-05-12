import { useState } from "react";
import { InputContainer } from "../InputContainer";

export function Form() {
  const [inputValue, setInputValue] = useState({
    email: "",
    userName: "",
    password: "",
    confirmPassword: "",
  });
  const handleFormSubmit = (e: React.SyntheticEvent<EventTarget>) => {
    e.preventDefault();
    let counter = 0;
    for (const key in inputValue) {
      if (inputValue[key] !== "") counter++;
    }
    if (counter === 4) {
      console.log(inputValue, "sign up was successfull");
      e.target.reset();
      setInputValue({
        email: "",
        userName: "",
        password: "",
        confirmPassword: "",
      });
    } else {
      console.log("not valid");
    }
  };
  return (
    <form
      className="bg-[#FDECF6] rounded w-1/2 max-w-[350px] px-5 py-6 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col gap-2 [&_>_*]:w-full"
      onSubmit={handleFormSubmit}
    >
      <header className="flex items-center justify-center gap-x-2 mb-5">
        <h2 className="text-[#B338CE] px-6 rounded-md py-2">Sign in</h2>
        <h2 className="text-white bg-[#7E22CE] px-6 rounded-md py-2">
          Sing up
        </h2>
      </header>
      <InputContainer
        placeholder="Email"
        name="email"
        id="email"
        type="text"
        setInputValue={setInputValue}
        inputValue={inputValue}
        pattern={/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i}
        message="Please enter a valid email address"
      />
      <InputContainer
        placeholder="Username"
        name="userName"
        id="userName"
        type="text"
        setInputValue={setInputValue}
        inputValue={inputValue}
        pattern={/^[a-zA-Z0-9]{3,15}$/}
        message="Usename should be between 3 and 15 characters"
      />
      <InputContainer
        placeholder="Password"
        name="password"
        id="password"
        type="password"
        setInputValue={setInputValue}
        inputValue={inputValue}
        pattern={/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/}
        message="Enter a strong password with at least 8 characters"
      />
      <InputContainer
        placeholder="repeat-password"
        name="confirmPassword"
        id="confirmPassword"
        type="password"
        setInputValue={setInputValue}
        inputValue={inputValue}
        message="passwords do not match"
      />
      <button className="text-white bg-[#7E22CE] px-6 rounded-md py-2">
        Sing up
      </button>
    </form>
  );
}
