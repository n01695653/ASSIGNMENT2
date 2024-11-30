function calculateArea() {
    let width = getPositiveNumber("Enter the width of the rectangle (positive number):");
    let height = getPositiveNumber("Enter the height of the rectangle (positive number):");
    const area = width * height;
    console.log(`The area of the rectangle is: ${area}`);
    return area;
}

function getPositiveNumber(message) {
    let value;
    do {
        value = parseFloat(prompt(message));
    } while (isNaN(value) || value <= 0);
    return value;
}

// Example usage
calculateArea();
        
const button = document.getElementById('clickMeButton');

        button.addEventListener('click', () => {
            // Display the alert box
            alert('Button clicked!');

            // Change the button's background color to a random color
            const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
            button.style.backgroundColor = randomColor;
        });

        function getRandomString(length) {
            const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';
            let result = '';
            for (let i = 0; i < length; i++) {
                result += characters.charAt(Math.floor(Math.random() * characters.length));
            }
            return result;
        }

        // Add a new <li> item to the list on page load
        const ulElement = document.getElementById('dynamicList');
        const newListItem = document.createElement('li');
        newListItem.textContent = 'Fourth item';
        ulElement.appendChild(newListItem);

        // Add event listeners to all <li> items
        ulElement.addEventListener('click', (event) => {
            if (event.target.tagName === 'LI') {
                // Change the text content of the clicked <li> to a random string
                event.target.textContent = getRandomString(10);
            }
        });
        const box = document.getElementById('box');

// Change background color when the box is clicked
box.addEventListener('click', () => {
    box.style.backgroundColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
});

// Change border color when hovering over the box
box.addEventListener('mouseover', () => {
    box.style.borderColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
});

// Revert border color when mouse leaves the box
box.addEventListener('mouseout', () => {
    box.style.borderColor = '#007BFF';
});

// Change the width and height when double-clicking
box.addEventListener('dblclick', () => {
    box.style.width = `${Math.floor(Math.random() * 200) + 150}px`;
    box.style.height = `${Math.floor(Math.random() * 100) + 50}px`;
});