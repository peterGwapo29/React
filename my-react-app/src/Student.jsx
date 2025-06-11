
function Student() {

    const studentList = [
        {
            id: 1,
            name: "Peter",
            age: 19,
            course: "BSIT"
        },
        {
            id: 2,
            name: "Gwapo",
            age: 20,
            course: "BSBA"
        },
        {
            id: 3,
            name: "Handsome",
            age: 21,
            course: "BSA"
        },

    ];

    const result = studentList.map(student =>
                                    <li key={student.id}>
                                        Name: {student.name}
                                        Age: {student.age}
                                        Course: {student.course}
                                    </li> );
                                    

    return(
        <>
            <main className="main-container">
                <div className="content">
                    <h1>Student</h1>
                    <div className="log">
                    <ol>{result}</ol>
                    </div>
                </div>
            </main>

        </>
    );
}

export default Student