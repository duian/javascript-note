package com.company;
import java.util.Scanner;

/**
 * Java 基本类型
 * byte， short， int， long
 * float， double
 * char
 * boolean】】
 */
public class Main {

    public static int sum(int n) {
        int partialSum = 0;
        for (int i = 1; i <= n; i++) {
            partialSum += i * i * i;
        }

        return partialSum;
    }
    public static void main(String[] args) {
        // System.out.printf("sum is: %d", sum(4));

        int [] arr = new int[10];
        int [] newArr = new int [ arr.length * 2 ];
    }
}
