"use client"

import { useState } from "react";
import { addUser } from "../redux/slice";
import { useDispatch } from "react-redux";

export default function AddUsers() {
    const [name, setName] = useState("");
    const dispatch = useDispatch()

    const userDispatch=()=>{
        // console.log(name)
        dispatch(addUser(name))
    }
  return (
    <div className="add-user">
      <h1>Add Users</h1>
      <input onChange={(e)=>setName(e.target.value)} type="text" placeholder="Add new user" />
      <button onClick={userDispatch}>Add User</button>
    </div>
  );
}
