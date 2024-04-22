import { useState } from "react";
import KaKao from "./Kakao";

function Search() {
    const [InputText, setInputText] =  useState('');
    const [Place, setPlace] = useState('');

    const onChange = (e) => {
        setInputText(e.target.value)
    }
    const handle = (e) => {
        e.preventDefault() //기본동작 방지
        setPlace(InputText)
        setInputText('')
    }
    return (
        <>
            <form className="inputform" onSubmit={handle}>
                <input placeholder="검색어를 입력하세요" onChange={onChange} value={InputText} />
                <button type="submit">검색</button>.
            </form>    
            
        </>
    )
}
export default Search;