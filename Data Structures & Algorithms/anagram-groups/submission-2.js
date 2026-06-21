class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const hashTable = {};
        for (let i = 0; i < strs.length; i++) {
            let hash = []

            for (let j = 0; j < strs[i].length; j++) {
                hash.push(strs[i].charCodeAt(j).toString());
            }
            hash.sort().toString();
            if (hashTable[hash]) {
                hashTable[hash].push(strs[i]);
            } else {
                hashTable[hash] = [strs[i]];
            }
        }
        console.log(hashTable);
        return Object.values(hashTable).map(v => v);
    }
}
