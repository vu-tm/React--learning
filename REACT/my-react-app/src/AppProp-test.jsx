import './App.css'

// function MainCnt(props) {
//   return (
//     <li>
//       <img src={props.img} />
//       <h2> {props.title} </h2>
//     </li>
//   )
// }

// Dùng Destructuring
function MainCnt({ img, title }) {
  return (
    <li>
      <img src={img} />
      <h2> {title} </h2>
    </li>
  )
}

import { myData } from '../data.js';

function App() {
  return (
    <>
      {/* <MainCnt
        img="https://placehold.co/120x120"
        title="First Title"
      />
      <MainCnt
        img="https://placehold.co/130x130"
        title="Second Title"
      />
      <MainCnt
        img="https://placehold.co/140x140"
        title="Third Title"
      /> */}

      {/* Xử lý tránh lặp, Dùng Spread */}
      <MainCnt {...myData[0]} />
      <MainCnt {...myData[1]} />
      <MainCnt {...myData[2]} />

    </>
  )
}
export default App
