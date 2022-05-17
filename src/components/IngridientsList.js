import React from 'react'
import Ingrdient from './Ingridient'

export default function IngridientsList({ list }) {
    return (
        <ul>
            {list.map((ingridient, i) => (
                <Ingrdient key={i} {...ingridient} />
            ))}
        </ul>
    )
}