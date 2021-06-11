var url = " http://localhost:3000/courses";
var getCourse = document.querySelector(".post-list");
var addPostForm = document.querySelector('.add-post-form');
var titleValue = document.getElementById("txttitle");
var imageValue = document.getElementById("txtimage");
var contentValue = document.getElementById("txtcontent");
var output = '';
var renderPost = (courses)=>{
  courses.forEach(course => {
    output += `
          <div class="col-md-3">
      <div class="card" style="width: 18rem;">
       <img class="card-img-top" src="${course.image}" alt="Card image cap">
      <div class="card-body">
        <h5 class="card-title">${course.name}</h5>
        <p class="card-text">${course.descriptsion}</p>
      </div>
      <div class="card-body">
        <a href="#" class="card-link">Edit</a>
        <a href="#" class="card-link">Delete</a>
      </div>
    </div>
    </div>
      
      `
  });
  getCourse.innerHTML = output;
}
//Get method
fetch(url)
  .then(res => res.json())
  .then(data => renderPost(data))
//cereate-Insert new post
//method:Post
addPostForm.addEventListener('submit',(e)=>{
  e.preventDefault()
  console.log(titleValue.value)
  console.log(imageValue.files)
  fetch(url,{
    method:'post',
    headers:{
      'Content-Type':'application/json'
    },
    body:JSON.stringify({
      name:titleValue.value,
      image:imageValue.value,
      descriptsion:contentValue.value,
      
    })
  })
  .then(res=>res.json())
  .then(data=>{
    var dataArr = [];
    dataArr.push(data);
    renderPost(dataArr);
  })
})




