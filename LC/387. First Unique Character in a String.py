# 387. First Unique Character in a String
# Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.

class Solution:
    def firstUniqChar(self, s: str) -> int:
        for i,c in enumerate(s):
            if s.count(c)==1:
                return i
                break
        return -1

# class Solution: defines a Python class named "Solution." 

# def firstUniqChar(self, s: str) -> int: defines a method named "firstUniqChar" inside the "Solution" class. The method takes a single argument "s," which is expected to be a string (str type). The -> int indicates that the method will return an integer value.

# for i, c in enumerate(s):: This line initiates a for-loop that iterates over each character in the input string "s." The enumerate function provides both the index (i) and the character (c) of the string element at that index.

# if s.count(c) == 1:: This line checks if the count of the character c in the string s is equal to 1. In other words, it checks if the character is unique in the string (occurs only once).

# return i: If the condition in the previous line is met, it means we have found the first unique character in the string. The method immediately returns the index (i) of that unique character and exits the function.

# So, the purpose of this method is to find the index of the first unique character in the input string s. If a unique character is found, it returns its index; otherwise, it returns -1 to indicate that there are no unique characters in the string.