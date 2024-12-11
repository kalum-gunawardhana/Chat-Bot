const chatList = [];

var md = window.markdownit();


let user = "";

document.getElementById("selectUser").addEventListener("change", function () {
  user = this.value;
  console.log(this.value);
});

function sendMassage() {
  let txtUserInput = document.getElementById("txtUserInput").value;
  let chatBubble = "";
  if (user === "Me") {
    chatBubble = `<p class="text-end">${txtUserInput}</p>`; 
  } else {
    chatBubble = `<p class="text-end">${txtUserInput}</p>`;
    chatList.push(chatBubble);
    loadChatBox();
  }

  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  const raw = JSON.stringify({
    "contents": [
      {
        "parts": [
          {
            "text": txtUserInput
          }
        ]
      }
    ]
  });
  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
  };

  fetch("https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyCR9hGt9qAWSTRgwwqhYHz-G8xA_qTOMI8", requestOptions)
    .then((response) => response.json())
    .then((result) => {
      
      console.log(result.candidates[0].content.parts[0].text);
      chatBubble=`<p>${result.candidates[0].content.parts[0].text}<p>`;
      chatList.push(md.render(chatBubble));
      loadChatBox();
    })
    .catch((error) => console.error(error));

  loadChatBox();
}

function loadChatBox() {
  document.getElementById("chatBox").innerHTML = "";
  chatList.forEach(element => {
    document.getElementById("chatBox").innerHTML += element;
  })

}