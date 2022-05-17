import React from "React"
import Instructions from "./Instructions"
import IngridientsList from "./IngridientsList"

export default function Recipe({ name, ingridients, steps }) {
    return (
        <section id={name.toLowerCase().replace(/ /g, "-")} >
            <h1>{name}</h1>
            <IngridientsList list={ingridients} />
            <Instructions title="Cooking instructions" steps={steps} />
        </section>
    )
}