// masala 1

function firstLast6(nums){
    if(nums[0] == 6 || nums[nums.length - 1] == 6) {
      return  true
    } else {
      return false
    }
}
firstLast6([6, 2 , 3, 1])

// masala 2

function sameFirstLast(nums){
    if(nums.length >= 1 && nums[nums.length - 1] == nums[0]){
      return true
    } else {
      return false
    }
}
sameFirstLast([6, 2 , 3, 1])

// masala 3

function makePi(){
    return [3, 1, 4]
}

// masala 4

function commonEnd(a, b){
    if(a.length >= 1 && b.length >= 1 && (a[0] == b[0] || a[a.length - 1] == b[b.length - 1])) {
      return true
    } else {
      return false
    }
}
commonEnd([1,2], [1,2,3,4,4])

// masala 5

function sum3(nums){
    let result = 0;
    nums.forEach((num) => {
      result += num
    })
    return result
}
sum3([1,2,3])

// masala 6

function rotateLeft3(nums){
    nums.push(nums.shift())
    return nums
}
rotateLeft3([1,2,3])

// masala 7

function reverse3(nums){
    nums.reverse()
    return nums
}
reverse3([1,2,3,4,5])

// masala 8

function maxEnd3(nums){
    let larger = nums[0] > nums[nums.length - 1] ? nums[0] : nums[nums.length - 1]
    return [larger, larger, larger]
}
maxEnd3([1,2,3])