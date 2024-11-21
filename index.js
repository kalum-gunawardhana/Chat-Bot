let selectedChat = null;
const chatListArray=[];
console.log(chatListArray);


function me() {
    // console.log("clicked me");
    selectedChat = 'me';
}

function another() {
    // console.log("clicked another");
    selectedChat = 'another';
}

function sentButtonAction() {
    const message = document.getElementById("chatId").value;
    chatListArray.push(message);

    if (selectedChat === 'me') {
        document.getElementById("youId").innerHTML += `<div class="alert ">${message}</div>`;

    } else if (selectedChat === 'another') {
        document.getElementById("anotherId").innerHTML += `<div class="alert ">${message}</div>`;
    }
    document.getElementById("chatId").value = "";
}
