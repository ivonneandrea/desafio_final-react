import { useEffect } from "react";

const Search = ({ characters, search, setSearch, setFilteredData }) => {
    // set search so it captures the input
    const inputFilter = () => {
        setSearch(e.target.value);
    };

    // useEffect with condition to show characters or the filteredData
    useEffect(() => {
        if (!search) {
            setFilteredData(characters);
        } else {
            const findWord = search.toLowerCase();
            const filterResponse = characters.filter((character) =>
                character.name.toLowerCase().includes(findWord)
            );
            setFilteredData(filterResponse);
        }
    }, [characters, search, setSearch, setFilteredData]);

    return (
        <>
            <header>
                <img
                    src=""
                    alt=""
                />
                <section className="searchSection">
                    <input
                        className="form-control mb-3"
                        type="text"
                        name="search"
                        id="search"
                        value={search}
                        placeholder="Encuentra tu personaje favorito de los simpsons"
                        onChange={inputFilter}
                    />
                </section>
            </header>
        </>
    );
};

export default Search;
