let money = prompt("Ваш бюджет на месяц?");
let time = prompt("Введите дату в формате YYYY-MM-DD");
let compulsoryExpens;
let howMuch;
for (let i = 0; i < 2; i++){
     compulsoryExpens = prompt("Введите обязательную статью расходов в этом месяце");
     howMuch = prompt('Во сколько обойдется?');
}

let appData = {
    money,
    timeData: time,
    expenses: {
        compulsoryExpens: howMuch,
    },
    optionalExpenses: {

    },
    income: [],
    saving: false,
};



alert("Бюджет на 1 день: " + money / 30);