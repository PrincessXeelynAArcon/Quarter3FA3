document.addEventListener("DOMContentLoaded", function () {
    console.log("✅ JavaScript Loaded");

    let generateBtn = document.getElementById("generateBtn");

    if (!generateBtn) {
        console.error("❌ Button with ID 'generateBtn' not found.");
        return;
    }

    generateBtn.addEventListener("click", generateHeist);

    function generateHeist() {
        let num1 = Math.round(Math.random() * 20);
        let num2 = Math.round(Math.random() * 20);
        let num3 = Math.round(Math.random() * 20);

        let numbers = [num1, num2, num3];
        let highest = Math.max(...numbers);

        let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        let letter = alphabet[num1 % 26]; 

        let timeInMinutes = Math.pow(num2, 2) * num3;
        let hours = Math.floor(timeInMinutes / 60);
        let minutes = timeInMinutes % 60;

        let leaderRoles = ["Mastermind", "Hacker", "Infiltrator"];
        let leaderRole = leaderRoles[numbers.indexOf(highest)] || "Strategist";

        let storyText = `🚀 The heist crew consists of three skilled operatives. 
        The ${leaderRole}, with the highest skill level of ${highest}, is leading the mission. 
        Their spaceship, the Starship ${letter}, is en route to Nebula Vault X. 
        🕒 They have ${hours} hours and ${minutes} minutes before the security systems activate.
        Will they escape with the Celestial Core, or will they be caught?`;

        document.getElementById("results").innerHTML = `
            <div class="number-box">${num1}</div>
            <div class="number-box">${num2}</div>
            <div class="number-box">${num3}</div>
        `;

        document.getElementById("story").innerHTML = storyText;

        console.log("✅ Heist generated successfully!");
    }
});
