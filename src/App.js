import React, { useState } from 'react';
import './App.css';


//*Importing Components
// import AppHeader from './components/AppHeader';
import AppHeader from './components/AppHeader';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import AppFooter from './components/AppFooter';

//*Importing Ant Design
import { Layout } from 'antd';

const { Header, Footer, Content } = Layout;



function App() {

  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState([]);

  return (
    <Layout className="layout">
      <Header style={{ background: "white" }}>
        <AppHeader />
      </Header>
      <Content>
        <TodoForm inputText={inputText} setInputText={setInputText} todos={todos} setTodos={setTodos} />
        <TodoList inputText={inputText}/>
      </Content>
      <Footer>
        <AppFooter />
      </Footer>
    </Layout>
  );
}

export default App;
