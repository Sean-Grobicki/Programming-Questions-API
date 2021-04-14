public class TraceQuestion 
{
    public static void main(String[] args)
    {
//Intialisers go Here
         recursiveFunction(5);
    }

    public static void recursiveFunction(int counter)
    {
        if(counter <= 0)
        {
            return ;
        }
        else
        {
// Generated Code Goes Here
            recursiveFunction(counter - 1);
        }
    }
}