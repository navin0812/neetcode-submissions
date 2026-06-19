/**
 * @param {number[]} nums
 * @return {boolean}
 */

class Solution {
    hasDuplicate(nums) {
        const hash = {};

        for (let i = 0; i < nums.length; i++) {
            const hashKey = nums[i];
   
            if (hash[hashKey] || hash[hashKey] === 0) {
                return true;
            }

            hash[hashKey] = nums[i];
        }
        return false;
    }
}
