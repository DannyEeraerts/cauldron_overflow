const arrows= document.querySelectorAll(".vote");
let total = document.querySelector(".js-vote-total");

function changeTotal(response, arrow){
  if(arrow.getAttribute('data-direction') ==="up") {
    arrow.parentNode.lastElementChild.lastChild.textContent = response;
  }
  if(arrow.getAttribute('data-direction') ==="down"){
    arrow.parentNode.lastElementChild.lastChild.textContent = response;
  }
}

function loadText(){
  let arrow = this;
  let xhr = new XMLHttpRequest();
  xhr.open('POST', '/comments/10/vote/'+arrow.getAttribute('data-direction'), true);
  xhr.onload=function(){
    if(xhr.status === 200){
      let response = xhr.responseText;
      changeTotal(response, arrow);
    }
  };
  xhr.send();
}

for (let i = 0; i < arrows.length; i++) {
  arrows[i].addEventListener("click", loadText);
}