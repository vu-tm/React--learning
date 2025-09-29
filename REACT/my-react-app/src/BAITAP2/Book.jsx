// Vì là hàm tuỳ chỉnh -> xuất hàm
export default function Book({ title }) { //Tên hàm trùng tên file
    return <li>{title}</li> // Muốn hiện title vào li thì dùng props
}