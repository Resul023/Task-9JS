let boxArea = document.querySelector(".container");
boxArea.innerHTML = "";
fetch("https://jsonplaceholder.typicode.com/comments")
  .then((response) => {
    if (!response.ok) throw new Error("There are problem in process");
    return response.json();
  })
  .then((data) => {
    for (let i = 0; i < 20; i++) {
      boxArea.innerHTML += `<div class="box">
        <div class="post-id">Post-Id:${data[i].postId}</div>
        <div class="id">Id:${data[i].id}</div>
        <div class="name">Name:${data[i].name.slice(0, 22)}</div>
        <div class="email">Email:${data[i].email.slice(0, 20)}</div>
        <div class="body">Body:${data[i].body.slice(0, 22)}</div>
      </div>`;
    }
  })
  .catch((err) => alert(err.message));
