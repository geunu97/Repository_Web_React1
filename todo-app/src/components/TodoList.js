import TodoListItem from './TodoListItem';
import './TodoList.scss';

const TodoList = ({ todos }) => {
  return (
    <div className="TodoList">
      {todos.map((todo) => (
        <TodoListItem todo={todo} key={todo.id} />
      ))}
    </div>
  );
};

export default TodoList;

//App컴포넌트에서 TodoList로 전달한 props를 받아온 후,
//  todos 배열을 배열 내장 함수 map을 통해 TodoListItem으로 이루어진 배열로 변환하여 렌더링하기

//(map을 사용하여 컴포넌트로 변환할 때는 key props를 전달해 주어야 한다고 했었다, 여기서 사용되는 key값은 각 항목마다 가지고 있는 고윳값인 id를 넣는다. 그리고
// todo 데이터는 통째로 props로 전달한다. 여러 종류의 값을 전달해야 하는 경우에는 객체로 통째로 전달하는 편이 나중에 성능 최적화를 할 때 편리하다)
