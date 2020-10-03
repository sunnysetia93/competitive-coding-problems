class ParkingSystem {
    vector<int> slotsLeft;
public:
    ParkingSystem(int big, int medium, int small) {
        slotsLeft.resize (4, 0);
        slotsLeft[1] = big;
        slotsLeft[2] = medium;
        slotsLeft[3] = small;
    }
    
    bool addCar(int carType) {
        if (slotsLeft[carType]) {
            --slotsLeft[carType];
            return true;
        }
        return false;
    }
};

/**
 * Your ParkingSystem object will be instantiated and called as such:
 * ParkingSystem* obj = new ParkingSystem(big, medium, small);
 * bool param_1 = obj->addCar(carType);
 */