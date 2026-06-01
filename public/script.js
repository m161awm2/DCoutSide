document.getElementById("bodySum").innerHTML=`
    <header id="headerID" class="headerClass"></header>
    
    <main class="container">
        <section class="post-list" id="postList">
            <p id="empty"></p>
        </section>
        <div id="sumForm"></div>
    </main>
`
document.getElementById("headerID").innerHTML = `<div class="RadBoard"><a href="https://github.com/m161awm2/DCoutSide" target="_blank"><img src="./images/asdf.png" alt="DCoutSide logo"><span>아웃사이드<span id="logoSm"> 일마다 최고의 게시글을 작성 해드리겠습니다!</span></span></a></div>`;
document.getElementById("empty").innerHTML = `아직 게시글이 존재하지 않습니다.`
document.getElementById("sumForm").innerHTML = `            <form id = "myForm">
	                <input id="inputName"placeholder="닉네임을 입력하세요" required>
	                <input id="inputContent" placeholder="내용을 입력하세요" required>
	                <button>글 쓰기</button>
	            </form>`;
const postList = document.getElementById("postList");
let posts = JSON.parse(localStorage.getItem("posts")) || [];

function addPost(nickname, content){
const empty = document.getElementById("empty");
const post = document.createElement("div");
const name = document.createElement("b");
const text = document.createElement("p");

if(empty){
empty.remove();
}
post.className = "post";
name.className = "post-name";
text.className = "post-content";
name.textContent = nickname + " 게시판 이용자";
text.textContent = content;

post.appendChild(name);
post.appendChild(text);
postList.appendChild(post);
}

for(let i = 0; i < posts.length; i++){
addPost(posts[i].nickname, posts[i].content);
}

document.getElementById("myForm").addEventListener("submit",function(e){
e.preventDefault();
const nickname = document.getElementById("inputName").value;
const content = document.getElementById("inputContent").value;
posts.push({nickname:nickname, content:content});
localStorage.setItem("posts", JSON.stringify(posts));
addPost(nickname, content);
document.getElementById("myForm").reset();
}); 
