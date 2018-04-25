
var operateur = prompt("Entrer un operateur: + - / *");

var z = 0;
switch (operateur) {
    case '+':
        var x = Number(prompt("Entrer votre premier nombre:"));
            while (isNaN(x)){
                x = Number(prompt("Entrer votre premier nombre:"));
            }
                var y = Number(prompt("Entrer votre second nombre:"));
                    while (isNaN(y)){
                        y = prompt("Entrer votre second nombre:");
                    }
                        z = x + y;
                        alert("Resultat: " + z);        
        break;
    case '-':
        var x = Number(prompt("Entrer votre premier nombre:"));
            while (isNaN(x)){
                 x = Number(prompt("Entrer votre premier nombre:"));
            }
                var y = Number(prompt("Entrer votre second nombre:"));
                    while (isNaN(y)){
                        y = prompt("Entrer votre second nombre:");
                    }
                        z = x - y;
                        alert("Resultat: " + z);
        break;
    case '*':
        var x = Number(prompt("Entrer votre premier nombre:"));
            while (isNaN(x)){
                x = Number(prompt("Entrer votre premier nombre:"));
            }
                var y = Number(prompt("Entrer votre second nombre:"));
                    while (isNaN(y)){
                        y = prompt("Entrer votre second nombre:");
                    }
                        z = x * y;
                        alert("Resultat: " + z);
        break;
    case '/':
        var x = Number(prompt("Entrer votre premier nombre:"));
            while (isNaN(x)){
                x = Number(prompt("Entrer votre premier nombre:"));
            }
                var y = Number(prompt("Entrer votre second nombre:"));
                    while (isNaN(y)){
                        y = prompt("Entrer votre second nombre:");
                    }
                        z = x / y;
                        alert("Resultat: " + z);
        break;
    default:
        alert("Saisis un operateur valide! (Si tu vois ce que je veux dire)");
        break;
}