class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let indexes = [];
        for (let i = 0; i < nums.length; i++) {
            let start = nums[i];

            for (let j = 0; j < nums.length; j++) {
                if (start + nums[j] === target && i !== j) {
                    indexes = [i, j];
                    return indexes;
                }
            }
        }
        return indexes;
    }
}
