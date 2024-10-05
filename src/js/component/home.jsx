import React, { useState } from "react";


//create your first component
const Home = () => {
	const [tasks, setTasks] = useState ([]);
	const [taskInput, setTaskInput] = useState ("");

	const addTask = () => {
		if (taskInput.trim () !== "") {
			setTasks([...tasks, taskInput]);
			setTaskInput("");
		}
	};

	const handleKeyPress = (e) => {
		if (e.key === "Enter") {
			addTask();
		}
	};

	const deleteTask = (index) => {
		const updatedTasks = tasks.filter((_,i) => i !== index);
		setTasks(updatedTasks);
	};
	
	return (
		<div className="container mt-5">
			<h1 className="text-Center">Task List</h1>
			
			<div className="input-Group mb-3">
				<input 
				type="text"
				className="form-Control"
				placeHolder="Add a new task"
				value="{taskInput}"
				onChange="{(e) => setTaskInput(e.target.vaule)}
				onKeyPress={handleKeyPress}"/>

				<button className="btn btn-primary" onClick={addTask}>Add Task</button>
			</div>

			<ul className="list-Group">
				{tasks.length === 0 ? ( 
					<li  
					className="list-Group-Item text-center">
					No tasks, add a task </li>
				) : (
					tasks.map((task, index) => (
					<li 
					key={index}
					className="list-group-item d-flex justify-content-between align-items-center">
						{task}

					<i 
					className="fas fa-trash-alt text-danger"
					onClick={() => deleteTask(index)}
					style={{ cursor: "pointer"}}>

					</i>
					</li>
				))
				)}
			</ul>
		</div>
	);
};

export default Home;
