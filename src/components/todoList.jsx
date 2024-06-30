import { Container, Table, Button,Modal } from 'react-bootstrap';
import { TodoContext } from '../context/TodoContext.js'
import React, { useState, useContext} from 'react';

const TodoList = () => {
    const { users, todos, changeStatus, filterUsers, message, clear, filterCompleted } = useContext(TodoContext);
    
    const [sortOrder, setSortOrder] = useState('asc');

  const handleSort = () => {
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
  };
    const filteredTodos = todos.filter(todo => {
    const userFilter = filterUsers.length === 0 || filterUsers.includes(todo.userId.toString());
    const completedFilter = filterCompleted === '' || todo.completed === (filterCompleted === 'true');
    return userFilter && completedFilter;
  }).sort((a, b) => {
    if (sortOrder === 'asc') {
      return a.title.localeCompare(b.title);
    } else {
      return b.title.localeCompare(a.title);
    }
  });
    

    return (
        <Container>
            <h3 className='text-center mb-4'>Todo List</h3>
            
{message && (
        <Modal show={message !== null} onHide={clear}>
          <Modal.Header closeButton>
    
          </Modal.Header>
          <Modal.Body>{message}</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={clear}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      )}

             <Button className="mb-3" onClick={handleSort}>
        Sort: {sortOrder === 'asc' ? 'Ascending' : 'Descending'} by Title
      </Button>
            <Table striped bordered responsive hover>
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>Title</th>
                        <th>User</th>
                        <th>Completed</th>
                        <th>Change status</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredTodos.map(todo => {
            const user = users.find(user => user.id == todo.userId);
            return (
              <tr key={todo.id}>
                <td>{todo.id}</td>
                <td>{todo.title}</td>
                <td>{user ? user.name : 'Unknown User'}</td>
                <td className={todo.completed ? "text-primary" : "text-danger"}>{todo.completed ? 'Finished' : 'Unfinished'}</td>
                <td><Button variant="success" onClick={() => changeStatus(todo.id)}>Change</Button></td>
              </tr>
            );
          })}
                </tbody>
            </Table>
        </Container>
    )
}

export default TodoList