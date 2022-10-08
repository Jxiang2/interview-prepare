// findScooterDistance(23, [4, 7, 14]) means there are scooters at point 4, 7, 14,
// the agent need to travel from 0 to 23 
// scooters can travel 10 distance
// find the total distance traveled with scooters

package code;

import java.util.Arrays;

class FindScooterDistance {
    public int findScooterDistance(int finish, int[] scooterArr) {
        int totalDistance = 0;
        int scootterDistance = 0;

        Arrays.sort(scooterArr);
        for (int scooter : scooterArr) {
            if (totalDistance < finish) {
                if (totalDistance <= scooter && finish - scooter >= 10) {
                    totalDistance = scooter + 10;
                    scootterDistance += 10;
                } else if (totalDistance <= scooter && finish - scooter < 10) {
                    totalDistance = finish;
                    scootterDistance += finish - scooter;
                }
            } else
                break;
        }
        return scootterDistance;
    }
}
