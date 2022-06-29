// =============================================================================
//  Constants / enum-like objects
// =============================================================================

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

// what to add to current key to get the correct interval
const Intervals = 
{
    // basic
    SemiTone: 1,
    Tone: 2,

    // compound
    Root: 0,
    FlatSecond: 1,
    Second: 2,
    SharpSecond: 3, FlatThird: 3,
    Third: 4,
    Fourth: 5,
    SharpFourth: 6, FlatFifth: 6,
    Fifth: 7,
    SharpFifth: 8, FlatSixth: 8,
    Sixth: 9,
    FlatSeventh: 10, 
    Seventh:  11,
    Octave: 12
}

// =============================================================================
//  Frequencies / key mapping
// =============================================================================

// calculate 12-TET
getFrequencyFromNote = (note, octave=4) => getFrequencyFromKeyNumber(getKeyNumberFromNote(note, octave)); 
getFrequencyFromKeyNumber = (requestedKey) => referencePitch.Frequency * Math.pow((Math.pow(2, 1/12)), requestedKey - referencePitch.PianoKey);
getKeyNumberFromNote = (note, octave) => (40 + note) + (octave - 4) * 12; // key 40 is C4