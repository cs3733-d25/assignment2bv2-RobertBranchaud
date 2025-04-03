import './App.css'
import Title from "./title.tsx";
import {Intro} from "./intro.tsx";
import Hobby1 from "./hobby1.tsx";

function App() {

    return <>
        <div>
            <Title/>
        </div>
        <div>
            <Intro bob={"Robert"} bran={"Brandon"}></Intro>
        </div>
        <div>
            <Hobby1></Hobby1>
        </div>
    </>
}

export default App
