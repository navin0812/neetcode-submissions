class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let stringsToSend = "";

        if (strs.length === 0) {
            return "";
        }

        strs.forEach((str) => {
            stringsToSend += `${str.length}#${str}`;
        });

        return stringsToSend;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        console.log("str", str);
        let i = 0;
        const result = [];
        while (i < str.length) {
            let j = i;

            // scan forward until we find the '#'
            while (str[j] !== "#") j++;
            console.log("j", j, "i", i);

            // everything from i to j is the length (handles multi-digit numbers)
            const len = parseInt(str.slice(i, j), 10);

            // extract exactly 'len' characters after the '#'
            result.push(str.slice(j + 1, j + 1 + len));

            // move pointer to the start of the next entry
            i = j + 1 + len;
        }
        return result;
    }
}
