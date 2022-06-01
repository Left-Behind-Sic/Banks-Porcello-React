import React from "react";
import { useReducer } from "react";

export default function User() {
    const firstUser = {
        id: "0391-3233-3201",
        firstName: "Bill",
        lastName: "Wilson",
        city: "Missoula",
        state: "Montana",
        email: "bwilson@mtnwilsons.com",
        admin: false,
    };
    const [user, setUser] = useReducer(
        (user, newDetails) => ({ ...user, ...newDetails }),
        firstUser
    );
    return (
        <div>
            <h1>
                {user.firstName} {user.lastName} -{" "}
                {user.admin ? "Admin" : "user"}
            </h1>
            <p>Email: {user.email}</p>
            <p>
                Location: {user.city}, {user.state}
            </p>
            <button onClick={() => setUser({ admin: true })}>Make admin</button>
        </div>
    );
}