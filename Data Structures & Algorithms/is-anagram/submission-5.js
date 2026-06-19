class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const s_hash = {};
        if (s.length !== t.length) {
            return false;
        }

        for (let i = 0; i < s.length; i++) {
            const skey = s.charCodeAt(i);
            if (s_hash[skey]) {
                s_hash[skey] += 1;
            } else {
                s_hash[skey] = 1;
            }
        }

        for (let j = 0; j < t.length; j++) {
            const tkey = t.charCodeAt(j);
            if (s_hash[tkey]) {
                s_hash[tkey] -= 1;
            } else {
                return false;
            }
        }

        Object.values(s_hash).forEach((v) => {
            if (v !== 0) return false;
        });

        return true;
    }
}
