const filterShortStateName = (arrStr) =>{

    const result = arrStr.filter((arrStr) => arrStr.length < 7);

    return result;
};

const filterStartVowel = (arrStr) =>{

    const vowels = 'aeiou';

    const startWithVowel = arrStr.filter(function(str) {

        return vowels.includes(str[0].toLowerCase()); 
    });
    return startWithVowel; 
};

const filter5Vowels =(arrStr) =>{

    const vowels = 'aeiou';

    const contains5Vowels = arrStr.filter(function(str) {
       
        let count = 0; 

        for (let i = 0; i < str.length; i++) {

            if (vowels.includes(str[i].toLowerCase())) {
                count++;
            }
        }

        return count >= 5;
    });

    return contains5Vowels;
};

const filter1DistinctVowel = (arrStr) => {

    const vowels = 'aeiou';

    const contains1DistinctVowel = arrStr.filter(function(str) {
        
        const foundVowels = new Set(); 

        for (let i = 0; i < str.length; i++) {

            const char = str[i].toLowerCase(); 

            if (vowels.includes(char) && !foundVowels.has(char)) {
                foundVowels.add(char); 
            }
        }

        return foundVowels.size === 1; 
    });

    return contains1DistinctVowel;

}

const multiFilter = (arrObj) => {
   
    const vowels = 'aeiou';

    const filteredResults = arrObj.filter(function(obj) {

        const capitalCondition = obj.capital.length >= 8; 

        const nameCondition = !vowels.includes(obj.name[0].toLowerCase()); 

        const tagCondition = Array.from(obj.tag).some(char => vowels.includes(char.toLowerCase())); 

        const regionCondition = obj.region !== 'South';

        return capitalCondition && nameCondition && tagCondition && regionCondition;
    });

    return filteredResults; 
};


