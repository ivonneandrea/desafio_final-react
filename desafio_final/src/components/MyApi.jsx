import { useEffect } from "react";
import Card from "react-bootstrap/Card";

const MyApi = ({ setCharacters, filteredData }) => {
    // function that brings the information from the API
    const getCharacters = async () => {
        try {
            const url = "https://api.sampleapis.com/simpsons/characters";
            
            const response = await fetch(url);
            const data = await response.json();
            const api = data.results
                .map((e) => {
                    return {
                        
                        name: e.name,
                        normalized_name: e.normalized_name,
                        gender: e.gender,
                    
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
                {filteredData.map((character, e) => (
                    <section key={e}>
                        <Card className="card">
                            <Card.Img
                                variant="top"
                                src={character.id}
                                alt={character.name}
                            />
                            <Card.Body className="cardBody">
                                <Card.Title>
                                    <h2>{character.id}</h2>
                                </Card.Title>
                                <Card.Text>
                                    <strong id="name">Status:</strong>{" "}
                                    {character.name}
                                </Card.Text>
                                <Card.Text>
                                    <strong id="normalized_name">Species:</strong>{" "}
                                    {character.normalized_name}
                                </Card.Text>
                                <Card.Text>
                                    <strong id="origin">Origin:</strong>{" "}
                                    {character.gender}
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