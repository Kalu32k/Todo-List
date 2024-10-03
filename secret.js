const addBtn = document.querySelector("#addBtn");
let boxTag = 0;

export function theButton(event){
    // Check if the Shift key is pressed
    if (event.shiftKey) {
        console.log("Shift key is held, button won't move.");
        return;  // Exit the function and don't move the button
    }

    // Ensure the button is positioned absolutely
    addBtn.style.position = 'absolute';
    
    // Calculate new random positions within the window's width and height
    let x = Math.random() * (window.innerWidth - addBtn.offsetWidth);
    let y = Math.random() * (window.innerHeight - addBtn.offsetHeight);

    // Update the button's position
    addBtn.style.left = `${x}px`;
    addBtn.style.top = `${y}px`;

    boxTag++;
    console.log("You tried to click the button "+boxTag+" times");
}
