import React from "react";

class Poke extends React.Component {
    render(){
        const { name, type, averageWeight, image } = this.props.pokemonData;
        return (
            <section className="secao">
                <div className="paragraph">
                    <p>{name}</p>
                    <p>{type}</p>
                    <p>{averageWeight.value + averageWeight.measurementUnit}</p>
                </div>
                <img src={image} alt="" />
            </section>
        )
    }
}

export default Poke;