# Component
💡 Component thật ra chỉ là 1 hàm js, nhưng nó tuân theo quy tắc  
- Tên function **viết hoa** chữ cái đầu
- Phải return về giá trị có thể **hiển thị được**, và là **1 phần tử duy nhất**
![alt text](image.png)

## Child component
💡 Dùng để hiện thị nội dung mà đặt giữa cặp thẻ Component  
![alt text](childcompo.png)
![alt text](image-1.png)
  
💡 ABC render <DCM /> -> nên ABC sẽ là **cha**, DCM sẽ là **con**

**Minh hoạ mối quan hệ**
--
TodoApp (cha)
 ├─ state: { todos: [...] }
 └─ <Todos todos={this.state.todos} />  ← truyền props xuống con

Todos (con)
 └─ nhận props.todos từ cha → this.props.todos
--

#### Kiểu component
React có 2 kiểu viết component:  
- Functional component  
- Class component  

#### Functional component
- Là một function Javascript / ES6 function 
- Phải trả về 1 React element. 
- Nhận props làm tham số nếu cần. 
```jsx
function exampleFunctionalComponent() { 
    return ( <h1>Tôi là một functional component!</h1> ); 
};
```
#### Class component
- Là một class kế thừa từ React.Component 
- Có thể nhận props (trong hàm khởi tạo) nếu cần. 
- Phải có hàm render() và trong đó trả về 1 React element hoặc NULL.
```jsx
class Welcome extends React.Component { 
    render() { 
        return <h1>Hello, {this.props.name}</h1>; 
    } 
} 
```
#### Sử dụng component
- Khi tạo component, nó sẽ không hiển thị ra ngoài cho đến khi **import** và **render** trong component khác

  
**Ví dụ:**  
Bạn mở Header.js trong thư mục và thêm đoạn code sau: 
```jsx
import React from "react"; 
 
class Header extends React.Component { 
    render() { 
        return ( 
            <header> 
                <h1>Simple Todo App</h1> 
            </header> 
        ); 
    } 
}; 
export default Header; 
```
Tiếp theo, để hiển thị header, bạn cần import và gọi nó trong TodoApp component. 
```jsx
import React from "react"; 
import Header from "../components/layout/Header"; //import
 
class TodoApp extends React.Component { 
    render() { 
        return ( 
            <div> 
                <Header/> {/*gọi*/}
            </div> 
        ); 
    } 
} 
export default TodoApp; 
```