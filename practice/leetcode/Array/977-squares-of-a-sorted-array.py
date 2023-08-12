# pointers
# find the largest, and then next largest, etc
# left pointer stars with most left
# right pointer starts with most riht
# they both move toward the middle

class Solution:
    def sortedSquares(self, nums: List[int]) -> List[int]:

        res = []
        l, r = 0, len(nums) - 1

        while l <= r:  #before they meet in the middle
            if nums[l] * nums[l] > nums[r] * nums[r]:
                res.append(nums[l]*nums[l])
                l += 1
            else: 
                res.append(nums[r] * nums[r])
                r -= 1

        return res[::-1]  #reverse the array


