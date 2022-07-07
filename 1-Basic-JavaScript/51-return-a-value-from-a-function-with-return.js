/*
    We can pass values into a function with arguments. You can use a return 
    statement to send a value back out of a function.

    Example

    function plusThree(num) {
    return num + 3;
    }

    const answer = plusThree(5);
    answer has the value 8.

    plusThree takes an argument for num and returns a value equal to num + 3.

    Create a function timesFive that accepts one argument, multiplies it by 5, 
    and returns the new value.
*/

function timesFive(multiply)
{
    return multiply*5;
}

timesFive(5);
timesFive(2);
timesFive(0);