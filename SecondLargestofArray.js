function getSecondLargest(nums) {
    let first = num[0];
    let second = -1;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > first) {
            second = first;
            first = nums[i];
        }
        if (nums[i] > second && nums[i] < first) {
            second = nums[i];
        }
    }
    return second;
}
// will be reviewed again
var num = [78, 88, 42, 56, 99, 10, 36];
var result = getSecondLargest(num);
console.log(result);