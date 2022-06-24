let nums = [2, 9, 14, 15]

let target = 9

const twoSum = function (nums, target) {
    let hm = {}                            // setting an empty object to hm(hashmap) to store previous indences in an array  
    for (let i = 0; i < nums.length; i++) {  // the inital for loop that goes through the array
        if (hm[nums[i]]) {
            return [hm[nums[i]], i]
        }
        hm[target - nums[i]] = i
        console.log(hm)
    }
}
console.log(twoSum(nums, target))