# Given an array of meeting time intervals consisting of start and end times[[s1,e1],[s2,e2],...](si< ei), determine if a person could attend all meetings.

def can_attend_meetings(self, intervals):
    # Sort the intervals based on their start times
    intervals.sort(key=lambda i: i.start)

    # Check for overlaps in adjacent intervals
    # if the start time (index) of the current meeting is earlier than the ending time of the previous meeting
    for i in range(1, len(intervals)):
        i1 = intervals[i - 1]
        i2 = intervals[1]

        if i1.end > i2.start:
            return False
        
        return True