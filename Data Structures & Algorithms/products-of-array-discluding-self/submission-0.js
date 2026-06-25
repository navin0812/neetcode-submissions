class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const n = nums.length;
        const k = new Array(n).fill(1);
        const m = new Array(n).fill(1);
        const result = [];
        //left scan
        for (let i = 1; i < n; i++) {
            k[i] = k[i - 1] * nums[i - 1];
        }

        //right scan
        for (let j = n - 2; j >= 0; j--) {
            m[j] = m[j + 1] * nums[j + 1];
        }

        console.log(k, m);

        for (let r = 0; r < n; r++) {
            result.push(k[r] * m[r]);
        }

        return result;
    }
}
