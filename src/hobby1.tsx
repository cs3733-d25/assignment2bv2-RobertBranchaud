import {List} from "./list.tsx";
import Table1 from "./table1.tsx";
import Form1 from "./form1.tsx";

const hList: string[] =
    ["A cunning rogue", "An armor clad fighter", "An old wise wizard", "A dexterous archer", "A reckless barbarian"]

const Hobby1 = () => {
    return (
        <>
            <h3>Dungeons and Dragons</h3>
            <div>D&D consists of players who play the part of heroes and adventurers, usually in a fantasy setting, as they embark on a storied quest.
                The game is led by a dungeon master, who plans the story and plays the part of all the other characters in the world.
                The game is a mix of strategy, role-playing, and improvisation, as players work together to tell a collective story.</div>
            <div id="dndImange">
                <img src="public/dndConceptArt.jpg" width="200" alt="DND"/>
            </div>
            <p id={"leftList"}>Players usually will choose to play archetypal fantasy characters, with some examples being:</p>
            <List items={hList}></List>
            <p>D&D Characters all have stats that determine how proficient they are in certain areas:</p>
            <Table1></Table1>
            <h4>What kind of character would you play?</h4>
            <Form1></Form1>
        </>
    )
}

export default Hobby1