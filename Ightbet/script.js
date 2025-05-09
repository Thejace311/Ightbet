// Common function to show messages
function showMessage(message) {
    alert(message);
}
// Plinko Game Logic
function playPlinko() {
    var bet = document.getElementById('bet').value.toLowerCase();
    var result = ['left', 'middle', 'right'][Math.floor(Math.random() * 3)];

    if (bet !== 'left' && bet !== 'middle' && bet !== 'right') {
        showMessage("Invalid input. Please enter 'left', 'middle', or 'right'.");
        return;
    }

    document.getElementById('result').innerHTML = `The ball landed on: ${result}. You ${bet === result ? 'win' : 'lose'}.`;
}
// Crash Game Logic
function startCrash() {
    var bet = parseFloat(document.getElementById('bet').value);
    if (isNaN(bet) || bet <= 0) {
        showMessage("Please enter a valid bet.");
        return;
    }

    var multiplier = 1;
    var crashMultiplier = Math.random() * 10 + 1;  // Random crash multiplier between 1 and 10
    var interval = setInterval(function() {
        multiplier += Math.random() * 0.1; // Random increase in multiplier
        document.getElementById('result').innerHTML = `Current Multiplier: ${multiplier.toFixed(2)}`;

        if (multiplier >= crashMultiplier) {
            clearInterval(interval);
            document.getElementById('result').innerHTML = `Crash occurred! The game crashed at x${multiplier.toFixed(2)}. You lost your bet.`;
        }
    }, 100);
}
