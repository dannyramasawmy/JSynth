var counter = 0;
var scale = IONIAN;

function clickOfButton()
{
    console.log("Clicked!");

    counter = counter % scale.length;

    var context = new AudioContext();
    var oscillator = context.createOscillator();
    oscillator.type = "sine";
    oscillator.frequency.value = GetFrequencyFromKeyNumber(40 + scale[counter]);
    oscillator.connect(context.destination);
    oscillator.start(); 
    
    counter++

    // Beep for 500 milliseconds
    setTimeout(function () {
        oscillator.stop();
    }, 500);                   
}