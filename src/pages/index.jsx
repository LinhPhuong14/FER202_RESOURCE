import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import  TodoProvider  from '../context/TodoContext.js';
import TodoList from '../components/todoList';
import UserFilter from '../components/usersFilter';
import CompletedFilter from '../components/completedFilter';
;

function App() {
  return (
    <TodoProvider>
      <Container>
        <Row>
          <Col md={9}>
            <TodoList />
          </Col>
          <Col md={3}>
            <UserFilter />
            <CompletedFilter />
          </Col>

        </Row>
      </Container>
    </TodoProvider>
  );
}

export default App;
