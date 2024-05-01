def lengthOfLongestSubstring(s):
  subs = []
  length = 0
  max_length = 0
  for i in range(len(s)-1):
    # if (i + 1 <= len(s)):
    if (s[i] == s[i+1]):
      if (s[i] not in subs):
        subs.append(s[i])
        length = len(subs)
        subs.clear()
        max_length = max(max_length, length)
    else:
      if (s[i] not in subs):
        subs.append(s[i])
        length = len(subs)
        max_length = max(max_length, length)
  return max_length

print(lengthOfLongestSubstring("abcabcbb"))
print(lengthOfLongestSubstring("bbbbb"))
print(lengthOfLongestSubstring("pwwkew"))