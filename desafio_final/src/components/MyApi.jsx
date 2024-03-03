import { useEffect } from "react";
import Card from "react-bootstrap/Card";

const MyApi = ({ setCharacters, filteredData }) => {
    // function that brings the information from the API
    const getCharacters = async () => {
        try {
            const url = "https://pokeapi.co/api/v2/pokemon?limit=200";
            
            const response = await fetch(url);
            const data = await response.json();
            const api = data.results
                .map((e) => {
                    return {
                        id: e.url.split("/")[6], // Extracting id from the URL
                        name: e.name,
                       
                    
                    };
                })
                .sort((a, b) => a.name.localeCompare(b.name));
            setCharacters(api);
        } catch (error) {
            console.log("Couldn't get the API information", error);
        }
    };

    useEffect(() => {
        getCharacters();
    }, []);

    return (
        <>
            <main>
                {filteredData.map((character) => (
                    <section key={character.id} className="container-pokemons">
                        <Card className="card">
                            <Card.Img
                                variant="top"
                                src={`
                                https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${character.id}.png
                                `}
                                alt={character.name}
                            />
                            <Card.Body className="cardBody">
                                <Card.Title>
                                    <h2>{character.id}</h2>
                                </Card.Title>
                                <Card.Text>
                                    <strong id="name">Nombre:</strong>{" "}
                                    {character.name}
                                </Card.Text>
                                
                            </Card.Body>
                        </Card>
                    </section>
                ))}
            </main>
        </>
    );
};

export default MyApi;