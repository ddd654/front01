// alert("ok")
// 바닐라 > 순수 자바스크립트

// 윈도우가 실행할때 실행문
window.onload = function(){
    let searchBtn, searchText, str;
    searchBtn = document.querySelector(".searchBtn");
    searchText = document.getElementById("searchText")

    searchBtn.onclick = function() {
        // console.log("검색창에 입력하세요");
        str = searchText.value;
        console.log(str);
    }
    
}
















