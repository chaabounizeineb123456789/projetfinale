var product = localStorage.getItem("product");
  	var products =['bir','iki','uç','dort','beç','alti','yedi','sekiz','dokuz','on','onbir','oniki',];

    var photo = [`<img src="http://www.wepostmag.com/wp-content/uploads/2017/05/recette-Brick-danouni-1024x715.jpg" width="35%">`,
                 `<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvC0WBF3FzOelhBwpJ5LTw2hU9azsf6yKJ89V0Xil3BkVZs6to" width="25%">`,
                 `<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjbF4W48h-Bi02w8pZhSg3bCbfha_gjjRWXnfskDTGFFQULpLS" width="35%">`,
                 `<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9QacD5vEb10LTeKT14Nb_untPaxCu86gLTboNeu6chgoFcJY17g" width="35%">`,
                 `<img src="https://confituredelice.com/wp-content/uploads/2017/03/recette-fondant-au-chocolat.jpg" width="35%">`,
                 `<img src="https://static.750g.com/images/622-auto/5fc9a2d81e22d053458d42bd6129af4f/tarte-au-thon.jpg" width="35%">`,
                 `<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYAwmCoI0GINwVxrg2z2ztx57NXjaJu318kvUv4J6CTuDyJdZ2" width="35%">`,
                 `<img src="http://www.recettes-gaufres.com/images/photos/crepe-kitchenaid.jpg" width="35%">`,
                 `<img src="https://i.ytimg.com/vi/ywoNPrbLg_Y/maxresdefault.jpg" width="35%">`,
                 `<img src="https://d2gk7xgygi98cy.cloudfront.net/48-3-large.jpg" width="35%">`,
                 `<img src="https://static.cuisineaz.com/610x610/i136751-sauce-bechamel.jpeg" width="25%">`,
                 `<img src="https://files.meilleurduchef.com/mdc/photo/recipe/creme-au-beurre-french-buttercream/creme-au-beurre-french-buttercream-640.jpg" width="35%">`
    ];

  	var ingredients = [
    "250 gr Farine,250 gr Semoule fine,1 verre de thé Huile de tournesol,100 grammes Viande hachée,50 grammes Fromage râpé,2 Fromage en triangle,3 Oeufs,1/2 Oignon",
    "250 g de farine,50 cl de lait,100 g de beurre fondu,2 oeufs,40 g de sucre,1 sachet de levure chimique,sel",
    "200 g de spéculoos moulus,50 g de beurre fondu,600 g de fromage frais (St Moret, Philadelphia ou encore Leader Price!),1 citron non traité,3 oeufs,25 g de farine ou maïzena,100 g de crème fraîche épaisse,20 cl de lait,150 g de sucre",
    "600g farine,3càs d'huile,2càc de sel,1 levure chimique a pizza,2 verre d'eau tiéde",
    "200 g de Nestlé dessert noir,4 œufs,150 g de sucre,80 g de farine,200 g de beurre",
    "1 pâte feuilletée minute,1 boîte de thon , 400 g net égoutté,1 oignon,2 tomates,3 oeufs,125 g de gruyère râpé,Moutarde",
    "Pour la pâte :,50 g de sucre en poudre,300g de farine,les zestes d’une orange,2 œufs,1 paquet de levure chimique,1 paquet de sucre vanillé,5 c. à soupe d’huile de colza,Pour le sirop :,500 g de sucre en poudre,le jus d’1/2 citron",
    "2 oeufs,300g farine,40cl lait",
    "2 tomates,3 ou 4 piments (poivrons pour les palais sensibles),1 belle courgette (ou l'équivalent en citrouille ou potiron),2 pommes de terre,2 oeufs,huile de friture,sel, tabel-karouia,huile d'olive",
    "2 oeufs,150 ml de lait demi écrémé,1 sachet de sucre vanillé ou une cuil. à café d'extrait de vanille,125 g de farine,1 c. à café de levure chimique ou de bicarbonate,2 c. à soupe de sucre,1 pincée de sel,beurre ou huile pour la cuisson",
    "70g de beurre,70g de farine,1 L de lait,Noix de muscade,Sel et poivre,Poivre",
    "8 jaunes d'œufs,250 g de sucre,250 g de beurre pommade"
    ]; 
  	
    var cuisson = [
    "temps de cuisson:50min,temps de préparation:45min",
    "temps de cuisson:5min,temps de préparation:10min",
    "temps de cuisson:1h10min,temps de préparation:20min",
    "temps de repos:2h,temps de préparation:10min",
    "temps de cuisson:25min,temps de préparation:35min",
    "temps de cuisson:40min,temps de préparation:15min",
    "temps de cuisson:10min,temps de préparation:15min",
    "temps de cuisson:5min,temps de préparation:10min, temps de repos:1h",
    "temps de cuisson:20min,temps de préparation:10min",
    "temps de cuisson:20min,temps de préparation:30min",
    "temps de cuisson:20min,temps de préparation:1h",
    "temps de cuisson:20min,temps de préparation:1h",
    ];
  	
    var steps = [
  		`<span style="font-size:20px">étape 1:</span> Mélanger la semoule, la farine, le sel, l'huile et un oeuf. Ajouter environ 1/2 verre d'eau ou un peu plus, le nécessaire pour que la pâte soit facile à manier. ;;
  		<span style="font-size:20px">étape 2:</span>	Faire revenir l'oignon coupé dans un peu d'huile, ajouter la viande, un peu de coriandre, saler, poivrer et laisser cuire pendant environ 20 minutes, ;;
  		<span style="font-size:20px">étape 3:</span> Faire durcir un oeuf dans de l'eau bouillante,;;
  		<span style="font-size:20px">étape 4:</span>Une fois la viande cuite, laisser refroidir pendant environ 15 minutes. Couper dessus l'oeuf dur et le fromage en triangle. Y ajouter le fromage râpé et un oeuf. Mélanger et la farce est prête.;;
  		<span style="font-size:20px">étape 5:</span>	Étaler une partie de la pâte jusqu'à ce qu'elle devienne très fine. Couper des cercles avec un moule ou à l'aide d'un bol,;;
  		<span style="font-size:20px">étape 6:</span> Mettre un poêle pleine d'huile à chauffer pour y frire les briks,;;
  		<span style="font-size:20px">étape 7:</span> Mettre une cuillère à café de farce dans chaque cercle de pâte, la plier en demi-cercle et refermer le bord avec un fourchette,;;
  		<span style="font-size:20px">étape 8:</span> Frire les briks des deux côtés jusqu'à ce qu'elles aient leur belle couleur dorée. Servir chaud. Chahia tayba )`,

      `<span style="font-size:20px">étape 1:</span> Dans un saladier, versez la farine, le sucre en poudre et la levure chimique. Mélangez à l'aide d'une cuillère en bois. Creusez un puits au centre. ;;
      <span style="font-size:20px">étape 2:</span> Cassez les œufs dans un bol et fouettez-les à l'aide d'une fourchette. Versez dans le puits et mélangez énergiquement à l'aide d'un fouet,;;
      <span style="font-size:20px">étape 3:</span> Versez progressivement le ait tout en continuant de fouetter. Ajoutez le beurre préalablement fondu ainsi qu'une pincée de sel. Mélangez bien.,;;
      <span style="font-size:20px">étape 4:</span> Chauffez et huilez légèrement votre gaufrier. Versez une louche de pâte. Faites cuire les gaufres pendant 5 min. Renouvelez l'opération jusqu'à épuisement de la pâte.Servir chaud. Chahia tayba )`,

      `<span style="font-size:20px">étape 1:</span> Mélangez la poudre de spéculoos avec le beurre fondu, étalez au fond d'un moule à bords amovibles, tassez, et passez 10 minutes au four à 180°C.;;
      <span style="font-size:20px">étape 2:</span> Battez le fromage frais quelques secondes, ajoutez la crème fraîche, battez, ajoutez le zeste de citron, le sucre, les oeufs 1 par un,;;
      <span style="font-size:20px">étape 3:</span> Ajoutez la farine tamisée puis enfin le lait,;;
      <span style="font-size:20px">étape 4:</span> Versez par dessus la base de gâteau au spéculoos.;;
      <span style="font-size:20px">étape 5:</span> Faites chauffer le four à 210°C, enfournez le cheesecake pour 10 minutes, puis baissez le four à 90°C pendant 1 heure,;;
      <span style="font-size:20px">étape 6:</span> Laissez le cheesecake encore 1 heure dans le four éteint, puis après l'avoir laissé tiédir, placez-le au frais jusqu'au lendemain,Servir chaud. Chahia tayba)`,

      `<span style="font-size:20px">étape 1:</span> Environ 1h30 avant la cuisson de votre pizza, mettez d'abord la main à sa pâte. Commencez par délayer la levure de boulanger dans une tasse, en la mélangeant avec le sucre et l'eau chaude à l’aide d’une cuillère, puis laissez reposer de côté pendant 20 min (si vous utilisez de la levure sèche, pas besoin de procéder à cette étape)..;;
      <span style="font-size:20px">étape 2:</span> Ensuite, mélangez la farine et le sel dans un saladier puis creusez un puit au centre, et versez-y la levure délayée et l’huile d’olive. Malaxez le tout avec vos mains, en ajoutant progressivement l'ensemble de l'eau froide, jusqu’à obtenir une pâte bien lisse et homogène. Votre pâte est prête lorsqu’elle se décolle des parois du saladier.,;;
      <span style="font-size:20px">étape 3:</span> Farinez légèrement la pâte de farine, puis recouvrez le saladier avec un torchon propre, et laissez la pâte lever pendant 1 heure à température ambiante.,;;
      <span style="font-size:20px">étape 4:</span> Quand la pâte a bien levé, sortez-la du saladier, et "dégazez"-la (chassez-en le gaz carbonique) en la tapant énergiquement avec vos mains. Il ne vous reste plus qu'à pétrir rapidement la pâte, à la déposer sur un plan de travail fariné, à l'étaler (en disque ou en rectangle) au rouleau à pâtisserie, à la garnir de sauce tomates, d'herbes, de fromage et de différents ingrédients, puis à la faire cuire rapidement à four très chaud.Servir chaud. Chahia tayba )`,
  		
      `<span style="font-size:20px">étape 1:</span> Préchauffer le four therm.6 (200°C)..;;
      <span style="font-size:20px">étape 2:</span> Casser la tablette de chocolat dans un petit saladier. Rajouter 4 cuillères d'eau et faire fondre au micro-ondes. Attention de ne pas cuire le chocolat.,;;
      <span style="font-size:20px">étape 3:</span> Faire fondre le beurre dans un autre petit saladier au micro-ondes et le rajouter au saladier du chocolat fondu. Mélanger.,;;
      <span style="font-size:20px">étape 4:</span> Dans un grand saladier, mélanger les œufs et le sucre, puis la farine..;;
      <span style="font-size:20px">étape 5:</span> Verser le chocolat fondu dans le grand saladier et mélanger jusqu'à l'obtention d'une pâte homogène.,;;
      <span style="font-size:20px">étape 6:</span> Verser dans un moule beurré et fariné. Faites cuire 25 minutes environ (ajuster ce temps de cuisson pour obtenir un cœur plus ou moins fondant),Servir chaud. Chahia tayba)`,
      
      `<span style="font-size:20px">étape 1:</span> Préchauffer le four à 180°, thermostat 6.;;
      <span style="font-size:20px">étape 2:</span> Dans un moule à tarte, dérouler la pâte et la piquer à l'aide d'une fourchette.;;
      <span style="font-size:20px">étape 3:</span> Prendre une cuillère à soupe de moutarde et l'étaler au fond.;;
      <span style="font-size:20px">étape 4:</span> Rajouter les tomates coupées en rondelles.;;
      <span style="font-size:20px">étape 5:</span> Prendre un saladier, battre les oeufs, rajouter l'oignon coupé finement en lamelles, le thon puis le gruyère. Bien mélanger.;;
      <span style="font-size:20px">étape 6:</span> Verser le mélange sur la tarte, lisser le dessus et mettre au four pendant 40 min.,Servir chaud. Chahia tayba)`,
     
      `<span style="font-size:20px">étape 1:</span> Préparez le sirop en versant le sucre, le citron et le sucre vanillé dans une casserole et faites chauffer à feu doux, pendant quelques minutes. Plongez une cuillère à soupe dans la casserole et quand celle-ci est nappée de liquide, alors le sirop est prêt.;;
      <span style="font-size:20px">étape 2:</span>  Dans un saladier, cassez les œufs entiers, ajoutez le sucre et mélangez avec un batteur.;;
      <span style="font-size:20px">étape 3:</span> Ajoutez l’huile de colza, le sucre vanillé, la levure et les zestes et mélangez bien entre chaque ingrédient pour obtenir une pâte bien homogène.;;
      <span style="font-size:20px">étape 4:</span> Ajoutez maintenant la farine en la tamisant au dessus du saladier et en tournant la préparation en même temps : la farine s’incorpore bien mieux à la pâte qui devient souple. Formez une boule avec la pâte.;;
      <span style="font-size:20px">étape 5:</span> Farinez votre plan de travail, déposez la pâte à youyou au centre et abaissez-là avec un rouleau jusqu’à ce qu’elle fasse 1 cm d’épaisseur environ.;;
      <span style="font-size:20px">étape 6:</span> A l’aide d’un emporte-pièce, ou bien avec verre large, découpez la pâte en forme de cercles.;;
      <span style="font-size:20px">étape 7:</span> Faites un trou au milieu de chaque cercle.;;
      <span style="font-size:20px">étape 8:</span> Faites chauffer l’huile dans une friteuse, et déposez délicatement les youyous dans le bain d’huile. Les youyous sont cuits quand ils ressortent dorés et gonflés.;;
      <span style="font-size:20px">étape 9:</span> Egouttez-les dans une passoire puis sur du papier absorbant.;;
      <span style="font-size:20px">étape 10:</span> Disposez chaque youyou tunisien dans un plat et nappez-les de sirop chaud. Bonne dégustation !. Servir chaud. Chahia tayba )`,
      
      `<span style="font-size:20px">étape 1:</span> Dans un bol, mélange la farine, le sucre et le sel. Ajoute les oeufs, 125 ml (½ tasse) de lait et la vanille puis mélange bien à l’aide d’un fouet jusqu’à ce que la pâte soit lisse et homogène. Ajoute le reste du lait graduellement en remuant. Incorpore le beurre fondu.;;
      <span style="font-size:20px">étape 2:</span> Fais chauffer une poêle antiadhésive d’environ 23 cm (9 po) de diamètre à feu moyen. Lorsque ta poêle est chaude, badigeonne-la de beurre avec un pinceau.;;
      <span style="font-size:20px">étape 3:</span> Pour chaque crêpe, verse environ 45 ml (3 c. à soupe) de pâte au centre de la poêle. En faisant pivoter ta poêle, tente de répandre la pâte également pour recouvrir tout le fond. Lorsque le rebord se décolle facilement et commence à dorer, c’est le temps de retourner la crêpe à l’aide d’une spatule. Poursuis la cuisson environ 10 secondes puis retire-la de la poêle.;;
      <span style="font-size:20px">étape 4:</span> Place les crêpes cuites dans une assiette au fur et à mesure. Couvre-les de papier d’aluminium pour éviter qu’elles sèchent et garde-les au chaud. Délicieux avec du sirop d’érable ou de la sauce aux bleuets..Servir chaud. Chahia tayba )`,
     
      `<span style="font-size:20px">étape 1:</span> Préparer les légumes (éplucher, laver) et les couper en cubes ou tranches (selon ce que vous voulez!);;
      <span style="font-size:20px">étape 2:</span> Faire frire chaque type de légume seul (dans l'ordre pomme de terre, courgette, piments, tomates) comme ça on évite de changer l'huile à chaque fois!;;
      <span style="font-size:20px">étape 3:</span> Faire frire les oeufs séparément, puis les hacher menu.;;
      <span style="font-size:20px">étape 4:</span> On mélange le tout ensemble, saler, ajouter une pincée de tabel-karouia (qui relève le goût du piment), on arrose d'une belle lichette d'huile d'olive crue, et on déguste.Servir chaud. Chahia tayba )`,
      
      `<span style="font-size:20px">étape 1:</span> Dans un grand bol, mélangez les ingrédients secs : farine, levure, le sucre, 1 pincée de sel et un sachet de sucre vanillé;;
      <span style="font-size:20px">étape 2:</span> Dans un autre bol, mélangez les 2 jaunes d'oeuf avec le lait puis ajoutez aux ingrédients secs en mélangeant, vous obtenez une texture de pâte à crêpes bien épaisse, laissez reposer 15 à 30 minutes;;
      <span style="font-size:20px">étape 3:</span> Battez les blancs en neige et ajoutez-les délicatement à la préparation (c'est le secret de pancakes ultra moelleux);;
      <span style="font-size:20px">étape 4:</span> Faites cuire dans une petite poêle beurrée bien chaude 1 minute de chaque côté;;
      <span style="font-size:20px">étape 5:</span> Le bord doit être doré, et des petites bulles doivent se former sur le dessus, c'est le moment de retourner le pancake !.servir chaud. Chahia tayba)`,
      
      `<span style="font-size:20px">étape 1:</span> Faites fondre le beurre tout doucement. Lorsqu'il est fondu (attention à ne pas le cuire), ajoutez la farine et mélangez au fouet.;;
      <span style="font-size:20px">étape 2:</span> Faites cuire ce mélange pendant 4 à 5 minutes.;;
      <span style="font-size:20px">étape 3:</span> Versez ensuite le lait, ajoutez le sel, poivre, noix de muscade. Remuez jusqu'à ébullition.;;
      <span style="font-size:20px">étape 4:</span> Quand la sauce épaissit, retirez du feu et continuez de mélanger au fouet pendant 1 à 2 minutes.;;
      <span style="font-size:20px">étape 5:</span> Remettez ensuite sur le feu, pour cuire à nouveau votre béchamel, pendant 3 à 4 minutes quand la sauce est à ébullition.;;
      <span style="font-size:20px">étape 6:</span> Servez-vous de cette sauce pour napper vos gratins, lasagnes.Servir chaud. Chahia tayba)`,
     
      `<span style="font-size:20px">étape 1:</span> Verser le sucre en poudre dans une casserole en inox.;;
      <span style="font-size:20px">étape 2:</span> Ajouter l'eau. La quantité d'eau correspond à la quantité nécessaire pour humidifier le sucre. Il n'est pas nécessaire de trop en mettre. ;;
      <span style="font-size:20px">étape 3:</span> Porter à ébullition et cuire jusqu'à 121°C. L'utilisation d'un thermomètre à sonde amovible est utile mais pas indispensable. (Pour contrôler la cuisson du sucre il suffit de tremper les dents d'une fourchette dans le sucre en ébullition. Si en la retirant il commence à se former des fils, c'est que le sucre est prêt).;;
      <span style="font-size:20px">étape 4:</span> Clarifier les œufs à l'aide d'un séparateur à oeuf. Mettre les jaunes dans le bol du batteur.;;
      <span style="font-size:20px">étape 5:</span> Dès que le sucre est cuit le verser doucement à petite vitesse sur les jaunes d'œufs en le faisant couler sur la paroi interne de la cuve.;;
      <span style="font-size:20px">étape 6:</span> Veiller à ce que les jaunes d'œufs soient à température ambiante. Dès que le sucre est entièrement incorporé aux jaunes d'œufs, battre jusqu'à complet refroidissement à grande vitesse.;;
      <span style="font-size:20px">étape 7:</span> Une fois la préparation refroidie...;;
      <span style="font-size:20px">étape 8:</span> .incorporer petit à petit le beurre pommade en parcelles.;;
      <span style="font-size:20px">étape 9:</span> Continuer à bien battre afin d'obtenir une crème bien lisse et homogène. La crème peut à ce moment-là être arômatisée au café, au chocolat, au praliné selon l'utilisation que vous voulez en faire.;;
      <span style="font-size:20px">étape 10:</span> Ici nous voulons la parfumer au praliné. Pour cela ajouter la valeur d'une cuillère à soupe de praliné.. Servir chaud. Chahia tayba )`,
     ];


  	var position = products.indexOf(product);
//photo
     texte="";
    str=photo[position];
    res=str.split(",");
    for(i=0;i<res.length;i++){
    document.getElementById("pho").innerHTML+=texte+res[i]+"<br>";;
  }
  	//ingrédients
  	var texte="";
  	str=ingredients[position];
  	res=str.split(",");
  	for(i=0;i<res.length;i++){
 		document.getElementById("ing").innerHTML+=texte+res[i]+"<br>";;
	}
   //temps cuisson
    texte="";
  	str=cuisson[position];
  	res=str.split(",");
  	for(i=0;i<res.length;i++){
  		document.getElementById("cui").innerHTML+=texte+res[i]+"<br>";;
  	}
  //etapes
    texte="";
  	str=steps[position];
  	res=str.split(";;");
  	for(i=0;i<res.length;i++){
 		document.getElementById("ste").innerHTML+=texte+res[i]+"<br>";;
  	}

function sam() {
    document.getElementById("demo").style.color = "red";
}
function rom() {
    document.getElementById("ram").style.color = "red";
}