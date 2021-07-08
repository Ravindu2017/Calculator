let problem = 0;
let answer = document.getElementById("calculate");
let resp = document.getElementById("answer").innerHTML
let first = "";
let second = "";
let third = "";
let fourth = "";
let operator_1 = "";
let operator_2 = "";
let operator_3 = "";
let ans_1 = "";
let ans_2 = 0;
let ans_3 = 0;
let final = 0;
let bro = false;
let deca = "";
let joj = "";
let laf = "";
function logMessage(message) {
    /*document.getElementById("answer").innerHTML += message;*/
    document.getElementById("answer").innerHTML += message;
}

function logOneMessage(message) {
    /*document.getElementById("answer").innerHTML += message;*/
    document.getElementById("answer").innerHTML = "";
    document.getElementById("answer").innerHTML = message;
}


/*answer.addEventListener('keyup', (e) => {*/
answer.addEventListener('keypress', (e) => {


    /*console.log(typeof (first), first, "<== first ", typeof (second), second, "<== second", operator.length, operator, "<=== operator length", `${e.key}`);*/

    /**Check the keys if they are numbers, if they are proceed */
    if (parseFloat(`${e.key}`) >= 0 && parseFloat(`${e.key}`) <= 9) {
        /*console.log(typeof (`${e.key}`), parseFloat(`${e.key}`));*/
        /*if (first.length > 0 && second.length === 0)*/
        if (operator_1.length === 0 && ans_1.length === 0) {
            first += `${e.key}`;
            console.log("first = ", first);
        }
        else {
            second += `${e.key}`;
        }
        logMessage(`${e.key}`);
        console.log(first, " - first ", second, " - second ", third, " - third ", fourth, " - fourth", fourth.length, parseFloat(fourth.length));
    }



    /**if the enter/equal key is pressed calculate the given numbers (under 4) */
    /**put this above the operator condition since that only executes if fourth length is not assigned */
    else if ((`${e.key}`) === "Enter") {
        e.preventDefault();
        console.log("phuc1");
        first = parseFloat(first);
        ans_1 = parseFloat(ans_1);
        switch (operator_1) {
            case "+":
                second = parseFloat(second);
                ans_1 = first + second;
                /*logMessage(first);*/
                logOneMessage(ans_1);
                console.log("in too deep1", "first - ", first, " second - ", second, " ans ", ans_1);
                /*first = ans_1;*/
                /**first is assigned the numbers so it can be used for calculations */
                /**initializing the first is going to be annoying */
                first = ans_1;
                second = "";
                bro = true;
                /*ans_1 = 0;*/
                operator_1 = "";
                break;
            case "/":
                second = parseFloat(second);
                ans_1 = first / second;
                logOneMessage(ans_1);
                first = ans_1;
                second = "";
                /*ans_1 = 0;*/
                /*logMessage(first);*/
                console.log("in too deep2");
                operator_1 = "";
                break;
            case "*":
                second = parseFloat(second);
                ans_1 = first * second;
                first = ans_1;
                logOneMessage(ans_1);
                second = "";
                /*ans_1 = 0;*/
                /*logMessage(first);*/
                console.log("in too deep3");
                operator_1 = "";
                break;
            case "-":
                second = parseFloat(second);
                ans_1 = first - second;
                logOneMessage(ans_1);
                first = ans_1;
                second = "";
                /*ans_1 = 0;*/
                /*logMessage(first);*/
                console.log("in too deep4");
                operator_1 = "";
                break;
            default:
                console.log("alucard1", operator_1, operator_2, operator_3, typeof (operator_1), ans_1);
        }

        /*operator_1 = "";*/
        console.log("answer 1 ", ans_1, " answer 2 ", ans_2, " answer 3 ", ans_3);
        console.log("first", first, "second", second, "third", third, "fourth", fourth);
    }

    else if ((`${e.key}`) === "." || (`${e.key}`) === ",") {
        if (operator_1.length > 0) {
            if (second.toString().includes(".")) {
                second = second + "";
                console.log(second);
            }
            else {
                second = second + ".";
                logOneMessage(second);
                console.log("second ", second);
            }
        }
        else if (operator_1.length === 0) {
            if (first.toString().includes(".")) {
                first = first + "";
                console.log(first);
            }
            else {
                first = first + ".";
                logOneMessage(first);
                console.log("first ", first);
            }
        }
    }

    /**operators only get assigned if the first variable is entered/inputted*/
    /**get the operator for when if 1 and 2 are variables and the operator if 3 and 4 are filled */
    /*else if (first.length > 0 || third.length > 0)*/
    else if (!(parseFloat(`${e.key}`))) {
        console.log("assigning operators", first.length, second.length);
        /*if (first.length > 0 && second.length === 0)*/
        if ((first) && second.length === 0) {
            switch (`${e.key}`) {
                case "/":
                    logMessage(" / ");
                    operator_1 = "/";
                    break;
                case "+":
                    logMessage(" + ");
                    operator_1 = "+";
                    console.log("yeah, boi");
                    console.log("operator ", operator_1);
                    break;
                case "*":
                    logMessage(" * ");
                    operator_1 = "*";
                    break;
                case "-":
                    logMessage(" - ");
                    operator_1 = "-";
                    break;
                default:
                    console.log("alucard4");
            }
        }
        else if (operator_1.length > 0) {
            /**work here */
            first = parseFloat(first);
            switch (operator_1) {
                case "+":
                    second = parseFloat(second);
                    ans_1 = first + second;
                    logOneMessage(ans_1);
                    first = ans_1;
                    second = "";
                    /*logMessage(first);*/
                    console.log("in too deep123333", "first - ", first, " second - ", " ans ", ans_1);
                    /*first = ans_1;*/
                    /**first is assigned the numbers so it can be used for calculations */
                    /**initializing the first is going to be annoying */
                    bro = true;
                    /*ans_1 = 0;*/
                    operator_1 = `${e.key}`;
                    logMessage(operator_1);
                    break;
                case "/":
                    if (parseFloat(second) === 0) {
                        logOneMessage("nice try");
                    }
                    second = parseFloat(second);
                    ans_1 = first / second;
                    logOneMessage(ans_1);
                    first = ans_1;
                    second = "";
                    /*ans_1 = 0;*/
                    /*logMessage(first);*/
                    console.log("in too deep2");
                    operator_1 = `${e.key}`;
                    logMessage(operator_1);
                    break;
                case "*":
                    second = parseFloat(second);
                    ans_1 = first * second;
                    logOneMessage(ans_1);
                    first = ans_1;
                    second = "";
                    /*ans_1 = 0;*/
                    /*logMessage(first);*/
                    console.log("in too deep3");
                    operator_1 = `${e.key}`;
                    logMessage(operator_1);
                    break;
                case "-":
                    second = parseFloat(second);
                    ans_1 = first - second;
                    logOneMessage(ans_1);
                    first = ans_1;
                    second = "";
                    /*ans_1 = 0;*/
                    /*logMessage(first);*/
                    console.log("in too deep4");
                    operator_1 = `${e.key}`;
                    logMessage(operator_1);
                    break;
                default:
                    console.log("alucard1", operator_1, operator_2, operator_3, typeof (operator_1), ans_1);
            }
        }
        /*console.log("operator ", operator_1);*/
    }

    else {
        console.log(first, "- first", second, "- second", "fuck", operator.length, operator, "operator", `${e.key}`);
    }

});

