
const ajayMass = 57;
const ajayHeight = 56;

const sopanMass = 56;
const sopanHeight = 56;

const ajayMI = getMI(ajayMass, ajayHeight);
const sopanMI = getMI(sopanMass, sopanHeight);

const ajayHasHeigherMI = ajayMI > sopanMI;
if (ajayHasHeigherMI) {
    console.log(`ajay has heigher mass Index (${ajayMI}) than sopan mass Index (${sopanMI})`);
} else {
    console.log(`sopan has heigher mass Index (${sopanMI}) than ajay mass Index (${ajayMI})`);
}

function getMI(mass, height) {
    const mi = mass / height ** 2;
    return mi;
}