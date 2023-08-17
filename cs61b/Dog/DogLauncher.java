public class DogLauncher {
    public static void main(String[] args) {           //main method is the starting point for the program execution
        Dog d = new Dog(20);                           //the constructor creates a new 'Dog' named 'd' and initializes it with weight 20.
        d.makeNoise();
    }
}