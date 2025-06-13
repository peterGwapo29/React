


function Button(){

    const colors = [
        {
            id: 1,
            color: red,
        },
        {
            id: 2,
            color: blue,
        },
        {
            id: 3,
            color: green,
        },
        {
            id: 4,
            color: orange,
        },
        {
            id: 5,
            color: black,
        }

    ];
   
    const colorList = colors.map(corol => <li key={corol.id}>
                                                    {corol.color} </li>
    );


    return (
        <>
             <main className="main-container">
                <div className="content">
                    <h1>Colors</h1>
                    <div className="log">
                    <ol>{colorList}</ol>
                    </div>
                </div>
            </main>
        </>
    );
}

export default Button