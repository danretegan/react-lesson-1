const favoriteBooks = [
    { id: "id-1", name: "JS pentru incepatori" },
    { id: "id-2", name: "React basics" },
    { id: "id-3", name: "React Router overview" },
    { id: "id-4", name: "Redux in depth" },
  ];

const Books = () => {
    return(
        <section>
            <h2>Books:</h2>
            <ul>
                {favoriteBooks.map( (elem) => {
                    return(
                        <li key={elem.id}>
                            {elem.name}
                        </li>
                    )
                })}
            </ul>
        </section>
    )
}



export default Books;
