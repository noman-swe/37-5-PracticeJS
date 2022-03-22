const baperTK = 100000;
function PatriChai(age, earning) {
    // console.log(trueAge);
    var decision = canMarry(15000);
    console.log(decision);
    console.log(age);
    console.log(earning);

    const trueAge = age + 7;

    function canMarry(expense) {
        const remaining = earning - expense;
        const totalTK = baperTK + remaining;
        console.log('Total Taka: ' , totalTK);
        if (remaining > 1000) {
            return true;
        }
        return false;
    }
}

PatriChai(21, 50000);