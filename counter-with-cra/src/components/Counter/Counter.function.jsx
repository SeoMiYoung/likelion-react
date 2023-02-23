import React from 'react';

function Counter(props) {
  // 화살표 함수로 안하고, function handleIncrement() { ... } 이렇게 써도 됨

  // 함수형에서는 상태를 관리하기 위해, React.useState()훅을 사용한다
  const [count, setCount] = React.useState(props.count); // 배열을 구조분해할당
  // 참고로 꼭 이름이 [count, setCount]아니여도 됨! 순서만 그렇다는거임!


  const handleIncrement = () => {
    console.log("카운트 값 증가!");
    setCount(count+props.step); // count값을 바꾸려면 오직 setCount함수로 접근
  }
  const handleDecrement = () => {
    console.log("카운트 값 감소!");
    setCount(count-props.step);
  }

  return (
    <div className="Counter">
      <button type="button" onClick={handleIncrement}>+</button>
      <output>{count}</output>
      <button type="button" onClick={handleDecrement}>-</button>
    </div>
  )
}

// 함수는 class가 아니기 때문에 static을 쓸 수 없음
// Counter라는 함수는 객체이므로 속성을 설정하듯이 쓰면 된다
Counter.defaultProps = {
  count: 1,
  min: 1,
  max: 10,
  step: 1,
};

export default Counter;
