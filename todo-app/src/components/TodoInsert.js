import { MdAdd } from 'react-icons/md';
import './TodoInsert.scss';

const TodoInsert = () => {
  return (
    <form className="TodoInsert">
      <input placeholder="할 일을 입력하세요" />
      <button type="submit">
        <MdAdd />
      </button>
    </form>
  );
};

export default TodoInsert;

// react-icons 라이브러리 사용법
// 1. 라이브러리 설치 $yarn add react-icons
// 2. https://react-icons.github.io/react-icons/#/icons/md 들어가면 다양한 아이콘들이 있다
// 3. 사용하고 싶은 아이콘을 고른 다음, import을 사용하여 불러온 후 컴포넌트처럼 사용하면 된다 (import { 아이콘이름 } from 'react-icons/md';)
