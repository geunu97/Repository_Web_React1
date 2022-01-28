import './TodoTemplate.scss';

const TodoTemplate = ({ children }) => {
  return (
    <div className="TodoTemplate">
      <div className="app-title">일정 관리</div>
      <div className="content">{children}</div>
    </div>
  );
};

export default TodoTemplate;

//App.js에 있는 TodoInsert컴포넌트와 TodoList컴포넌트는 Children이다    //일정 관리 써 있는 아래부분들
