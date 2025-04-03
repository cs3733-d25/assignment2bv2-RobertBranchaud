import aiGame from "/consoles.webp"
import {List} from "./list.tsx";
import Table2 from "./table2.tsx";
import Form2 from "./form2.tsx";

const h2List: string[] =
    ["Xbox 360", "Xbox One", "Xbox Series X", "Playstation 3", "Playstation 4", "Playstation 5", "Wii", "Nintendo Switch", "Nintendo DS", "PSP"]

const hobby2 = () => {
    return(
        <>
        <h3>Video Games</h3>
        <div>
            Video games are a pretty self explanatory hobby, but there are many different genres
            and forms in which video games can be played. I mainly play on my computer, but I also own an Xbox and a Playstation.
            My favorite video game of all time is tied between Halo 3 and Uncharted 2. My favorite genre to play is RPGs.
        </div>
            <div id={"Videogames Image"}>
                <img src={aiGame} width="200" alt="AIgamesImage" />
            </div>
            <div id={"list title"}>All the vide game consoles I've owned:</div>
                <List items={h2List}></List>
            <div id={"table title"}>My Favorite Games</div>
            <Table2 />
            <div id={"form title"}>Your Favorite Game</div>
            <Form2/>
            </>
    )
}
export default hobby2;