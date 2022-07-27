import React, { useState } from "react";

export default function Login(){
    const [firstName, setFirstName] = useState("first name");
    const [lastName, setLastName] = useState("last name");
    const [email, setEmail] = useState("email");
    const [password, setPassword] = useState("password");
    
    return(
        <form>
            <input type="text" value={firstName} />
            <input type="text" value={lastName} />
            <input type="email" value={email} />
            <input type="password" value={password} />
            <button type="submit">Submit</button>
        </form>
    )
}