def compare(a, b):
    if not a and not b:
        return True
    if not a or not b:
        return False
    return (a.val == b.val) and compare(a.left, b.left) and compare(a.right, b.right)
