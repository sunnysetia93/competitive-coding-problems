package competition.entities;

public class Street {
    int startIntersection;
    int endIntersection;
    String name;
    int timeToCross;
    int numCars;

    public Street(final int startIntersection,
                  final int endIntersection,
                  final String name,
                  final int timeToCross) {

        this.startIntersection = startIntersection;
        this.endIntersection = endIntersection;
        this.name = name;
        this.timeToCross = timeToCross;
    }

    public int getStartIntersection() {

        return startIntersection;
    }

    public void setStartIntersection(final int startIntersection) {

        this.startIntersection = startIntersection;
    }

    public int getEndIntersection() {

        return endIntersection;
    }

    public void setEndIntersection(final int endIntersection) {

        this.endIntersection = endIntersection;
    }

    public String getName() {

        return name;
    }

    public void setName(final String name) {

        this.name = name;
    }

    public int getTimeToCross() {

        return timeToCross;
    }

    public void setTimeToCross(final int timeToCross) {

        this.timeToCross = timeToCross;
    }

    public int getNumCars() {

        return numCars;
    }

    public void setNumCars(final int numCars) {

        this.numCars = numCars;
    }

    public void incrementNumCars() {
        this.numCars++;
    }
}