function myFunction9() {
    /*logMessage("9");*/

    console.log(first, " first ", second, " second");
    if (operator_1.length > 0) {
        laf = "9";
        second += parseFloat(laf);
        logOneMessage(second);
        console.log("nein", first, " first ", second, " second ", operator_1, " operator_1");

    }
    else if (operator_1.length === 0) {
        /*first += parseFloat("9");*/
        console.log("yein");
        joj += "9";
        first = parseFloat(joj);
        logOneMessage(first);
        return "1";
    }
}

function myFunction8() {
    console.log(first, " first ", second, " second");
    if (operator_1.length > 0) {
        laf = "8";
        second += parseFloat(laf);
        logOneMessage(second);
        console.log("nein", first, " first ", second, " second ", operator_1, " operator_1");
    }
    else if (operator_1.length === 0) {
        /*first += parseFloat("9");*/
        console.log("yein");
        joj += "8";
        first = parseFloat(joj);
        logOneMessage(first);
        return "1";
    }
}
function myFunction7() {
    console.log(first, " first ", second, " second");
    if (operator_1.length > 0) {
        laf = "7";
        second += parseFloat(laf);
        logOneMessage(second);
        console.log("nein", first, " first ", second, " second ", operator_1, " operator_1");
    }
    else if (operator_1.length === 0) {
        /*first += parseFloat("9");*/
        console.log("yein");
        joj += "7";
        first = parseFloat(joj);
        logOneMessage(first);
        return "1";
    }
}
function myFunction6() {
    console.log(first, " first ", second, " second");
    if (operator_1.length > 0) {
        laf = "6";
        second += parseFloat(laf);
        logOneMessage(second);
        console.log("nein", first, " first ", second, " second ", operator_1, " operator_1");
    }
    else if (operator_1.length === 0) {
        /*first += parseFloat("9");*/
        console.log("yein");
        joj += "6";
        first = parseFloat(joj);
        logOneMessage(first);
        return "1";
    }
}
function myFunction5() {
    console.log(first, " first ", second, " second");
    if (operator_1.length > 0) {
        laf = "5";
        second += parseFloat(laf);
        logOneMessage(second);
        console.log("nein", first, " first ", second, " second ", operator_1, " operator_1");
    }
    else if (operator_1.length === 0) {
        /*first += parseFloat("9");*/
        console.log("yein");
        joj += "5";
        first = parseFloat(joj);
        logOneMessage(first);
        return "1";
    }
}
function myFunction4() {
    console.log(first, " first ", second, " second");
    if (operator_1.length > 0) {
        laf = "4";
        second += parseFloat(laf);
        logOneMessage(second);
        console.log("nein", first, " first ", second, " second ", operator_1, " operator_1");
    }
    else if (operator_1.length === 0) {
        /*first += parseFloat("9");*/
        console.log("yein");
        joj += "4";
        first = parseFloat(joj);
        logOneMessage(first);
        return "1";
    }
}
function myFunction3() {
    console.log(first, " first ", second, " second");
    if (operator_1.length > 0) {
        laf = "3";
        second += parseFloat(laf);
        logOneMessage(second);
        console.log("nein", first, " first ", second, " second ", operator_1, " operator_1");
    }
    else if (operator_1.length === 0) {
        /*first += parseFloat("9");*/
        console.log("yein");
        joj += "3";
        first = parseFloat(joj);
        logOneMessage(first);
        return "1";
    }
}
function myFunction2() {
    console.log(first, " first ", second, " second");
    if (operator_1.length > 0) {
        laf = "2";
        second += parseFloat(laf);
        logOneMessage(second);
        console.log("nein", first, " first ", second, " second ", operator_1, " operator_1");
    }
    else if (operator_1.length === 0) {
        /*first += parseFloat("9");*/
        console.log("yein");
        joj += "2";
        first = parseFloat(joj);
        logOneMessage(first);
        return "1";
    }
}
function myFunction1() {
    console.log(first, " first ", second, " second");
    if (operator_1.length > 0) {
        laf = "1";
        second += parseFloat(laf);
        logOneMessage(second);
        console.log("nein", first, " first ", second, " second ", operator_1, " operator_1");
    }
    else if (operator_1.length === 0) {
        /*first += parseFloat("9");*/
        console.log("yein");
        joj += "1";
        first = parseFloat(joj);
        logOneMessage(first);
        console.log("nein", first, " first ", second, " second ", operator_1, " operator_1");
        return "1";
    }
}

