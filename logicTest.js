//Main Function
const searchAnagrams = (words) => {
    const groups = [];

    for (const word of words) {
        let found = false;
        for (const group of groups) {
            if (isAnagram(group[0], word)) {
                group.push(word);
                found = true;
                break;
            }
        }

        if (!found) {
            groups.push([word]);
        }
    }
    return groups;
};

//Helper Function
const isAnagram = (word1, word2) => {
    const freq = {};
    for (const char of word1) {
        freq[char] = (freq[char] || 0) + 1;
    }
    for (const char of word2) {
        if (!freq[char] || --freq[char] < 0) {
            return false;
        }
    }
    return true;
};


//Defining words to be searched
const arrWord = ['cook', 'save', 'taste', 'aves', 'vase', 'state', 'map'];
//Invoking the main function
console.log(searchAnagrams(arrWord));