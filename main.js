"use strict"

function getSum(n)
{
    if (n === 0)
        return n;
    else
        return n + getSum(n - 1);
}

function pow(n, e)
{
    if (n === 0 || n === 1)
        return 1;
    else if (e === 1)
        return n;
    else
        return n * pow(n, e - 1);
}

function fact(n)
{
    if (n === 1)
        return 1;
    else 
        return n * fact(n - 1);
}

function arrayProduct(array)
{
    if (array.length === 0)
        return 1; //avoid returning NaN by returning a 1
    
    return array.pop() * arrayProduct(array);
}

function contains(obj, target)
{
    for (let key in obj)
    {
        if (typeof obj[key] === "object")
            return contains(obj[key], target);

        if (obj[key] === target)
            return true
    }

    return false

}

function integerCount(array)
{
    if (array.length === 0)
        return 0;

    let total = 0;
    let last = array.pop()

    if (Array.isArray(last))
        total += integerCount(last)
    else if (Number.isInteger(last))
        total++;

    return total + integerCount(array);
}

function sumSquares(array)
{
    if (array.length === 0)
        return 0;

    let total = 0;
    let last = array.pop();

    if (Array.isArray(last))
        total += sumSquares(last);
    else
        total += last ** 2;
    
    return total + sumSquares(array);
}

function replicate(value, iterations)
{
    if (iterations <= 0)
        return [];

    return [value].concat(replicate(value, iterations - 1));
}

function fibonacci(limit)
{
    const sequence = [];

    for (let i = 0 ; i < limit ; i++)
    {
        if (i === 0)
            sequence.push(0);
        else if (i === 1)
            sequence.push(1);
        else
            sequence.push(sequence[i-1] + sequence[i - 2]);
    }

    return sequence;
}

function fibonacciRecursive(limit)
{
    return limit < 2 ? limit : fibonacciRecursive(limit-1) + fibonacciRecursive(limit-2);
}

function mergeSort(unsorted)
{
    if (unsorted.length < 2)
        return unsorted;

    const middleIndex = Math.floor(unsorted.length / 2);
    const leftHalf = unsorted.splice(0, middleIndex);

    return mergeArrays(mergeSort(leftHalf), mergeSort(unsorted));
}

function mergeArrays(leftHalf, rightHalf)
{
    let array = [];
    while (leftHalf.length && rightHalf.length)
    {
        if (leftHalf[0] < rightHalf[0])
        {
            array.push(leftHalf.shift());
        }
        else
        {
            array.push(rightHalf.shift());
        }
    }

    return [...array, ...leftHalf, ...rightHalf];
}

function randomArray(size)
{
    let array = []
    for (let i = 0; i <= size ; i++)
    {
        array.push(Math.floor(Math.random() * 100))
    }

    return array;
}

console.log(mergeSort(randomArray(10)))