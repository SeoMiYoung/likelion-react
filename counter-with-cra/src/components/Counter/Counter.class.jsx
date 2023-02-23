import { Component } from 'react';

class Counter extends Component { 
  // 위에서 구조분해할당 했기 때문에 React.Component대신, Component라고 적을 수 있음

  // default
  static defaultProps = {
    count: 1,
    min: 1,
    max: 10,
    step: 1,
  };

  // state는 꼭 써야되는건 아니고 optional한 선택사항
  state = {
    count: this.props.count,
  };

  render() {
    const { count } = this.state; // state객체를 가져다가 구조분해할당으로 가져옴

    return (
      <div data-component="Counter">
        <button type="button" onClick={this.handleInc} aria-label="카운트 1 증가">+</button>
        <output>{count}</output>
        <button type="button" onClick={this.handleDec} aria-label="카운트 1 감소">-</button>
      </div>
    )
  }

  // 핸들러. 바인딩.
  handleInc = () => {
    this.setState({
      count: this.state.count + this.props.step,
    });
  };
  handleDec = () => {
    this.setState({
      count: this.state.count - this.props.step,
    });
  };
}

// class 컴포넌트를 밖으로 내보내기 위해
export default Counter;


