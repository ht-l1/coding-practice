class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:

        # hashmap that mapes val:index
        prevMap = {} 

        for i, n in enumerate(nums):    #index i and element n
            diff = target - n
            if diff in prevMap:
                return [prevMap[diff], i]
            prevMap[n] = i