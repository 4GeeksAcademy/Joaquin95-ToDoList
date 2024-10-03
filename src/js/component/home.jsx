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
		<div className="text-center">
			
		</div>
	);
};

export default Home;
