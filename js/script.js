let money, time;

function start(){
     money = +prompt("Ваш бюджет на месяц?");
     time = prompt("Введите дату в формате YYYY-MM-DD");

     while(isNaN(money) || money == '' || money == null) {
        money = +prompt("Ваш бюджет на месяц?");
    }
        
}

start();


let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    saving: true,
};

function detectDayBudget() {
    appData.moneyPerDay = (appData.budget / 30).toFixed();
    alert("Бюджет на 1 день: " + appData.moneyPerDay);     
}

function detectLevel() {
    if (appData.moneyPerDay < 100) {
        console.log("Минимальный уровень достатка");
}   else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
        console.log("Средний уровень достатка");
}   else if (appData.moneyPerDay > 2000) {
        console.log("Высокий уровень достатка");
}   else {
        console.log("Произошла ошибка");
}
}

detectDayBudget();
detectLevel();

function chooseExpenses() {
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
                i = i - 1;
            }
        }
}

chooseExpenses();



function checkSavings() {
    if (appData.saving == true) {
        let save = +prompt("Какова сумма накоплений?"),
            percent = +prompt("Каков процент?");
        
        appData.monthIncome = save/100/12*percent;
        alert("Доход в месяц: " +appData.monthIncome);
    }
}

checkSavings();

function chooseOptExpenses() {
    for (let i = 1; i <= 3; i++) {
        let outcome = prompt("Статья необязательных расходов?");
        appData.optionalExpenses[i] = outcome;
        
    }
}
