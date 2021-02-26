package competition;

import java.util.ArrayList;
import java.util.List;

public class Main {

    private static final String INPUT_FILE_PATH = "/Users/bhavi.dhingra1/Own_Repos/competitive-coding-problems/GoogleHashCode/2021/competition/input/";
    private static final String OUTPUT_FILE_PATH = "/Users/bhavi.dhingra1/Own_Repos/competitive-coding-problems/GoogleHashCode/2021/competition/output/output_";

    public static void main(String[] args) {

        List<String> inputFiles = new ArrayList<>();
        inputFiles.add("a.txt");
        inputFiles.add("b.txt");
        inputFiles.add("c.txt");
        inputFiles.add("d.txt");
        inputFiles.add("e.txt");
        inputFiles.add("f.txt");

        try {
            Submission submission = new Submission();
            for (String inputFileName : inputFiles) {
                submission.solve(INPUT_FILE_PATH + inputFileName, OUTPUT_FILE_PATH + inputFileName);
            }
        }
        catch (Exception e) {
            e.printStackTrace();
        }
    }
}
