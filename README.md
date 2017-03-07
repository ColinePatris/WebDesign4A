# WebDesign4A

Site realise par Coline Patris et Jeremy Duong

Ce site permet la visualisation de données concernant la Police Departementale de Baltimore. On trouve en 1ere page des graphes permettant une visualisation rapide de la repartition des delinquants en fonction de leur age, de leur sexe et de la couleur de leur peau tandis que la seconde page permet de visualiser les 25 premiers elements correspondants a des parametres definis au moyen de combobox. Cette liste peut etre triee en fonction de l'age, du sexe, de la couleur de peau et des districts de Baltimore.

Nous avons utilise la fonction ng-click dans la page List pour sélectionner les parametres du filtre, grace a des combobox, et pour lancer son calcul, au moyen d'un bouton.
Nous avons egalement utilise une combinaison de ng-click et de ng-show pour n'afficher le bouton  permettant de lancer le calcul du filtre que lorsqu'un element a ete selectionne avec les combobox.
Nous avons enfin utilise un ng-model sur les combobox afin de leur appliquer un style après que leur valeur ait ete modifiee.

Nous avons utilise ng-class sur les liens permettant le passage d'une page a une autre pour changer leur apparence lorsque la sourie se trouve au-dessus.

Nous avons utilise ng-repeat pour afficher les valeurs concernant les differentes personnes concernees par les entrees du fichier Json.

Nous avons egalement utilise un ng-view pour pouvoir naviguer entre des partials ainsi qu'un ng-controlleur pour lier les pages html et le javascript.

Nous avons ajoute les librairies angular-chart.js et Chart.js de façon a representer des graphiques sans problemes de compatibilite avec notre code.

Notre site est compose de lignes et colonnes generees grace a Bootstrap et les diagrammes crees avec angular-chart repondent aux criteres de la responsivness. Cette fonctionnalite a ete testee sous Firefox et demontre d'une grande adaptabilite au support.
Il n'y a pas de menu adapte pour les telephone car notre site ne comporte pas de menu.

La page http://www.google.com/design/spec/material-design/introduction.html a ete consultee et nous a servi a trouver les couleurs des differents elements ainsi qu'a gerer les ombres permettant de donner du volume aux pages. De même, les recommendations concernant les radius des bordures ont ete prises en compte.

De facon a donner une identite au site, qui soit en rapport avec les donnees etudiees, un drapeau americain a ete place en arriere-plan et le blason de la Police Departementale de Baltimore a ete integre a la banniere.
