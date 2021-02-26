package competition;

import competition.entities.Car;
import competition.entities.Intersection;
import competition.entities.Street;

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class Submission {

    private int MAX_GREEN_TIME;

    List<Car> carsData = new ArrayList<>();
    List<Intersection> intersectionData = new ArrayList<>();
    Map<String, Street> streetsData = new HashMap<>();

    private void clearData() {
        carsData.clear();
        intersectionData.clear();
        streetsData.clear();
    }

    public void fetchInput(String inputFile) throws IOException {
        BufferedReader br = new BufferedReader(new FileReader(inputFile));

        String[] q = br.readLine().trim().split(" ");
        final int totalTime = Integer.parseInt(q[0]);
        MAX_GREEN_TIME = totalTime;

        final int numIntersections = Integer.parseInt(q[1]);
        final int numStreets = Integer.parseInt(q[2]);
        final int numCars = Integer.parseInt(q[3]);
        final int bonusPoints = Integer.parseInt(q[4]);

        for (int i = 0; i < numIntersections; i++){
            intersectionData.add(new Intersection(i));
        }

        for (int i = 0; i < numStreets; i++) {
            String[] s = br.readLine().trim().split(" ");
            Street street = new Street(Integer.parseInt(s[0]), Integer.parseInt(s[1]), s[2], Integer.parseInt(s[3]));
            streetsData.put(street.getName(), street);

            intersectionData.get(street.getEndIntersection()).getIncomingStreets().add(street);
        }

        for (int i = 0; i < numCars; i++) {
            String[] s = br.readLine().trim().split(" ");
            Car car = new Car(Integer.parseInt(s[0]));
            for (int j = 1; j <= car.getPathLen(); j++) {
                car.getPath().add(s[j]);
                streetsData.get(s[j]).incrementNumCars();
            }
            carsData.add(car);
        }
        br.close();
    }

    void sortBaseOnNumberOfCarsOnStreet(Intersection intersection) {
        Comparator<Street> byNumOfCars = Comparator.comparing(Street::getNumCars);
        intersection.getIncomingStreets().sort(byNumOfCars);
    }

    void sortBaseOnTimeToCross(Intersection intersection) {
        Comparator<Street> byTimeToCross = Comparator.comparing(Street::getTimeToCross);
        intersection.getIncomingStreets().sort(byTimeToCross);
        Collections.reverse(intersection.getIncomingStreets());
    }

    void solve(String inputFile, String outputFile) throws IOException {

        clearData();
        fetchInput(inputFile);

        int numOutputIntersections = 0;
        StringBuilder sb = new StringBuilder();
        for (Intersection intersection : intersectionData) {
            sortBaseOnTimeToCross(intersection);
//            sortBaseOnNumberOfCarsOnStreet(intersection);

            sb.append(intersection.getId()).append("\n");
            sb.append(intersection.getIncomingStreets().size()).append("\n");
            int greenTime = 0, prevNumCars = 0;
            for (Street street : intersection.getIncomingStreets()) {
                if (prevNumCars < street.getNumCars())
                    greenTime = Math.min(greenTime + 1, MAX_GREEN_TIME);
                if (greenTime > 0) {
                    sb.append(street.getName()).append(" ").append(greenTime).append("\n");
                }
                prevNumCars = street.getNumCars();
            }
            if (greenTime > 0) {
                numOutputIntersections++;
            }
        }

        PrintWriter ot = new PrintWriter(outputFile);
        ot.println(numOutputIntersections);
        ot.print(sb.toString());
        ot.close();
    }
}
