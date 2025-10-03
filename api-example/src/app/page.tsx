"use client"
import { useEffect, useState } from "react";
import User, { UserProps } from "./components/user";

const API_URL = "https://api.mockrest.com";
export default function Home() {
  const [users, setUsers] = useState<UserProps[]>([]);
  const getUsers = async () => {
    try {
      const res = await fetch(`${API_URL}/users`);
      const users = await res.json();
      setUsers(users);
      localStorage.setItem("users", JSON.stringify(users));
    } catch (e) {
      alert("An error occured fetching all users");
      console.error(e);
    }
  }

  const getUser = async (id: string) => {
    try {
      const res = await fetch(`${API_URL}/users/${id}`);
      const users = await res.json();
      setUsers([users]);
    } catch (e) {
      alert("An error occured fetching all users");
      console.error(e);
    }
  }

  // const getUsersFromLocal = () => {
  //   setUsers(JSON.parse(localStorage.getItem("users") ?? "") || [])
  // }

  const createUser = async () => {
    try {
      const res = await fetch(`${API_URL}/users`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          firstName: "Tope",
          lastName: "Alabi",
          email: "hotspicyalabi@hotmail.com",
          username: "hot&spicy",
          phone: "419.666.8934",
          country: "India"
        })
      });

      const user = await res.json();
      setUsers([user]);
    } catch (e) {
      alert("An error occured fetching all users");
      console.error(e);
    }
  }
  useEffect(() => {
    (async () => {
      await getUsers();
    })()
    // getUsersFromLocal()
  }, [])
  return (
    <div className="font-sans min-h-screen flex flex-col justify-center items-center p-6">
      <User {...users[0]}/>
      <button onClick={createUser} className="px-4 py-2 border border-white rounded-xl my-2 hover:cursor-pointer">Create</button>
      
      <button onClick={() => getUser("f838cdd9-88a7-40e1-a83a-ac3216d16969")} className="px-4 py-2 border border-white rounded-xl my-2 hover:cursor-pointer">Get User</button>
    </div>
  );
}

// GET - Fetch
// PUT - Update all
// PATCH - Update only specific values
// POST - Create
// DELETE - delete

// TANSTACK QUERY
// 00000000-0000-0000-0000-000000000000