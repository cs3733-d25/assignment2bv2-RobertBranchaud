

const Form1 = () => {
    return (
        <>
            <form>
                <label htmlFor="name">Character name?</label>
                <br/><input type="text" id="name"/><br/>
                <label htmlFor="type">Character type?</label>
                <br/><input type="text" id="type"/><br/>
                <p>Which stats would your character be prioritized?
                    <p>
                        <input type="checkbox" id="dex"/>
                        <label htmlFor="dex">Dexterity</label>
                        <input type="checkbox" id="str"/>
                        <label htmlFor="str">Strength</label>
                        <input type="checkbox" id="wis"/>
                        <label htmlFor="wis">Wisdom</label>
                        <input type="checkbox" id="con"/>
                        <label htmlFor="con">Constitution</label>
                        <br/><br/>
                        <p>How would your character do battle?</p>
                        <input type="radio" id="weapon" name="battleType"/>
                        <label htmlFor="weapon">Weapons</label>
                        <input type="radio" id="magic" name="battleType"/>
                        <label htmlFor="magic">Magic</label>
                        <input type="radio" id="fists" name="battleType"/>
                        <label htmlFor="fists">Bare Fists</label>
                        <br/><br/>
                        <label htmlFor="alignment">How would your character be aligned?</label>
                        <br/><br/>
                        <select name="alignment" id="alignment">
                            <option value="good">Good</option>
                            <option value="evil">Evil</option>
                            <option value="neutral">Neutral</option>
                        </select>
                        <br/><br/>
                        <label htmlFor="comments">Additional Comments</label>
                        <br/>
                        <textarea id="comments"></textarea>
                        <br/>
                        <input type="submit" value="Submit" id="SubmitButton"/>
                    </p>
                </p>
            </form>
        </>
)
}

export default Form1