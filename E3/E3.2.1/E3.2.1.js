/*
В прошлом модуле в разделе «Циклы» вы выполняли следующее задание:
Дан массив. Нужно вывести в консоль количество чётных и нечётных элементов в массиве.
Если в массиве есть нулевой элемент, то он учитывается и выводится отдельно.
При выполнении задания необходимо учесть, что массив может содержать не только числа, но и,
например, знаки, null и так далее.

На этот раз оформите решение в виде функции, постарайтесь дать этой функции корректное название,
вызовите функцию, проанализируйте синтаксис.
*/

let arr = [
    1,
    18,
    0,
    NaN,
    false,
    689,
    22,
    24,
    'qwerty',
    -11659,
    7,
    0,
    0,
    Infinity,
    undefined
];

zeroOddEvenCount(arr);

function zeroOddEvenCount(array) {
    let oddCount = 0;
    let evenCount = 0;
    let zeroCount = 0;
    let invalidCount = 0;

    let invalidTypes = [
        NaN,
        Infinity,
        -Infinity,
        undefined
    ];

    for (let item of array) {
        if (
            typeof(item) == 'number'
            && !invalidTypes.includes(item)
        ) {
            if (item == 0) {
                ++zeroCount;
            }
            else if (item % 2 == 0) {
                ++evenCount;
            }
            else {
                ++oddCount;
            }
        }
        else {
            ++invalidCount;
        };
    };

    console.log(`Нечётных чисел: ${oddCount}`);
    console.log(`Чётных чисел: ${evenCount}`);
    console.log(`Нулей: ${zeroCount}`);
    console.log(`Неверных вргументов: ${invalidCount}`);
};
