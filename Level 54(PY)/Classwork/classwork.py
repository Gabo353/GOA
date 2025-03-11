#1
def angle(n):
    return (n-2)*180

#2
def solution(nums):
    if nums == None:
        return []
    else:
        return sorted(nums)

#3
def in_asc_order(arr):
    sorting = sorted(arr)
    if sorting == arr:
        return True
    else:
        return False