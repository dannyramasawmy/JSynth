var counter = 0;
var scale = LOCRIAN;
var octave = 3;

function clickOfButton()
{
    console.log("Clicked!");

    counter = counter % scale.length;
    let referenceKey = GetKeyNumberFromNote(KEY.C, octave); 

    var context = new AudioContext();
    var oscillator = context.createOscillator();
    oscillator.type = "sine";
    oscillator.frequency.value = GetFrequencyFromKeyNumber(referenceKey + scale[counter]);
    oscillator.connect(context.destination);
    oscillator.start(); 
    
    counter++;
    if (counter == scale.length)
        octave++;

    // Beep for 500 milliseconds
    setTimeout(function () {
        oscillator.stop();
    }, 500);                   
}