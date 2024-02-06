let increaseFactor = 2;
let noClickCount = 0; // Track how many times "No" has been clicked
function yesReply() {
    document.getElementById("response").innerText = "Yay! Looking forward to a lovely day together! 😍";
}

function noReply() {
	const messages = [
        "Are you sure?",
        "Really sure?",
        "Think again, maybe?",
        "Surely, we'd have fun!",
        "Wouldn't you reconsider?",
        "I promise, it'll be great!",
        "Last chance, yes?"
    ];
    let yesBtn = document.getElementById("yes-btn");
    let noBtn = document.getElementById("no-btn");
    let currentSize = parseFloat(window.getComputedStyle(yesBtn, null).getPropertyValue('font-size'));
    yesBtn.style.fontSize = (currentSize + increaseFactor) + 'px'; // Increase font size more noticeably
    noBtn.style.transform = "translateX(" + ((Math.random() - 0.5) * 100) + "px) translateY(" + ((Math.random() - 0.5) * 100) + "px)"; // Move "No" to avoid clicks
    //Get a new message based on how many times "No" has been clicked
    let message = messages[Math.min(noClickCount, messages.length - 1)];
    document.getElementById("response").innerText = message;
    noClickCount++; // Increment the counter for each "No" click

}
