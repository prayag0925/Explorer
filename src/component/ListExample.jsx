import React from "react";

function ListExample() {
    const fruitList = ["Apple", "Banana", "Cherry", "Dragonfruit", "Elderberry", "Fig", "Grapefruit", "Honeydew"];

    return (
        <>
            <h2>List Examples :</h2>
            <ol>
                {fruitList.map((item, index) =>
                    <li key={index}>{item}</li>
                )}
            </ol>
        </>
    );
}

export default ListExample;