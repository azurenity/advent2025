def decypher():
    f = open('input.txt')
    dial = 50
    times = 0

    for line in f: # since i have the lines, all i need is the function
        direction = line[0]
        magnitude = int(line[1:]) % 100
        if direction == 'L':
            dial -= magnitude 
            dial %= 100
        else:
            dial += magnitude 
            dial %= 100

        if dial == 0:
            times += 1

    return times

print(decypher())