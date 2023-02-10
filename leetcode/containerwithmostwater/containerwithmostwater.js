
var maxArea = function(height) {
    let maxWater = 0
    let left = 0
    let right = height.length - 1
    
    while (left < right){  // pointers do not intersect
      let width = right - left // width of our container
      let minHeight = Math.min(height[left], height[right]) // grabs the smaller pointer
      maxWater = Math.max(maxWater, width * minHeight) // grab the max between our old container and new container
      
      // move the shorter pointer towards the other end by one index
      if (height[left] > height[right]){
        right-- 
      } else {
        left++ 
      }
    }
    return maxWater
  }