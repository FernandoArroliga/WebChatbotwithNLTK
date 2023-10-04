class Chatbox {
    constructor() {
        this.args = {
            openButton: document.querySelector(".chatbox__button"),
            chatBox: document.querySelector(".chatbox__support"),
            sendButton: document.querySelector(".send__button")
        }

        this.state = false;
        this.messages = [];
    }

    display() {
        const {openButton, chatBox, sendButton} = this.args;
        
        openButton.addEventListener("click", () => this.toggleState(chatBox))
        openButton.addEventListener("click", () => this.onSendButton(chatBox))
    
        const node = chatBox.querySelector("input");
        node.addEventListener("keyup", ({key}) => {
            if (key === "Enter") {
                this.onSendButton(chatBox)
            }
        })

    }
}