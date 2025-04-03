

const Table1 = () => {
    return (
        <table className="collapse">
            <caption>D&D Stats</caption>
            <tr>
                <th>Stat</th>
                <th>Description</th>
                <th>Common for Character Type</th>
            </tr>
            <tr>
                <td>Dexterity</td>
                <td>Ability to move and react quickly</td>
                <td>Characters that tend to be more mobile and evasive</td>
            </tr>
            <tr>
                <td>Strength</td>
                <td>Physical prowess</td>
                <td>Characters that are tough and powerful</td>
            </tr>
            <tr>
                <td>Wisdom</td>
                <td>A measure of knowledge gained from experience</td>
                <td>Characters that have a strong connection to magic and the world around them</td>
            </tr>
            <tr>
                <td>Constitution</td>
                <td>A measure of health and endurance</td>
                <td>Characters that are durable and tough</td>
            </tr>
        </table>
    )
}

export default Table1