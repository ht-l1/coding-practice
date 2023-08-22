#define a function containsDuplicate(nums) that takes an integer array nums as input.
#create an empty set called seen to keep track of the numbers we have encountered so far.

class Solution:
    def containsDuplicate(self, nums: List[int]) -> bool:

        seen = set()
        
        for num in nums:
            if num in seen:
                return True
            seen.add(num)
        return False