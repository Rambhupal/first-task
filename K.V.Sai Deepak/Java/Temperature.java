import java.util.Scanner;

public class Temperature {

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        System.out.print("Enter temperature: ");
        double temp = sc.nextDouble();

        System.out.print("Enter C or F: ");
        char ch = sc.next().charAt(0);

        if (ch == 'C' || ch == 'c') {

            double f = (temp * 9 / 5) + 32;

            System.out.println("Fahrenheit = " + f);

        } else if (ch == 'F' || ch == 'f') {

            double c = (temp - 32) * 5 / 9;

            System.out.println("Celsius = " + c);

        } else {

            System.out.println("Invalid choice");
        }
    }
}
