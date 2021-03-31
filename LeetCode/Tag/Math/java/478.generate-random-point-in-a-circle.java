/** Explanation:
 * https://leetcode.com/problems/generate-random-point-in-a-circle/discuss/154037/Polar-Coordinates-10-lines
 */

class Solution {
    double r, cx, cy;

    public Solution(double radius, double x_center, double y_center) {
        this.r = radius;
        this.cx = x_center;
        this.cy = y_center;
    }

    public double[] randPoint() {
        double rr = Math.sqrt(Math.random()) * r;
        double theta = Math.random() * Math.PI * 2.0;
        double px = cx + rr * Math.cos(theta);
        double py = cy + rr * Math.sin(theta);
        return new double[]{px, py};
    }
}