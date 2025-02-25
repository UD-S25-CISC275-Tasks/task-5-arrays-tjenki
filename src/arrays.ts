/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    let newnum: number[] = [];
    if (numbers.length === 1) {
        newnum.push(numbers[0]);
        newnum.push(numbers[0]);
        return newnum;
    }
    if (numbers.length > 1) {
        newnum.push(numbers[0]);
        newnum.push(numbers[numbers.length - 1]);
        return newnum;
    }
    return numbers;
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    return numbers.map((num: number): number => num * 3);
    //return numbers;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    return numbers.map((num: string): number =>
        isNaN(parseInt(num)) ? 0 : parseInt(num),
    );
    //return [];
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    return amounts.map((amount) => {
        if (amount.charAt(0) === "$") {
            amount = amount.slice(1);
        }
        return isNaN(parseInt(amount)) ? 0 : parseInt(amount);
    });
    //return [];
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    //messages=messages.filter((message: string): boolean => message.charAt(-1)!=="?")
    return messages
        .filter((message) => message.slice(-1) !== "?")
        .map((message) =>
            message.slice(-1) === "!" ? message.toUpperCase() : message,
        );
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    words = words.filter((word: string): boolean => word.length < 4);
    return words.length;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    return colors.every(
        (color: string) =>
            color === "red" || color === "blue" || color === "green",
    );
    //return false;
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    if (addends.length === 0) {
        return "0=0";
    }
    let sum: number = addends.reduce((num1, num2) => num1 + num2, 0);
    return `${sum}=${addends.join("+")}`;
}

/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, 17]
 */
export function injectPositive(values: number[]): number[] {
    let sum = 0;
    let negative = values.findIndex((num) => num < 0);
    if (negative === -1) {
        sum = values.reduce((num1, num2) => num1 + num2, 0);
        return [...values, sum];
    }
    sum = values.slice(0, negative).reduce((num1, num2) => num1 + num2, 0);
    return [
        ...values.slice(0, negative + 1),
        sum,
        ...values.slice(negative + 1),
    ];
}
