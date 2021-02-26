package competition.entities;

import java.util.ArrayList;
import java.util.List;

public class Intersection {

    int id;
    List<Street> incomingStreets = new ArrayList<>();

    public Intersection(int id) {
        this.id = id;
    }

    public List<Street> getIncomingStreets() {

        return incomingStreets;
    }

    public void setIncomingStreets(final List<Street> incomingStreets) {

        this.incomingStreets = incomingStreets;
    }

    public int getId() {

        return id;
    }

    public void setId(final int id) {

        this.id = id;
    }
}
