import React, { useState } from 'react';

const Todo = () => {
  const [task, setTask] = useState('');
  const [list, setList] = useState([]);
  const [editIndex, setEditIndex] = useState(null); 

  const addOrUpdateTask = () => {
    if (task.trim()) {
      if (editIndex !== null) {
       
        const updatedList = [...list];
        updatedList[editIndex] = task;
        setList(updatedList);
        setEditIndex(null);
      } else {
      
        setList([...list, task]);
      }
      setTask('');
    }
  };

  const deleteTask = (index) => {
    const updatedList = list.filter((_, i) => i !== index);
    setList(updatedList);
    
    if (index === editIndex) {
      setTask('');
      setEditIndex(null);
    }
  };

  const startEditing = (index) => {
    setTask(list[index]);
    setEditIndex(index);
  };

  return (
    <div>
      <input
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter task"
      />
      <button onClick={addOrUpdateTask}>
        {editIndex !== null ? 'Update' : 'Add'}
      </button>

      <ul>
        {list.map((t, i) => (
          <li key={i}>
            {t}
            <button onClick={() => deleteTask(i)}>❌</button>
            <button onClick={() => startEditing(i)}>✏️</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
