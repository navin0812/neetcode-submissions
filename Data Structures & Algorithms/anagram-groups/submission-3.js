class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const hashTable = new Map();
        for (let i = 0; i < strs.length; i++) {
            let hash = new Array(26).fill(0);

            for (let j = 0; j < strs[i].length; j++) {
                hash[strs[i].charCodeAt(j) - "a".charCodeAt(0)]++;
            }

           let key = hash.join(',');
           
            if (!hashTable.has(key)) {
                hashTable.set(key, []);
            } 
                hashTable.get(key).push(strs[i]);
        }
        console.log(hashTable);
        return [...hashTable.values()]
    }
}
