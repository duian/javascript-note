import java.util.Scanner;

public class HelloWorldApp {
    public static int mystery(int a, int b) {
        if (b == 0) return 1;
        if (b % 2 == 0) return mystery(a * a, b / 2);
        return mystery(a * a, b / 2) * a;
    }

    public static double binomial(int N, int k, double p) {
        if (N == 0 && k == 0) return 1.0;
        if (N < 0 || k < 0) return 0.0;

        return (1.0 - p) * binomial(N - 1, k, p) + p * binomial(N - 1, k - 1, p);
    }

    public static void main(String[] args) {
//        int a = (0 + 15) / 2;
////        double b = 2.0e-6 * 1000000000.1;
////        boolean c = true && false || true && true;
////        System.out.printf("a: %d, b: %f, c: %b", a, b, c);

//        System.out.printf("Please input 3 integer number");
//7 un
//        Scanner sc1 = new Scanner(System.in);
//        String s1 = sc1.next();
//
//        Scanner sc2 = new Scanner(System.in);
//        String s2 = sc2.next();
//
//        Scanner sc3 = new Scanner(System.in);
//        String s3 = sc3.next();
//
//        int a = new Integer(s1);
//        int b = new Integer(s2);
//        int c = new Integer(s3);
//        if ((a == b) && (c == b)) {
//            System.out.printf("equal");
//        } else {
//            System.out.printf("not equal");
//        }
//            int f = 0;
//            int g = 1;
//            for (int i = 0; i <= 15; i++)
//            {
//                System.out.println(f);
//                f = f + g;
//                g = f - g;
//            }

//        System.out.printf("mystery(2, 25) is: %d, mystery(3, 11) is: %d", mystery(2, 25), mystery(3, 11));


    }
}