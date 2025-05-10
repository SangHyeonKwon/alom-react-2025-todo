import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Example from "./assignments/example.js";

/**
 * 과제1-2: 이곳에 assignments 폴더 내 작성한 코드를 불러오는 코드를 작성해주세요.
 * 예시:
 * import Woojin from "./assignments/woojin";
 */

function App() {
  return (
    <Router>
      <Routes>
        {/* 과제1-2: 이곳에 과제1-1에서 작성한 코드를 불러오는 코드를 작성해주세요.
            <Route path="/woojin" element={<Woojin />} />
        */}
        <Route path="/example" element={<Example />} /> 
      </Routes>
    </Router>
  );
}

export default App;
