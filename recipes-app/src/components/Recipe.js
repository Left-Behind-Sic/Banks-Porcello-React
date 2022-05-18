import React from "react"
import Instructions from "./Instructions"
import IngredientsList from "./IngredientsList"
import StarRating from "./star/StarRating"

export default function Recipe({ name, ingredients, steps }) {
    return (
        <section id={name.toLowerCase().replace(/ /g, "-")} >
            <h1>{name}</h1>
            <IngredientsList list={ingredients} />
            <Instructions title="Cooking instructions" steps={steps} />
            <StarRating />
        </section>
    )
}