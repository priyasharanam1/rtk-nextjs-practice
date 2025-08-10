"use client"

import { useSelector } from "react-redux";

export default function DisplayUsers() {
    const userData = useSelector((data)=>data.users)
    console.log(userData)
  return (
    <div className="display-user">
      <h1>Users list</h1>
      {
        userData.map((item)=>(
           <div key={item.id}>{item.name}</div>
        ))
      }
    </div>
  );
}
