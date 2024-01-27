import React from "react";

function TextEditor() {
    return <div className="w-[80%] h-screen bg-light-blue">
        <input type="text" className="w-full py-10 bg-light-blue font-bold text-[30px] px-5 focus:outline-none font-mono" placeholder="Title"/>
        <textarea className="w-full h-[calc(100vh-131px)] bg-light-blue py-10 px-5 focus:outline-none font-mono" placeholder="Content"></textarea>
    </div>;
}

export default TextEditor;
