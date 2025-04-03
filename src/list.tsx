import "./list.css"

type ListProps = {
    items: string[]; // Expecting an array of strings
};

export function List({items}: ListProps) {
    return (
        <>
            <ul id={"leftList"}>
                {items.map(item => (
                    <li>{item}</li>
                ))}
            </ul>
        </>
    )
}