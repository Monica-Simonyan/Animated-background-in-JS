const banner = document.getElementsByClassName('banner')[0];
const blocks = document.getElementsByClassName('blocks');
let content = "";
for (let i = 1; i < 400; i++) {
  content += "<div class='blocks'></div>";
}

banner.innerHTML = content;
