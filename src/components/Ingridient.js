import React from "React"

export default function Ingrdient({ amount, measurement, name }) {
    return (
        <li>
            {amount} {measurement} {name}
        </li>
    )
}