function myFunction0() {
    console.log(first, " first ", second, " second");
    if (operator_1.length > 0) {
        laf = "0";
        second += parseFloat(laf);
        logOneMessage(second);
        console.log("nein", first, " first ", second, " second ", operator_1, " operator_1");
    }
    else if (operator_1.length === 0) {
        /*first += parseFloat("9");*/
        console.log("yein");
        joj += "0";
        first = parseFloat(joj);
        logMessage(first);
        console.log("nein", first, " first ", second, " second ", operator_1, " operator_1");
        return "1";
    }
}

function myDecimalFunction() {
    console.log(first, " first ", second, " second");
    if (operator_1.length > 0) {
        if (laf === ".") {
            laf = "";
        }
        else if (!(second.toString().includes("."))) {
            laf = ".";
            second = second.toString() + ".";
            /*second = parseFloat(second);*/
            logOneMessage(second);
            console.log("nein", first, " first ", second, " second ", operator_1, " operator_1");
        }
    }
    else if (operator_1.length === 0) {
        /*first += parseFloat("9");
        console.log("yein");
        joj += parseFloat(".");
        deca = ".";
        deca = first.toString() + ".";
        first = parseFloat(deca);*/
        if (joj.includes(".")) {
            joj += "";
        }
        else {
            joj += ".";
            first = first.toString() + ".";
            logOneMessage(first);
            console.log("nein", first, " first ", second, " second ", operator_1, " operator_1");
        }
        return "1";
    }
}

function myFunctionClear() {
    document.getElementById("answer").innerHTML = "0";
    first = "";
    second = "";
    ans_1 = "";
    operator_1 = "";
    joj = "";
    laf = "";
}

function divideMe() {
    operator_1 = "/";
    logMessage(operator_1);
}

function multiplyMe() {
    operator_1 = "*";
    logMessage(operator_1);
}

function minusMe() {
    operator_1 = "-";
    logMessage(operator_1);
}

function addMe() {
    operator_1 = "+";
    logMessage(operator_1);
}

function enterMe() {
    first = parseFloat(first);
    switch (operator_1) {
        case "+":
            second = parseFloat(second);
            ans_1 = first + second;
            logOneMessage(ans_1);
            first = ans_1;
            second = "";
            console.log("in too 1deep123333", "first - ", first, " second - ", " ans ", ans_1);
            /*operator_1 = `${e.key}`;*/
            /*logMessage(operator_1);*/
            break;
        case "/":
            if (parseFloat(second) === 0) {
                logOneMessage("nice try");
            }
            second = parseFloat(second);
            ans_1 = first / second;
            logOneMessage(ans_1);
            first = ans_1;
            second = "";
            console.log("in too 2deep2");
            break;
        case "*":
            second = parseFloat(second);
            ans_1 = first * second;
            logOneMessage(ans_1);
            first = ans_1;
            second = "";
            /*ans_1 = 0;*/
            /*logMessage(first);*/
            console.log("in too 3deep3");
            break;
        case "-":
            second = parseFloat(second);
            ans_1 = first - second;
            logOneMessage(ans_1);
            first = ans_1;
            second = "";
            /*ans_1 = 0;*/
            /*logMessage(first);*/
            console.log("in too 4deep4");
            break;
        default:
            console.log("alucard1", operator_1, operator_2, operator_3, typeof (operator_1), ans_1);
    }
}