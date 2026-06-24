class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const hash = new Map();
        const bucket =  Array.from({length: nums.length + 1 }, () => [])
        for (let i = 0; i < nums.length; i++) {
            
            if (!hash.has(nums[i])) {
                hash.set(nums[i], 0);
            }

            hash.set(nums[i], hash.get(nums[i]) + 1);
        }
        hash.forEach((count, num) => {
            bucket[count].push(num)
        })

        const final = [];
        for(let i = bucket.length - 1; i > 0; i--) {
            for(const num of bucket[i]) {
                final.push(num);
                if(final.length === k) {
                    return final;
                }
            }
        } 
    }
}
