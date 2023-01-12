file = open("day1_input.txt", "r")
lines = file.readlines()

#part 1

results = []
threemax = []
elfTotal = 0

for line in lines:
    if line != "\n":
        elfTotal += int(line)
    else:
        results.append(elfTotal)
        elfTotal = 0

print("max one elf", max(results))

#part 2

elfTotal = 0

for x in range(3):
    elfTotal += results.pop(results.index(max(results)))

print("max three elves", elfTotal)