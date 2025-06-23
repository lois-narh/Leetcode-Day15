/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let left = 0;
    let right = height.length - 1;
    let maxArea = 0;
    
    while (left < right) {
        // Calculate width and height
        const width = right - left;
        const currentHeight = Math.min(height[left], height[right]);
        // Update maxArea if current area is larger
        maxArea = Math.max(maxArea, width * currentHeight);
        
        // Move the pointer with the shorter height
        if (height[left] <= height[right]) {
            left++;
        } else {
            right--;
        }
    }
    
    return maxArea;
};