import { useState } from "react"

export function CreateTodo() {
    const [title , setTitle] = useState("")
    const [description , setDescription] = useState("")

    async function addTodo () {
        const response = await fetch('http://localhost:3000/todo', {
            method : "POST",
            body : JSON.stringify({
                title : title,
                description : description
            }),
            headers : {
                "Content-Type" : "application/json"
            }
        })
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        await response.json();
        alert("todo added");
    }
    return (
        <div>
            <input type="text" placeholder="Title" onChange={(e) => {
                const value = e.target.value;
                setTitle(value);
            }}/> <br />
            <input type="text" placeholder="Description" onChange={(e) => {
                const value = e.target.value;
                setDescription(value);
            }}/> <br />
            <button onClick={addTodo}>Add</button>
        </div>
    )
}

// module.exports can also be used here.