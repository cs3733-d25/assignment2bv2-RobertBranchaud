import './App.css'
import Title from "./title.tsx";
import {Intro} from "./intro.tsx";

function App() {

    return <>
        <div>
            <Title/>
        </div>
        <div>
            <Intro bob={"Robert"} bran={"Brandon"}></Intro>
        </div>
    </>
}

export default App
