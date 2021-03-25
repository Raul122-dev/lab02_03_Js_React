const Total = (props) => {
    var totalEx = 0
    var parts = props.parts
    for (var i = 0; i < parts.length; i++){
        totalEx +=  parts[i].exercises
    }
    return (
        <div>
            <p>Number of exercises {totalEx}</p>
        </div>
    )
}

export default Total