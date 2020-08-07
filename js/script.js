let money = +prompt("Ваш бюджет на месяц?");
let time = prompt("Введите дату в формате YYYY-MM-DD");
let compulsoryExpens;
let howMuch;


let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    saving: false,
};


for (let i = 0; i < 2; i++){
    let compulsoryExpens = prompt("Введите обязательную статью расходов в этом месяце"),
         howMuch = prompt('Во сколько обойдется?');

    if (typeof(compulsoryExpens) === 'string' && typeof(compulsoryExpens) != null
        && typeof(howMuch) != null  && compulsoryExpens != '' && howMuch != '') {
        console.log("done");
        appData.compulsoryExpens = howMuch;
    }   
    else {
        alert("Неверный ввод! Попробуйте заново");
        do {
            compulsoryExpens = prompt("Введите обязательную статью расходов в этом месяце");
            howMuch = prompt('Во сколько обойдется?');
            } while (i <= 1);
        }
    }
appData.moneyPerDay = appData.budget / 30;

alert("Бюджет на 1 день: " + appData.moneyPerDay);