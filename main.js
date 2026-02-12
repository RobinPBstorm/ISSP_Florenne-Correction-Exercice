// pour mettre en commentaire: "ctrl + :"


/*Les variables */


/* Exo02 */
// let message = "Bienvenue";
// console.log(message);
// alert(message);

/* Exercice 03 */
// let nb1 = 5;
// let nb2 = 7;
// console.log("nb1: "+nb1+" et nb2: "+nb2);

// let temp = nb1;
// nb1 = nb2;
// nb2 = temp;

// console.log("nb1: "+nb1+" et nb2: "+nb2);


/* Les entrées et les sorties */


/* Exercice 04 */
// let message = "Bienvenue ";
// let nom = prompt("Quel est votre nom ?");
// let prenom = prompt("Quel est votre prénom ?");

// alert(message+nom+" "+prenom);
// console.log(message+nom+" "+prenom);
// console.log(`${message}${nom} ${prenom}`);


/* Les opérateurs */


/* Exercice05 */
// let a, b, c, d, e, f;
 
//  a = 10;                //a = 10
//  b = parseInt(5 / 2);   //b = 2
//  c = b + a;             //c = 12
//  d = 5 % 2;             //d = 1 - 0.1
//  e = 5 / 2.0;           //e = 2.5
//  f = (e - 0.5) * a;     //f = 20

//  console.log("a = "+a)
//  console.log("b = "+b)
//  console.log("c = "+c)
//  console.log("d = "+d)
//  console.log("e = "+e)
//  console.log("f = "+f)

/* Exercice 06 */

// let totalSeconde = prompt("Combien de secondes avez vous?")

// const SECONDEJOUR = 24*60*60;
// const SECONDEHEURE = 60*60;
// const SECONDEMINUTE = 60;

// // calcul du nombre de jour
// let jours = parseInt(totalSeconde / SECONDEJOUR);
// // on retire les jours calculés de notre total
// let reste = totalSeconde % SECONDEJOUR;

// let heures = parseInt(reste / SECONDEHEURE);
// reste = reste % SECONDEHEURE;

// let minutes = parseInt(reste / SECONDEMINUTE);
// reste = reste % SECONDEMINUTE;

// console.log(`${totalSeconde} secondes donne ${jours} jour, ${heures} heure, ${minutes} minute et ${reste} seconde`);


/* Les structures conditionnelles */


/* Exercices */
// let a = 3, b = 9, c = false, d = !c, e = 9;
// console.log(a > 8); // false (9)
// console.log(b==9); // true
// console.log(!(a != 3)); // true
// console.log(!c); // true
// console.log((a < b) || c); // true
// console.log(!((a + b) != 12)); // true false ()
// console.log((b == 5) || ((e > 10) && (a < 8))) // false
// console.log((((b == 5) ||((e > 10) && (a < 8))) || (a < b) || c) && c) // false

/* exercice 07 */
// let annee = prompt("Veuillez rentrer une année:");

// if ((annee % 400 == 0) || (annee % 4 == 0 && annee % 100 != 0)) {
//     console.log("Année bissextile");
// }
// else {
//     console.log("pas une année bissextile");
// }

/* Exercice 08 */

// let playerReady = false;
// let panierFull = false;

// if (playerReady && panierFull) {
//     console.log("Balle lancée");
// }
// else if (!playerReady && !panierFull) {
//     console.log("Le joueur n'est pas prêt e il n'y a plus de balle");
// }
// else if (!playerReady) {
//     console.log("Le joueur n'est pas prêt");
// }
// else if (!panierFull) {
//     console.log("Il n'y a plus de balle");
// }

/* Exercice 09 */
// let decission = parseInt(prompt("Quelle boisson voulez-vous ? \n 1 - Coca \n2 - Fanta\n3 - Eau"));
// let stockCoca = 3, stockFanta = 1, stockEau = 0;
// switch (decission) {
//     case 1:
//         if (stockCoca < 1) {
//             console.log("Il n'y a plus de coca");
//         }
//         else {
//             console.log("Voici votre Coca");
//             stockCoca = stockCoca - 1;
//         }
//         break;
//     case 2:
//         if (stockFanta < 1) {
//             console.log("Il n'y a plus de Fanta");
//         }
//         else {
//             console.log("Voici votre Fanta");
//             stockFanta = stockFanta - 1;
//         }
//         break;
//     case 3:
//         if (stockEau < 1) {
//             console.log("Il n'y a plus d'Eau");
//         }
//         else {
//             console.log("Voici votre Eau");
//             stockEau = stockEau - 1;
//         }
//         break;
//     default:
//         console.log("Une erreur est survenue");
//         break;
// }

