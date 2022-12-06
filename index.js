alert("hello!");
//타이틀 h1태그에 마우스를 올리면 색이 바뀌는 이벤트 정의
document.querySelector("h1").addEventListener("mouseover",()=>{
    //h1은 의미론적 태그 검색 엔진이 정의하기를...
    e.target.style.color="orange";
})