# Hiển thị dữ liệu mặc định

Ví dụ trong file `REACT\my-react-app\src\Button\AppState-dulieu.jsx`
```js
  const [selectBtn, setSelectBtn] = useState();
```
<br>

-> Giá trị hiện tại khi mới truy cập vào web **(selectBtn)** sẽ nhận giá trị trong dấu ngoặc của `useState`(falsy value). Giá trị mặc định của selectBtn sẽ là undefined -> falsy value = false. 

#### Sử dụng
```jsx
    const [selectBtn, setSelectBtn] = useState("components");
  // Gán giá trị mặc định là components để mặc định chạy components đầu tiên khi khởi tạo web

    <div id="tab-content">
    <h3>{EXAMPLES[selectBtn].title}</h3>
    <p>{EXAMPLES[selectBtn].desc}</p>
    <pre>
        <code>{EXAMPLES[selectBtn].code}</code>
    </pre>
    </div>
```
##### Cách 1: Dùng toán tử 3 ngôi
```jsx
      const [selectBtn, setSelectBtn] = useState();
      {!selectBtn ? ( //-> !selectBtn == (selectBtn == false) 
        <p>Vui lòng click vào nút</p>
      ) : (
        <div id="tab-content">
          <h3>{EXAMPLES[selectBtn].title}</h3>
          <p>{EXAMPLES[selectBtn].desc}</p>
          <pre>
            <code>{EXAMPLES[selectBtn].code}</code>
          </pre>
        </div>)
    }
```
##### Cách 2: Dùng && (Dễ hơn)
```jsx
    const [selectBtn, setSelectBtn] = useState();
    {!selectBtn && <p>Vui lòng click vào nút</p>}
        
    {selectBtn && (
    <div id="tab-content">
        <h3>{EXAMPLES[selectBtn].title}</h3>
        <p>{EXAMPLES[selectBtn].desc}</p>
        <pre>
        <code>{EXAMPLES[selectBtn].code}</code>
        </pre>
    </div>)
    }
```

##### Cách 3: Khai báo riêng biệt
```jsx
    const [selectBtn, setSelectBtn] = useState();

      let tabContent = <p>Vui lòng click button</p>
      if (selectBtn) {
        tabContent = (
          <div id="tab-content">
            <h3>{EXAMPLES[selectBtn].title}</h3>
            <p>{EXAMPLES[selectBtn].desc}</p>
            <pre>
              <code>{EXAMPLES[selectBtn].code}</code>
            </pre>
          </div>
        )
      }
      
      {tabContent}
```