# find the minimum number of conference rooms required

# two pointers 
# start = [0,5,10]
# end = [10,15,30]

def minMeetingRooms(self, intervals):
    start = sorted([i.start for i in intervals])
    end = sorted([i.end for i in intervals])

    res, count = 0, 0
    s, e = 0, 0
    while s < len(intervals):
        if start[s] < end[e]:
            s += 1
            count += 1
        else:
            e += 1
            count -= 1
        res = max(res, count)
    return res