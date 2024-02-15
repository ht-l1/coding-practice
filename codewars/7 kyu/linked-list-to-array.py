# lst is not the list itself. it is a pointer to a node

def list_to_array(lst):
  # initialize an empty list called `arr`
  # it will be used to store the values extracted from the linked list
    arr = []

  # loop continues as long as the current node 'lst' is not 'none'
    while lst != None:
        arr.append(lst.value)
      # move to the next node
        lst = lst.next
    return arr
