import React from "react";
import { useState, memo, useCallback } from "react";

const Cat = memo(({ name, meow = (f) => f }) => {
    console.log(`rendering ${name}`);
    return <p onClick={() => meow(name)}>{name}</p>;
});
const PureCat = memo(Cat);

export default function Cats() {
    // const [cats, setCats] = useState(["Biscuit", "Jungle", "Outlaw"]);
    const meow = useCallback((name) => console.log(`${name} has meowed`), []);
    const formData = new FormData();
    formData.append("username", "moontahoe");
    formData.append("fullname", "Alex Banks");
    formData.append("avatar", "imgFile");

    fetch("/create/user", {
        method: "POST",
        body: formData,
    });

    return (
        <div>
            <PureCat name="Biscuit" meow={meow} />

            {/* <button onClick={() => setCats([...cats, prompt("Name a cat")])}>
                Add cat
            </button> */}
        </div>
    );
}
