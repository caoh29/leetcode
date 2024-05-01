def addTwoNumbers(l1, l2):
  l3 = []
  x = len(l1) - len(l2)
  if x >= 0:
    for i in range(len(l2)):
      if (l1[i] + l2[i] >= 10):
        l3.append(l1[i] + l2[i] - 10)
        l1[i + 1] += 1
      else:
        l3.append(l1[i] + l2[i])
  
    for i in range(len(l2), len(l1)):
      if (l1[i] >= 10):
        l3.append(l1[i] - 10)
        if i + 1 < len(l1):
          l1[i + 1] += 1
        else:
          l3.append(1)
      else:
        l3.append(l1[i])
  return l3

print(addTwoNumbers([2,4,3], [5,6,4]))
print(addTwoNumbers([0], [0]))
print(addTwoNumbers([9,9,9,9,9,9,9], [9,9,9,9]))