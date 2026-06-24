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

        strs.forEach((str, index) => {
            stringsToSend += `${str.split("").map((char) => char.charCodeAt(0))}!`;
        });

        return stringsToSend;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        console.log("endecode", str);
        if (str === "") {
            return [];
        }

        const decode = [];

        str.split("!").forEach((str) => {
            if (str === "") {
                decode.push("");
            } else {
                let arrange = "";
                str.split(",").forEach((code) => (arrange += String.fromCodePoint(code)));
                decode.push(arrange);
            }
        });
        return decode.slice(0, -1)
    }
}
