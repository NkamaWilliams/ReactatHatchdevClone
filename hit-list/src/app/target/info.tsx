"use client"

import { FormEvent, FormEventHandler, useState } from "react";
import { FieldValue, FieldValues, SubmitHandler, useForm } from "react-hook-form";

interface LastSeen {
  date?: Date,
  location?: string
}

export default function Info() {
  // const [name, setName] = useState<string>("");
  // const [address, setAddress] = useState<string>("");
  // const [appearance, setAppearance] = useState<string>("");
  // const [affiliation, setAffiliation] = useState<string>("");
  // const [gender, setGender] = useState<string>("");
  // const [notes, setNotes] = useState<string>("");
  // // const [lastSeen, setLastSeen] = useState<LastSeen>({});
  // const [age, setAge] = useState<number>(0);
  // const [armed, setArmed] = useState<boolean>(false);

  const { register, formState, handleSubmit } = useForm()
  const nameError = formState.errors["name"];
  const addressError = formState.errors["address"];

  const handleValidation: SubmitHandler<FieldValues> = (e: FieldValues) => {
  //   e.preventDefault();
  //   if (!/^[a-zA-Z]{3,100}\s+[a-zA-Z]{3,100}$/.test(name)) {
  //     alert("Boss, put in a real name!");
  //     return;
  //   }
  //   if (gender.toLowerCase() != "male" && gender.toLowerCase() != "female") {
  //     // console.log(gender);
  //     alert("Input a valid gender");
  //     return;
  //   }
  //   localStorage.setItem("info", JSON.stringify({
  //     name,
  //     address,
  //     affiliation,
  //     age,
  //     gender,
  //     notes
  //   }))
    
    console.log(e)
  }
  return (
    <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start mx-auto">
      <form onSubmit={handleSubmit(handleValidation)} className="flex flex-col w-sm">
        <input 
          className="border-white border my-2 p-2 rounded-lg block w-full"
          type="text" 
          placeholder="Full Name"
          {...register("name", {
            required: "We need your name!",
            validate: (val) => {
              if (!/^[a-zA-Z]{3,100}\s+[a-zA-Z]{3,100}$/.test(val)) {
                return "Boss, put in a real name!";
              }
            }
          })}
        />

        <input 
          className="border-white border my-2 p-2 rounded-lg block w-full"
          type="text" 
          placeholder="Address"
          {...register("address", {
            required: "Error here",
          })}
        />

        <p className="text-red-500">{nameError?.message?.toString() ?? ""}</p>
        <p className="text-red-500">{addressError?.message?.toString() ?? ""}</p>

        <button type="submit" className="my-4 px-6 py-2 text-2xl bg-white text-black hover:bg-gray-600 hover:text-white hover:cursor-pointer transition-all duration-300 active:scale-95 font-semibold rounded-2xl">Set Target!</button>
      </form>
    </main>
  );
}

// Full name
// Age
// Address
// Appearance
// Gender
// Last seen
// Affiliation
// isArmed
// Notes