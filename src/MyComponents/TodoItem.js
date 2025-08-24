

export const TodoItem = ({ todo, onDelete, onToggle }) => {
  return (
    <div className="card my-2" style={{
      background: 'linear-gradient(120deg, #232526 0%, #434343 100%)',
      border: '1.5px solid #444',
      color: '#e0e7ef',
      boxShadow: '0 2px 12px rgba(0,0,0,0.18)',
    }}>
      <div className="card-body d-flex align-items-center justify-content-between">
        <div style={{ flex: 1 }}>
          <h5 className="card-title mb-1" style={{ color: todo.completed ? '#43cea2' : '#ffd700', textDecoration: todo.completed ? 'line-through' : 'none', transition: 'color 0.2s, textDecoration 0.2s' }}>{todo.title}</h5>
          <p className="card-text" style={{ fontSize: '0.97em', fontWeight: 500 }}>{todo.completed ? <span style={{color:'#43cea2'}}>Completed</span> : <span style={{color:'#f09819'}}>Not Completed</span>}</p>
        </div>
        <button
          className={"btn btn-outline-light btn-sm ms-2"}
          style={{
            minWidth: '110px',
            borderRadius: '8px',
            fontWeight: 600,
            background: todo.completed ? 'linear-gradient(90deg, #232526 0%, #43cea2 100%)' : 'linear-gradient(90deg, #434343 0%, #ffd700 100%)',
            color: todo.completed ? '#fff' : '#232526',
            border: todo.completed ? '1.5px solid #43cea2' : '1.5px solid #ffd700',
            marginRight: '10px',
            boxShadow: '0 1px 6px rgba(0,0,0,0.13)',
            transition: 'all 0.2s',
          }}
          onClick={() => onToggle(todo)}
        >
          {todo.completed ? 'Mark Incomplete' : 'Mark Completed'}
        </button>
        <button className="btn btn-danger btn-sm ms-2" onClick={() => onDelete(todo)} style={{minWidth:'70px'}}>Delete</button>
      </div>
    </div>
  );
}

