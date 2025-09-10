// Brand convention interfaces with unique identifiers
interface MajorCredits {
  credits: number;
  brand: "major";
}

interface MinorCredits {
  credits: number;
  brand: "minor";
}

// Functions to sum credits
function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    brand: "major"
  };
}

function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    brand: "minor"
  };
}

// Example usage
const majorSubject1: MajorCredits = { credits: 4, brand: "major" };
const majorSubject2: MajorCredits = { credits: 3, brand: "major" };

const minorSubject1: MinorCredits = { credits: 2, brand: "minor" };
const minorSubject2: MinorCredits = { credits: 1, brand: "minor" };

const totalMajorCredits = sumMajorCredits(majorSubject1, majorSubject2);
const totalMinorCredits = sumMinorCredits(minorSubject1, minorSubject2);

console.log(totalMajorCredits); // { credits: 7, brand: "major" }
console.log(totalMinorCredits); // { credits: 3, brand: "minor" }
