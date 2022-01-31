# findScooterDistance(23, [7, 4, 14]) means there are scooters at point 4, 7, 14,
# the agent need to travel from 0 to 23
# scooters can travel 10 distance
# find the total distance traveled with scooters

def findScooterDistance(finish, scooterAry: list):

    scooter_distance = 0
    travelled_distance = 0

    scooterAry.sort()

    for i in range(len(scooterAry)):
        if scooterAry[i] >= travelled_distance:
            if scooterAry[i] + 10 <= finish:
                scooter_distance += 10
                travelled_distance = scooterAry[i] + 10
            else:
                scooter_distance += finish - scooterAry[i]
                travelled_distance = finish
                break
        else:
            print(f'passed the scooter at position {scooterAry[i]}')
    return scooter_distance


print(findScooterDistance(30, [4, 7, 14, 20, 25]))
