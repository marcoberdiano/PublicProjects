// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9];
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6];
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5];
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6];

const valid6 = [4,5,3,9,6,8,9,8,8,7,7,0,5,7,9,8];

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3];
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4];
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5];
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4];

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4];
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9];
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3];
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3];
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3];

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5];

const batch2 = [invalid1,invalid5,invalid5,invalid4];
// Add your functions below:
function validateCred(credicard){
    const validcard = [];
    let double;
    let sum=0;
    const checkDigit = credicard[credicard.length-1];
    // Reverse card and Drop the last digit
    for ( let i = credicard.length-2; i>=0; i--){
        validcard.push(credicard[i]);
    }
    // Multiple odd digits position by 2
    for(let j = 0; j <= validcard.length-1; j++){
        if ( j % 2 == 0){
            double = validcard[j] * 2;
            if (double > 9) {
                double-=9;
            }
            validcard[j] = double;
        }
    }
    // Add all numbers
    sum = validcard.reduce((ca,cc) => ca + cc) + checkDigit;

    // check the mod 10
    return sum%10==0;
}

function findInvalidCards(credicards){
    const invalidCards = []
    credicards.filter(card => {
        if(!validateCred(card)){
            invalidCards.push(card);
        }
    })
    return invalidCards;
}

function idInvalidCardCompanies(invalidCards){
    const companies = ['Amex (America Express)', 'Visa', 'MasterCard', 'Discover'];
    invalidCompanies = [];
    for ( let i = 0; i<invalidCards.length; i++) {
        switch (invalidCards[i][0]) {
            case 3:
                if(!invalidCompanies.includes(companies[0])){
                    invalidCompanies.push(companies[0]);
                }
                break;
            case 4:
                if(!invalidCompanies.includes(companies[1])){
                    invalidCompanies.push(companies[1]);
                }
                break;
            case 5:
                if(!invalidCompanies.includes(companies[2])){
                    invalidCompanies.push(companies[2]);
                }
                break;
            case 6:
                if(!invalidCompanies.includes(companies[3])){
                    invalidCompanies.push(companies[3]);
                }
                break;
            default:
                invalidCompanies.push('Company not found');
                break;
        }
    }
    return invalidCompanies;
}

function convertToArray(card){
    const creditCardArray = [];
    let number;
    for (let i = 0 ; i <= card.length-1; i++) {
        number = parseInt(card[i]);
        if (!isNaN(number)) {
            creditCardArray.push(number)
        }
    }
    return creditCardArray;
}

// test all function

console.log(validateCred(valid4));

console.log(validateCred(invalid1));

console.log(findInvalidCards(batch));

console.log(idInvalidCardCompanies(batch2));

card = convertToArray('4929498812838759');
console.log(validateCred(card));
