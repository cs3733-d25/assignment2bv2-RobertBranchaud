const Form2 = () => {
    return (
        <form>
            <label htmlFor="username">Your name</label>
            <input type="text" id="username"/> <br/><br/>
            <label htmlFor="gametitle">Title of game</label>
            <input type="text" id="gametitle"/> <br/><br/>
            <label>Genre of game</label>
            <br/>
            <label htmlFor="action">Action</label>
            <input type="checkbox" id="action"/>
            <br/>
            <label htmlFor="adventure">Adventure</label>
            <input type="checkbox" id="adventure"/>
            <br/>
            <label htmlFor="rpg">RPG</label>
            <input type="checkbox" id="rpg"/>
            <br/>
            <label htmlFor="platformer">Platformer</label>
            <input type="checkbox" id="platformer"/>
            <br/><br/>
            <label>What system is the game on?</label>
            <br/>
            <input type="radio" name="system" id="xbox"/>
            <label htmlFor="xbox">Xbox</label>
            <br/>
            <input type="radio" name="system" id="playstation"/>
            <label htmlFor="playstation">Playstation</label>
            <br/>
            <input type="radio" name="system" id="pc"/>
            <label htmlFor="pc">PC</label>
            <br/>
            <input type="radio" name="system" id="nintendo"/>
            <label htmlFor="nintendo">Nintendo</label>
            <br/><br/>
            <input type="button" value="Submit" id="submitbutton"/>
        </form>
    )
}
export default Form2;