/* Exercice 10 */
// // Demander les éléments à l'utiliateur
// let nombre1 = prompt("Quel est le premier nombre: ");
// let operateur = prompt("Quel est l'opération voulu:");
// let nombre2 = prompt("Quel est le deuxieme nombre: ");

// // transformer en entier nos nombres
// nombre1 = parseInt(nombre1);
// nombre2 = parseInt(nombre2);

// let resultat;
// let aEteCalcule = true;

// switch (operateur) {
//     case "+":
//         resultat = nombre1 + nombre2;
//         break;
//     case "-":
//         resultat = nombre1 - nombre2;
//         break;
//     case "*":
//         resultat = nombre1 * nombre2;
//         break;
//     case "/":
//         if (nombre2 == 0) {
//             console.log("impossible");
//             aEteCalcule = false;
//         }
//         else {
//             resultat = nombre1 / nombre2;
//         }
//         break;
// }
// if (aEteCalcule) {
//     console.log(`${nombre1} ${operateur} ${nombre2} = ${(resultat)}`);
// }


// Les structures itératives (les boucles while et do while)

/* Exercice 13 */
// let compteur = 0;

// while (compteur <= 10*2) {
//     console.log(compteur);
//     compteur = compteur + 2;
// }

/* Exercice14 */
// // Selon Pierre
// let balles = 10;
// let playerReady = true;

// while (balles > 0) {
//     let reponse = prompt(`Il reste ${balles} dans le panier.\nLe joueur est prêt ? oui - non`)
//     if (reponse == "oui") {
//         playerReady = true;
//     }
//     else {
//         playerReady = false;
//     }

//     if (playerReady && balles > 0) {
//         console.log("Balle lancée")
//         balles = balles - 1;
//     }
//     else if (!playerReady && balles > 0) {
//         console.log("Le joueur n'est pas prêt")
//     }
//     else if (balles <= 0) {
//         console.log("Le panier est vide");
//     }
// }

// // Selon louis
// let stockBalle = 10;
// let pret = true;

// while (stockBalle > 0 && pret) {
//     console.log("une balle est lancée");
//     stockBalle = stockBalle - 1;
// }
// console.log("il n'y a plus balle");

/* Exercice 15 */
// let multiplication = parseInt(prompt("Quel table de multiplication voulez-vous ?"));
// let nombreAffiche = 0;

// console.log("Voici la table de mulplication par "+ multiplication);

// while (nombreAffiche < 10) {
//     nombreAffiche = nombreAffiche + 1;
//     console.log(nombreAffiche * multiplication);
// }

// selon Wael
// let table = 1;
// while (table <= 9) {
//     console.log("Ceci est la table de mulplication par "+ table);

//     let i = 1;

//     while (i <= 10) {
//         let resultat = table * i;

//         console.log(table+" x "+i+" = "+ resultat);

//         //i = i + 1;
//         i++;

//     }
//     console.log("");
//     table++;
// }

/* Exercice 16 */

// let numberMystery = Math.floor(Math.random() * 100);
// //let numberMystery = 50;

// let gameRunning = true;

// while(gameRunning) {
//     let numberSelect = parseInt(prompt("Choisissez un nombre"));

//     if (numberSelect == numberMystery) {
//         alert("Vous avez gagné");
//         gameRunning = false;
//     }
//     else if (numberSelect > numberMystery) {
//         alert("C'est plus petit");
//     }
//     else if (numberSelect < numberMystery) {
//         alert("C'est plus grand");
//     }
//     else {
//         alert("La donnée est érroné")
//     }
// }

/* Exercice 17 */
// let stockCoca = 10;
// let stockFanta = 1;
// let stockEau = 0;

// let reponseUtilisateur;

// do {
//     reponseUtilisateur = prompt("Quel boisson voulez-vous ?\n 1 -> coca \n 2 -> fanta \n 3 -> eau\n q -> quitter");
    
