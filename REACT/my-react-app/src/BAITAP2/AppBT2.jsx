// Yêu cầu dùng map để in ra các thẻ li từ mảng myBook
import Book from "./Book"; // Import component Book từ file Book.jsx
const myBook = ["HTML", "CSS", "JS", "REACTJS"];
function App() {
  return (
    <>
      <h1>My Book</h1>
      <ul>
        {/* Cần các thẻ li -> component -> Tạo file cùng cấp -> Tên component buộc ghi hoa chữ đầu*/}
        {myBook.map((book, index) => (
          <Book title={book} key={index} /> // return component Book, truyền props title
        ))}
      </ul>
    </>
  )
}
export default App
