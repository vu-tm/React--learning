// File chứa nội dung hiển thị trên website
import './App.css'
import hinhAnh from '../../5.Component/image.png'

let today = new Date().toLocaleDateString();
let time = new Date().toLocaleTimeString();
let isLogin = true;

function Hello() { // Hàm react
  return (
    <h2>Agricultural</h2>
  );
}

function ranDomNum() { // Hàm JS thông thường (chữ cái đầu viết thường)
  return Math.floor(Math.random() * Welcome.length);
  // Math.floor : làm tròn xuống , 5.7->5
  // Math.random() : trả về số thập phân ngẫu nhiên từ 0 đến 1
}

const Welcome = [
  "하지마 ~~",
  "SYBAU!!",
  "Skibidi",
];

function App() {
  return (
    <>
      <p>
        {Welcome[ranDomNum()]} {/* Welcome[0] || Welcome[1] || Welcome[2] */}
      </p>

      <Hello /> {/* hoặc <Hello></Hello> để thực thi hàm Hello()*/}

      <h2>
        Hôm nay là: <b>{today}</b>
        <br></br>
        Thời gian hiện tại{" "}<b>{time}</b>
      </h2>
      <h3>{isLogin ? "you're welcome" : "cut"}</h3>
      <img src={hinhAnh} />
    </>
  )
}
export default App
