let startBtn = document.querySelector('#start'),
    budgetValue = document.querySelectorAll('.budget-value')[0],
    dayBudget = document.querySelectorAll('.daybudget-value')[0],
    level = document.querySelectorAll('.level-value')[0],
    expensesValue = document.querySelectorAll('.expenses-value')[0],
    optionalExpenses = document.querySelectorAll('.optionalexpenses-value')[0],
    incomeValue = document.querySelectorAll('.income-value')[0],
    monthSavings = document.querySelectorAll('.monthsavings-value')[0],
    yearSavings = document.querySelectorAll('.yearsavings-value')[0],
    expensesItem = document.getElementsByClassName('expenses-item'),
    expensesBtn = document.getElementsByTagName('button')[0],
    optionalExpensesBtn = document.getElementsByTagName('button')[1],
    calculate = document.getElementsByTagName('button')[2],
    optionalExpensesItem = document.getElementsByClassName('optionalexpenses-item'),
    chooseIncome = document.querySelector('#income'),
    checkboxSavings = document.querySelector('#savings'),
    sumValue = document.querySelector('#sum'),
    percentValue = document.querySelector('#percent'),
    yearValue = document.querySelector('.year-value'),
    monthValue = document.querySelector('.month-value'),
    dayValue = document.querySelector('.day-value');


    let money, time;


startBtn.addEventListener('click', function() {
    expensesBtn.disabled = false; 
    optionalExpensesBtn.disabled = false;
    calculate.disabled = false;
    time = prompt("Введите дату в формате YYYY-MM-DD");
    money = +prompt("Ваш бюджет на месяц?");
    while(isNaN(money) || money == '' || money == null) {
        money = +prompt("Ваш бюджет на месяц?");
    }
        appData.budget = money;
        appData.time = time;
        budgetValue.textContent = money.toFixed();
        yearValue.value = new Date(Date.parse(time)).getFullYear();
        monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
        dayValue.value = new Date(Date.parse(time)).getDate();
});

expensesBtn.addEventListener('click', function() {
    let sum = 0;
    for (let i = 0; i < expensesItem.length; i++){
        let compulsoryExpens = expensesItem[i].value,
            howMuch = expensesItem[++i].value;
    
        if (typeof(compulsoryExpens) === 'string' && typeof(compulsoryExpens) != null
            && typeof(howMuch) != null  && compulsoryExpens != '' && howMuch != '') {
            appData.expenses[compulsoryExpens] = howMuch;
            sum += +howMuch;
            appData.expensesSum = sum;
        }   
        else {
            alert("Неверный ввод! Попробуйте заново");
                i = i - 1;
        }
    }
    expensesValue.textContent = sum;
});

optionalExpensesBtn.addEventListener('click', function() {
    for (let i = 0; i < optionalExpensesItem.length; i++) {
        let opt = optionalExpensesItem[i].value;
        appData.optionalExpenses[i] = opt;
        optionalExpenses.textContent += appData.optionalExpenses[i] + ' ';
    }
});

chooseIncome.addEventListener('input', function() {
    incomeValue.textContent = chooseIncome.value;
    appData.income = chooseIncome.value.split(', ');
});

calculate.addEventListener('click', function() {
    if(appData.budget != undefined){
    appData.moneyPerDay = ((appData.budget - appData.expensesSum) / 30).toFixed();
    dayBudget.textContent = appData.moneyPerDay;
    
    if (appData.moneyPerDay < 100) {
        level.textContent = "Минимальный уровень достатка";
}   else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
        level.textContent = "Средний уровень достатка";
}   else if (appData.moneyPerDay > 2000) {
        level.textContent = "Высокий уровень достатка";
}   else {
        level.textContent = "Произошла ошибка";
        }
    } else {
        dayBudget.textContent = 'Произошла ошибка!';
    }
});

checkboxSavings.addEventListener('click', function() {
    if(appData.saving == true){
        appData.saving = false;
    } else {
        appData.saving = true;
    }
});

sumValue.addEventListener('input', function() {
    if (appData.saving == true) {
        let sum = +sumValue.value,
            percent = +percentValue.value;
        
        appData.monthIncome = sum/100/12*percent;
        monthSavings.textContent = appData.monthIncome;
        appData.yearIncome = sum/100*percent;
        yearSavings.textContent = appData.yearIncome;
    }
});

percentValue.addEventListener('input', function() {
    if (appData.saving == true) {
        let sum = +sumValue.value,
            percent = +percentValue.value;
        
        appData.monthIncome = sum/100/12*percent;
        monthSavings.textContent = appData.monthIncome;
        appData.yearIncome = sum/100*percent;
        yearSavings.textContent = appData.yearIncome;
    }
});

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    saving: false,
};


   

    // chooseIncome: function() {
    //     function newIncome() {
    //     let items = prompt("Что принесет дополнительный доход? Перечислите через запятую", "");
    //     if (typeof(items) === 'string' && typeof(items) != null && items != "") {
    //         appData.income = items.split(", ");
    //         appData.income.push(prompt("Может что-то забыли?", ''));
    //         appData.income.sort();
            
    //     }  
    //     else {
    //         alert("Ошибка ввода!");
    //         newIncome();
    //         }
    //     }
    //     newIncome();
        
    //     appData.income.forEach((a, index)  => {  
    //         alert("Способ дополнительного заработка: " + index + ': ' + a);
    //      });
    
    // }


