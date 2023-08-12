# Given an array of meeting time intervals consisting of start and end times[[s1,e1],[s2,e2],...](si< ei), determine if a person could attend all meetings.

def can_attend_all_meetings(intervals):
    # Sort the intervals based on their start times
    intervals.sort(key=lambda x: x[0])

    # Check for overlaps in adjacent intervals
    for i in range(1, len(intervals)):
        if intervals[i][0] < intervals[i-1][1]:
            return False

    return True