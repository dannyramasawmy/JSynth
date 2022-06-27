const referencePitch = 
{
    Frequency: 440, // concert pitch A [Hz]
    PianoKey: 49
} 

const Key = 
{
    C: 0,
    Cs: 1, Db: 1,
    D: 2,
    Ds: 3, Eb: 3,
    E: 4,
    F: 5,
    Fs: 6, Gb: 6,
    G: 7,
    Gs: 8, Ab: 8,
    A: 9,
    As: 10, Bb: 10,
    B: 11
};

// calculate 12-TET
function getFrequency(note, octave)
{
    let desiredKey = (40 + note) + (octave - 4) * 12; // key 40 is C4
    return referencePitch.Frequency * Math.pow((Math.pow(2, 1/12)), desiredKey - referencePitch.PianoKey)
}
