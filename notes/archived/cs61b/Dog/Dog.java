public class Dog {                       //declares a public class named 'Dog'
    public int weightInPounds;           //declares an instance variable named 'weightInPounds' of type `int`

    public Dog(int w) {                  //defines a constructor for the 'Dog' class - it creates a new object and passes the int parameter 'w'
        weightInPounds = w;              //assigns the value of the parameter 'w' to the variable 
    }

    public void makeNoise() {            //defines a method named 'makeNoise()'. void means it does not return anything.
        if (weightInPounds < 10) {
            System.out.println("yipyipyip!");
        } else if (weightInPounds < 30) {
            System.out.println("bark. bark.");
        } else {
            System.out.println("woof!");
        }    
    }
}