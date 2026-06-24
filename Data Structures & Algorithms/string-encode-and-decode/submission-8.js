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

            while (str[j] !== "#") {
                j++;
            }

            let len = parseInt(str.slice(i, j));

            result.push(str.slice(j + 1, j + 1 + len));

            i = j + 1 + len;
        }
        return result;
    }
}
