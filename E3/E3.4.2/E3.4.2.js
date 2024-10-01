/*
Написать функцию, которая принимает на входе любое число (но не больше 1 000), определяет,
является ли оно простым, и выводит простое число или нет. Если введено больше 1 000,
то выводится сообщение, что данные неверны. Обратите внимание на числа 0 и 1.
*/


simpleNumber(null);
simpleNumber(NaN);
simpleNumber(undefined);
simpleNumber('str');
simpleNumber(-5);
simpleNumber(0);
simpleNumber(1);
simpleNumber(1010);
simpleNumber(1000);
simpleNumber(999);
simpleNumber(7);
simpleNumber(3);
simpleNumber(Infinity);
simpleNumber(0.9);
simpleNumber(-0.5);

function simpleNumber(input) {
    let invalidTypes = [
        NaN,
        Infinity,
        -Infinity,
        undefined
    ];

    if (
        typeof(input) == 'number'
        && !invalidTypes.includes(input)
    ) {
        if (input > 1000) {
            console.log(`Число ${input} больше тысячи`);
        }
        else if (input < 1) {
            console.log(`Число ${input} не является простым`);
        }
        else {
            // проверяем до квадратного корня - дальше нет смысла
            let divider = 2;
            const limit = Math.sqrt(input);

            while (divider <= limit) {
                if (input % divider === 0) {
                    console.log(`Число ${input} не является простым`);
                    return;
                };
                ++divider;
            };
            
            console.log(`Число ${input} является простым`);
        };
    }
    else {
        console.log(`Неверный аргумент функции: ${input}`);
    };
};
