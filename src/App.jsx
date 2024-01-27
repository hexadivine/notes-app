import Sidebar from "./components/Sidebar/Sidebar";
import TextEditor from "./components/TextEditor/TextEditor";

function App() {
    return (
        <div className="flex">
            <Sidebar />
            <TextEditor />
        </div>
    );
}

export default App;
