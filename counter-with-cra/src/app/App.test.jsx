import { render, screen } from  '@testing-library/react';
import App from './App';

test('App 컴포넌트 내부의 React 로고는 접근성을 준수했나요?', () => {
  render(<App />);
  const reactLogo = screen.getByRole('img'); // 현재 이 페이지에서 img는 어짜피 하나밖에 없음
  
  // 아직 내용 안채움..(생략할래)
});
