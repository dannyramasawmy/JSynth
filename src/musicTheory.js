// =============================================================================
//  Constants / enum-like objects
// =============================================================================

const REFERENCE_PITCH = 
{
    Frequency: 440, // concert pitch A [Hz]
    PianoKey: 49
} 

const KEY = 
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
const INTERVALS = 
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
//  Scale definitions
// =============================================================================

PermuteScale = (scale) => scale.slice(1,).concat(scale[0] + 12).map(x => x-scale[1]);

// modes of major
const MAJOR = [INTERVALS.Root, INTERVALS.Second, INTERVALS.Third, INTERVALS.Fourth, INTERVALS.Fifth, INTERVALS.Sixth, INTERVALS.Seventh];
const IONIAN = MAJOR;
const DORIAN = PermuteScale(IONIAN);
const PHRYGIAN = PermuteScale(DORIAN);
const LYDIAN = PermuteScale(PHRYGIAN);
const MIXOLYDIAN = PermuteScale(LYDIAN);
const AEOLIAN = PermuteScale(MIXOLYDIAN);
const NATURAL_MINOR = AEOLIAN;
const LOCRIAN = PermuteScale(AEOLIAN);

// modes of harmonic minor
const HARMONIC_MINOR_SCALE = [INTERVALS.Root, INTERVALS.Second, INTERVALS.FlatThird, INTERVALS.Fourth, INTERVALS.Fifth, INTERVALS.FlatSixth, INTERVALS.Seventh];
const LOCRIAN_NATURAL_6 = PermuteScale(HARMONIC_MINOR_SCALE);
const IONIAN_AUGMENTD_5 = PermuteScale(LOCRIAN_NATURAL_6);
const DORIAN_SHARP_11 = PermuteScale(IONIAN_AUGMENTD_5);
const PHRYGIAN_DOMINANT = PermuteScale(DORIAN_SHARP_11);
const LYDIAN_SHARP_2 = PermuteScale(PHRYGIAN_DOMINANT);
const SUPER_LOCRIAN_bb7 = PermuteScale(LYDIAN_SHARP_2);

// modes of melodic minor
const MELODIC_MINOR_SCALE = [INTERVALS.Root, INTERVALS.Second, INTERVALS.FlatThird, INTERVALS.Fourth, INTERVALS.Fifth, INTERVALS.Sixth, INTERVALS.Seventh];
const DORIAN_b2 = PermuteScale(MELODIC_MINOR_SCALE);
const LYDIAN_AUGMENTED = PermuteScale(DORIAN_b2);
const LYDIAN_DOMINANT = PermuteScale(LYDIAN_AUGMENTED);
const MIXOLYDIAN_b6 = PermuteScale(LYDIAN_DOMINANT);
const LOCRIAN_NATURAL_2 = PermuteScale(MIXOLYDIAN_b6);
const ALTERED_DOMINANT = PermuteScale(LOCRIAN_NATURAL_2);
const SUPER_LOCRIAN = ALTERED_DOMINANT;

const HARMONIC_MAJOR_SCALE = [INTERVALS.Root, INTERVALS.Second, INTERVALS.Third, INTERVALS.Fourth, INTERVALS.Fifth, INTERVALS.FlatSixth, INTERVALS.Seventh];

const DOUBLE_HARMONIC_MAJOR_SCALE = [INTERVALS.Root, INTERVALS.FlatSecond, INTERVALS.Third, INTERVALS.Fourth, INTERVALS.Fifth, INTERVALS.FlatSixth, INTERVALS.Seventh];

// =============================================================================
//  Frequencies / key mapping
// =============================================================================

// calculate 12-TET
GetFrequencyFromNote = (note, octave=4) => GetFrequencyFromKeyNumber(GetKeyNumberFromNote(note, octave)); 
GetFrequencyFromKeyNumber = (requestedKey) => REFERENCE_PITCH.Frequency * Math.pow((Math.pow(2, 1/12)), requestedKey - REFERENCE_PITCH.PianoKey);
GetKeyNumberFromNote = (note, octave) => (40 + note) + (octave - 4) * 12; // key 40 is C4