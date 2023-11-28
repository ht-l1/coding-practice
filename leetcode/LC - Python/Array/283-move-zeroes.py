# move all the 0's to the end of array
# do this in-place without making a copy of the array

# nums = [0,1,0,3,12]
# output: [1,3,12,0,0]

# two pointers solution
# (1)left pointer start at 0
# everytime we swap, we increment the positon of the left pointer
# (2) right pointer is going to iternate through all the positions
# no matter we swap or not, we increment the position of the right pointer
# 

class Solution:
    def moveZeroes(self, nums: List[int]) -> None:
        
        l = 0
        for r in range(len(nums)):
            if nums[r]:   #if the number is not 0, we swap it
                nums[l], nums[r] = nums[r], nums[l]
                l += 1
        return nums