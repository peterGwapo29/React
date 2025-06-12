
function Student() {

    const book_List = [
        {
            id: 1,
            title: "Math",
            author: "Peter",
            genre: "Fiction",
            available: true
        },
        {
            id: 2,
            title: "Science",
            author: "Peter",
            genre: "Science",
            available: false
        },
        {
            id: 3,
            title: "AP",
            author: "Peter",
            genre: "Fiction",
            available: true
        },
        {
            id: 4,
            title: "IM",
            author: "Peter",
            genre: "History",
            available: true
        },
        {
            id: 5,
            title: "ITC",
            author: "Peter",
            genre: "Science",
            available: false
        },

    ];

    const availableBooks = book_List.filter(avBook =>   avBook.available === true &&
                                                        avBook.genre === "Fiction");


    availableBooks.sort( (a, b) => a.title.localeCompare(b.title));                                                    
    const books =  availableBooks.map(book => 
        <li key={book.id}>
            Title: {book.title}, 
            Author: {book.author}, 
            Genre: {book.genre}
        </li>
    );


    return(
        <>
            <main className="main-container">
                <div className="content">
                    <h1>Books</h1>
                    <div className="log">
                    <ol>{books}</ol>
                    </div>
                </div>
            </main>

        </>
    );
}

export default Student