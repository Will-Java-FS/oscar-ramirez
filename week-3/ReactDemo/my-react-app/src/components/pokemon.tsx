import { useState } from 'react';
import axios from "axios";

type Pokemon = {
    name: string;
    url: string;
}

export default function Pokemon() {

    const [pokemons, setPokemons] = useState<Pokemon[]>();

    //asynchronous function to connect to our base endpoint
    const getData = async () => {

        //axios will return a response with our function
        const response = await axios.get(
            "https://pokeapi.co/api/v2/pokemon?limit=30"
        );

        //the response is stored as data, so anything must be accessed using response.data
        setPokemons(response.data.results);
    };



    return (
        <>
            <table>
                <tr>
                    <th>Index</th>
                    <th>Name</th>
                    <th>Link</th>
                </tr>
                <tbody>
                    {pokemons && pokemons.map &&
                        pokemons.map(
                            (pokemon: Pokemon, index: number) => (
                                <tr key={pokemon.name} >
                                    <td>{index}</td>
                                    <td>{pokemon.name}</td>
                                    <td>{pokemon.url}</td>
                                </tr>
                            )
                        )
                    }
                </tbody>
            </table>
            <button onClick={getData}>Get Pokemon!</button>
        </>
    )
}