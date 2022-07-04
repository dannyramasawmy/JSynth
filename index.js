var scale = MAJOR;


function clickOfButton(value)
{
    console.log("Clicked!");

    var octave = 4 + Math.floor(value/7);
    var key = value % 7;

    let referenceKey = GetKeyNumberFromNote(KEY.C, octave); 

    var context = new AudioContext();
    
    var oscillator = context.createOscillator();
    oscillator.type = "sine";
    oscillator.frequency.value = GetFrequencyFromKeyNumber(referenceKey + scale[key]);
    oscillator.connect(context.destination);
    oscillator.start(); 

    // Beep for 500 milliseconds
    setTimeout(function () {
        oscillator.stop();
    }, 500);                   
}