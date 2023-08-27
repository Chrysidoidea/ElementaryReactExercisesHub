import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { ToDoFormStyled, TaskComponentAnimated } from "../styled/ToDoFormComponentStyled";
import { GlassWrapperWithAnimation } from "../styled/GlassStyled";

export const ToDoFormComponent: React.FC = () => {
    const [todo, setToDo] = useState<string>('');
    const [description, setDescription] = useState<string>('');
    const [toDoArray, setToDoArray] = useState<{ id: string, todo: string, description: string }[]>([]);


    const submitHandler = (e: React.FormEvent) => {
        e.preventDefault();

        if (todo) {
            setToDoArray([...toDoArray, { id: uuidv4(), todo: todo, description: description }]);
            setToDo('');
            setDescription('');
        }

    }


    return (
        <GlassWrapperWithAnimation>
            <form
                action="submit"
            >
                <ToDoFormStyled>

                    <input
                        id="toDoInput"
                        type="text"
                        placeholder="write your task here"
                        value={todo}
                        onChange={(e) => setToDo(e.target.value)}
                    />

                    <textarea
                        id="toDoTextarea"
                        name="description"
                        placeholder="write task description here (450 characters max)"
                        value={description}
                        maxLength={450}
                        onChange={(e) => setDescription(e.target.value)}
                    />

                    <button
                        type="submit"
                        onClick={submitHandler}
                    >Add Task</button>

                    {
                        toDoArray.map((task) => (
                            <TaskComponentAnimated key={task.id}>
                                <span>{task.todo}</span>
                                <span>{task.description}</span>
                            </TaskComponentAnimated>

                        ))
                    }
                </ToDoFormStyled>
            </form>
        </GlassWrapperWithAnimation>
    )
}