import { useState } from 'react';
import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';

const App = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: '리액트의 기초 알아보기',
      checked: true,
    },
    {
      id: 2,
      text: '컴포넌트 스타일링 해보기',
      checked: true,
    },
    {
      id: 3,
      text: '일정 관리 앱 만들어 보기',
      checked: false,
    },
  ]);

  return (
    <TodoTemplate>
      <TodoInsert />
      <TodoList todos={todos} />
    </TodoTemplate>
  );
};

export default App;

//(태그 사이에 있는 값) TodoInsert컴포넌트와 TodoList컴포넌트는 Children이다

//나중에 추가할 일정 항목에 대한 상태들은 모두 App 컴포넌트에서 관리한다
//App컴포넌트에서 useState를 사용해서 todos라는 상태 정의한 후, todos를 TodoList의 props로 전달하기
//todos는 배열이며, 그 안에는 각 항목에 대한 {고유id, 내용, 완료여부}로 이루어진 객체형태로 이루어져 있다
