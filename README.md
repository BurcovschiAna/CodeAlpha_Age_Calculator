# CodeAlpha_Age_Calculator
<h3>Introduction</h3>
<p>This project is an Age Calculator that determines a user's age in years, months, and days by inputting their date of birth. The age calculation is based on the current date. The calculator is built using HTML, CSS, and JavaScript, and includes various features such as:</p>
<ul>
    <li>Date validation (for leap years, future dates, and other invalid inputs).</li>
    <li>Responsive design for different screen sizes.</li>
    <li>Interactive user interface with visual error handling and animations.</li>
</ul>
<h3>Features</h3>
<ol>
    <li>
        <h4>Input Validation</h4>
        <ul>
            <li>
                Date Validation: Ensures the user inputs a valid date, taking into account months with varying lengths (e.g., February, which has 28 or 29 days).
            </li>
            <li>
                Error Handling: The input fields will show error messages if the user enters invalid data (e.g., future dates or out-of-range values like day > 31, month > 12).
            </li>
        </ul>
    </li>
    <li>
        <h4>Responsive Design</h4>
        <ul>
            <li>
                The layout is designed to work on a variety of devices, including desktops, tablets, and smartphones.
            </li>
            <li>
                Uses media queries to adjust the layout based on screen size, ensuring the app is user-friendly across all devices.
            </li>
        </ul>
    </li>
    <li>
        <h4>Smooth Animations</h4>
        <ul>
            <li>
                Background animation provides a dynamic and visually appealing gradient that changes over time.
            </li>
            <li>
                Input labels shift when focused, giving the form an interactive, modern feel.
            </li>
        </ul>
    </li>
</ol>
<h3>
    Code Breakdown
</h3>
<ol>
    <li>
        <h4>CSS</h4>
        <p>The CSS file handles the layout, style, and animations for the age calculator.</p>
        <ul>
            <li>
                The global styles apply consistent margins, paddings, and fonts throughout the project.
            </li>
            <li>
                A smooth animated gradient background transitions over 30 seconds.
            </li>
            <li>
                The .wrapper div is centrally aligned using transform, and it holds all the input fields and results.
            </li>
            <li>
                Media queries ensure the layout is responsive, adjusting the width of elements based on screen size.
            </li>
        </ul>
    </li>
    <li>
        <h4>JavaScript</h4>
        <ul>
            <li>
                DOM elements are selected using getElementById, allowing interaction with the input fields and result display elements.
            </li>
            <li>
                The age calculator is triggered when the user clicks the "Calculate" button.
            </li>
            <li>
                The ageCalculator function calculates the age by subtracting the user's birth date from the current date.
            </li>
            <li>
                Error handling functions ensure valid input before any calculation is performed.
            </li>
            <li>
                The error function checks whether the input values are within valid ranges (e.g., days between 1 and 31, months between 1 and 12).
            </li>
            <li>
                It displays an error message if the input is invalid.
            </li>
            <li>
                The isValidDate function ensures that the day of the month does not exceed the maximum number of days in that particular month.
            </li>
        </ul>
    </li>
    <li>
        <h4> Result Display</h4>
        <ul>
            <li>
                After validation, the result is displayed by calculating the difference between the current date and the user's birth date.
            </li>
        </ul>
    </li>
</ol>
<h4>
    How to Use
</h4>
<ol>
    <li>Enter your date of birth in the Day, Month, and Year fields.</li>
    <li>Click the "Calculate" button.</li>
    <li>The calculator will display your age in years, months, and days.</li>
    <li>If any errors occur (e.g., entering a future date or invalid day for the month), error messages will be shown to guide you.</li>
</ol>
