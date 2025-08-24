import React, { useState } from 'react';


const AddTodo = ({ onAdd }) => {
	const [title, setTitle] = useState("");

	const submit = (e) => {
		e.preventDefault();
		if (!title.trim()) {
			alert("Todo title cannot be empty");
			return;
		}
		onAdd(title);
		setTitle("");
	};

	return (
		<form onSubmit={submit} style={{ display: 'flex', margin: '20px 0' }}>
			<input
				type="text"
				className="form-control"
				placeholder="Add a new todo..."
				value={title}
				onChange={e => setTitle(e.target.value)}
				style={{ flex: 1, marginRight: '10px' }}
				maxLength={100}
				autoComplete="off"
			/>
			<button className="btn btn-success" type="submit">Add Todo</button>
		</form>
	);
};

export default AddTodo;