//     switch(reponseUtilisateur) {
//         case "1":
//             // coca
//             if (stockCoca > 0) {
//                 alert("Voici votre coca");
//                 stockCoca = stockCoca - 1;
//             }
//             else {
//                 alert("Il n'y a plus de coca");
//             }
//             break;
//         case "2":
//             // fanta
//             if (stockFanta > 0) {
//                 alert("Voici votre fanta");
//                 stockFanta = stockFanta - 1;
//             }
//             else {
//                 alert("Il n'y a plus de fanta");
//             }
//             break;
//         case "3":
//             // eau
//             if (stockEau > 0) {
//                 alert("Voici votre eau");
//                 stockEau = stockEau - 1;
//             }
//             else {
//                 alert("Il n'y a plus d'eau");
//             }
//             break;
//         case "q":
//             alert("Au revoir");
//             break;
//         default:
//             alert("Demande incorrecte");
//             // tout autre réponse
//             break;
//     }
// } while (reponseUtilisateur != "q");

/* Exercice 18 */
// let operateur

// do {
//     let nombre1 = prompt("Quel est le premier nombre: ");
//     operateur = prompt("Quel est l'opération voulu:");
//     let nombre2 = prompt("Quel est le deuxieme nombre: ");

//     // transformer en entier nos nombres
//     nombre1 = parseInt(nombre1);
//     nombre2 = parseInt(nombre2);

//     let resultat;
//     let aEteCalcule = true;

//     switch (operateur) {
//         case "+":
//             resultat = nombre1 + nombre2;
//             break;
//         case "-":
//             resultat = nombre1 - nombre2;
//             break;
//         case "*":
//             resultat = nombre1 * nombre2;
//             break;
//         case "/":
//             if (nombre2 == 0) {
//                 alert("impossible");
//                 aEteCalcule = false;
//             }
//             else {
//                 resultat = nombre1 / nombre2;
//             }
//             break;
//         default:
//             alert("Opération non trouvé");
//             aEteCalcule = false;
//             break;
//     }
//     if (aEteCalcule) {
//         alert(`${nombre1} ${operateur} ${nombre2} = ${(resultat)}`);
//     }

//     operateur = prompt("Voulez-vous faire un autre calcul? oui - non");
// } while (operateur != "non");
// alert("Au revoir");

/* Exercice 19 */

// let nombre = parseInt(prompt("Quel nombre voulez-vous?"))
// let exposant = 0;
// let resultat = 1;

// do {
//     resultat = resultat * nombre;
//     exposant = exposant + 1;
// } while(exposant < 10)
// alert(resultat);

/* Exercice 20 */
// let nombre = parseInt(prompt("Quel nombre voulez-vous?"));
// let exposantMax = parseInt(prompt("Quel exposant voulez-vous?"));
// let exposant = 0;
// let resultat = 1;

// do {
//     resultat = resultat * nombre;
//     exposant = exposant + 1;
// } while(exposant < exposantMax)
// alert(resultat);


/* les tableaux et la boucle for */


/* Exercice 22 */
// let monTableau = [];


// monTableau[0] = prompt("Proposez moi un nombre entier");
// monTableau[1] = prompt("Proposez moi un nombre entier");
// monTableau[2] = prompt("Proposez moi un nombre entier");
// monTableau[3] = prompt("Proposez moi un nombre entier");
// monTableau[4] = prompt("Proposez moi un nombre entier");
// monTableau[5] = prompt("Proposez moi un nombre entier");

// monTableau.push(prompt("Proposez moi un nombre entier"));
// monTableau.push(prompt("Proposez moi un nombre entier"));
// monTableau.push(prompt("Proposez moi un nombre entier"));
// monTableau.push(prompt("Proposez moi un nombre entier"));
// monTableau.push(prompt("Proposez moi un nombre entier"));
// monTableau.push(prompt("Proposez moi un nombre entier"));

// console.log(monTableau);

/* Exercice 23 */

// let tableauExposant2 = [];

// let x = 1;
// for (let i = 0; i < 10; i++){
//     let resultat = 2 ** x;
//     x++;

//     tableauExposant2.push(resultat);
// }
// console.log(tableauExposant2);