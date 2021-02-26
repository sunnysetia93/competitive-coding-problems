package competition.entities;

import java.util.ArrayList;
import java.util.List;

public class Car {

    int pathLen;
    List<String> path;

    public Car(final int pathLen) {

        this.pathLen = pathLen;
        this.path = new ArrayList<>(pathLen);
    }

    public int getPathLen() {

        return pathLen;
    }

    public void setPathLen(final int pathLen) {

        this.pathLen = pathLen;
    }

    public List<String> getPath() {

        return path;
    }

    public void setPath(final List<String> path) {

        this.path = path;
    }
}
