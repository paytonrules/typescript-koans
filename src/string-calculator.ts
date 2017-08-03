export class StringCalculator {

    public static add(input:string):number {
        return input
                .split(",")
                .filter(digit => digit.length > 0)
                .map(digit => parseInt(digit, 10))
                .reduce((acc, digit) => acc + digit, 0);
    }
}