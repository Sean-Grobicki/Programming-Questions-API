public class Template3 {

    public static void main(String[] args)
    {
        int number1 = 5;
        int number2 = 5;
        int total = 0;
        for(int index=0; index < number2; index++)
        {
            total += number1 + index;
        }
        System.out.println(total);
    }
}