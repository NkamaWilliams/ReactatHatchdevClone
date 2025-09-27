"use client"

import { FormEvent, FormEventHandler, useState } from "react";

interface LastSeen {
  date?: Date,
  location?: string
}

export default function Info() {
  const [name, setName] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [appearance, setAppearance] = useState<string>("");
  const [affiliation, setAffiliation] = useState<string>("");
  const [gender, setGender] = useState<string>("");
  const [notes, setNotes] = useState<string>("");
  // const [lastSeen, setLastSeen] = useState<LastSeen>({});
  const [age, setAge] = useState<number>(0);
  const [armed, setArmed] = useState<boolean>(false);

  const handleValidation = (e: FormEvent) => {
    e.preventDefault();
    if (!/^[a-zA-Z]{3,100}\s+[a-zA-Z]{3,100}$/.test(name)) {
      alert("Boss, put in a real name!");
      return;
    }
    if (gender.toLowerCase() != "male" && gender.toLowerCase() != "female") {
      // console.log(gender);
      alert("Input a valid gender");
      return;
    }
    localStorage.setItem("info", JSON.stringify({
      name,
      address,
      affiliation,
      age,
      gender,
      notes
    }))
  }
  return (
    <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start mx-auto">
      <form onSubmit={handleValidation} className="flex flex-col w-sm">
        <input 
          className="border-white border my-2 p-2 rounded-lg block w-full"
          type="text" 
          value={name} 
          name="fullname" 
          placeholder="Full Name"
          required
          onChange={e => setName(e.target.value)}
        />

        <input 
          className="border-white border my-2 p-2 rounded-lg block w-full"
          type="text" 
          value={address} 
          name="address" 
          placeholder="Address"
          onChange={e => setAddress(e.target.value)}
        />

        <input 
          className="border-white border my-2 p-2 rounded-lg block w-full"
          type="text" 
          value={appearance} 
          name="appearance" 
          placeholder="Appearance"
          onChange={e => setAppearance(e.target.value)}
        />

        <input 
          className="border-white border my-2 p-2 rounded-lg block w-full"
          type="text" 
          value={affiliation} 
          name="affiliation" 
          placeholder="Affiliation"
          onChange={e => setAffiliation(e.target.value)}
        />

        <input 
          className="border-white border my-2 p-2 rounded-lg block w-full"
          type="text" 
          value={gender} 
          name="gender" 
          placeholder="Gender"
          onChange={e => setGender(e.target.value)}
        />

        <input 
          className="border-white border my-2 p-2 rounded-lg block w-full"
          type="text" 
          value={notes} 
          name="notes" 
          placeholder="Notes"
          onChange={e => setNotes(e.target.value)}
        />

        <input 
          className="border-white border my-2 p-2 rounded-lg block w-full"
          type="number" 
          value={age} 
          name="age" 
          placeholder="Age e.g. 20"
          onChange={e => setAge(parseInt(e.target.value))}
        />

        <label htmlFor="true-armed">True</label>
        <input id="true-armed" type="radio" onClick={e => setArmed(true)} name="armed" />
        <label htmlFor="false-armed">False</label>
        <input id="false-armed" type="radio" onClick={e => setArmed(false)} name="armed" />

        <button className="my-4 px-6 py-2 text-2xl bg-white text-black hover:bg-gray-600 hover:text-white hover:cursor-pointer transition-all duration-300 active:scale-95 font-semibold rounded-2xl">Set Target!</button>
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