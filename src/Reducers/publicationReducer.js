const publicationReducer = (
  state = {
    publications: [],
    activePublication:11,
    currentPublication: {alt:"Reussir un projet de vente",
date:"31 Juillet 2021",
description:"Alors que la sortie de la crise est encore incertaine, où en est le marché de l’immobilier au Maroc ? La pandémie a-t-elle eu un impact sur les prix de l’immobilier ?",
id:11,
image:"https://firebasestorage.googleapis.com/v0/b/agenz-website-prod.appspot.com/o/Images-articles%2Fcovid-prix-immobilier-maroc.png?alt=media",
link:"covid-marche-prix-immobilier",
text:"<div class='head--block'> <p class='head--paragrapg'>Il y a un an, la pandémie et la crise sanitaire qu’elle a entrainée, ont stoppé net le marché de l’immobilier. Un vrai coup de massue pour l’économie marocaine. En effet, le secteur emploie un million de personne et contribue au PIB national à hauteur de 14%. <br></br>De nombreux efforts et des mesures pertinentes ont été déployés pour faire redécoller un secteur, qui, selon un certain nombre de professionnels, n’était déjà pas au top de sa forme. <br></br>Qu’en est-il exactement ? Quelles sont les tendances post-covid qui se dessinent sur le marché Casablancais ? Comment les prix ont-ils évolués sur les dernières années ? Les équipes Agenz vous donnent des éléments de réponses concrets dans cet article en utilisant des échantillons de données réelles de transactions. </br> </p> </div> <div class='img--block'> <h2 class='img--block-title'>Focus sur le nombre de transactions</h2> <p class='head--paragrapg'> Si l’on se réfère à l’indicateur clé du nombre de transactions, il semble que celui-ci était déjà dans le rouge avant l’arrivée du Covid.  En effet, les rapports trimestriels de <a href='https://www.bkam.ma/' target='_blank' rel='noreferrer'>Bank Al Maghrib</a> et l’<a href='https://www.ancfcc.gov.ma/' target='_blank' rel='noreferrer'>ANCFCC</a> (Agence Nationale de la Conservation Foncière, du Cadastre et de la Cartographie), indiquent des baisses quasi-continues d’un mois à l’autre depuis le 2e trimestre 2019, tant sur le segment résidentiel que professionnel ou encore sur le foncier. Ainsi à la fin de l’année 2019, les transactions au niveau du royaume s’étaient contractées de 3,8% par rapport à l’année précédente. Casablanca a néanmoins tenu le cap avec une stagnation des nombres de transactions tout segments confondus. </p> <p class='head--paragrapg'> Dès la levée du confinement en Juin 2020, le marché a quelque peu repris des couleurs. En effet, le nombre de transactions a fait un rebond significatif dès le 3e trimestre 2020, toujours selon la même source, avec une hausse de +117,6% par rapport au trimestre précédent dans tout le pays, et un bond de 97,3% pour Casablanca. </p> <p class='head--paragrapg'> Et 2021 ? Le premier trimestre a certes connu un ralentissement (-17,4% au Maroc et -28,8% à Casablanca), mais des volumes de ventes nettement supérieurs à l’année précédente à la même période … Des indicateurs de bon augure donc. </p> </div> <div class='img--block'> <h2 class='img--block-title'>Quid de l’évolution des prix de l’immobilier </h2> <p class='head--paragrapg'>La reprise du marché de l’immobilier est-elle liée à une baisse globale des prix ? C’est ce que certains avancent : déstockage de la part des promoteurs, vendeurs en besoin de liquidités aux vues de la périodes … Toutefois il convient de constater que la hausse du nombre de transactions amorcée en milieu d’année 2020, n’a pas été corrélée à une baisse de l’indice des prix si l’on regarde le Royaume dans son ensemble. Même si, sans aucun doute, certains chanceux ont pu saisir des opportunités, difficile donc de valider cette hypothèse au niveau national. </p> <p class='head--paragrapg'> Qu’en est-il pour la capitale économique ? Nous nous sommes penchés sur l’évolution des prix des transactions à Casablanca au cours des 5 dernières années. A travers l’analyse d’un échantillon représentatif de quelques milliers de transactions de biens de tout standings confondus, on constate en effet une baisse significative du prix moyen au m2 en 2020, qui passe de 10 201 MAD/m2 à 8 383 MAD/m2. Il s’emble que sur Casablanca, il y ait effectivement eu de bonnes affaires immobilières pour les acquéreurs ! Mais cela semble déjà révolu, puisqu’à date le prix moyen au m2 a fait un bon de 28% en passant à 10 739 MAD/m2 en 2021, dépassant même le niveau de prix de 2019. Reste à voir si cette tendance se confirme d’ici la fin de l’année. </p> <div className='img-body--container'> <img class='img--article-body' alt='Évolution des prix des transactions d'appartements à Casablanca' src='https://firebasestorage.googleapis.com/v0/b/agenz-website-prod.appspot.com/o/Images-articles%2Fprix_transactions.jpg?alt=media' /> </div> <p class='head--paragrapg'> Les prévisions sont plutôt positives. Même si, là encore, le débat subsiste. Les plus optimistes misent sur un regain de visibilité et de confiance avec l’avancée de la campagne de vaccination, la redynamisation de l’économie et se félicitent des dispositifs d’incitations déployés. Dans le même temps, d’autres acteurs militent pour des actions encore plus fortes de la part des institutions afin de maintenir la tendance positive.    </p> <p class='head--paragrapg'> Nul n’a de boule de cristal, et l’histoire récente nous a appris que l’imprévisible peut surgir à tout instant. A suivre donc … <p class='head--paragrapg'> Si on ne peut prédire l’avenir, on peut en revanche analyser les données clés à un instant donné. C’est à cela qu’œuvrent les équipes Agenz au quotidien pour mettre à votre disposition une carte des prix au plus près de la réalité du marché et vous permettre de prendre des décisions éclairées 💡 </p> </p> </div>",
title:"Covid : Quel impact sur le marché et les prix de l’immobilier ?",
url : ""  
  }
}, 
  action) => {
    switch (action.type) {
      case 'SET_PUBLICATIONS': {
        state = {...state, publications: action.data};
        return state;
      }

      case 'SET_CURRENT_PUBLICATIONS': {
        state = {...state, currentPublication: action.data};
        return state;
      }
      case 'SET_PUBLICATION_ACTIVE': {
        state = {...state, activePublication: action.data};
        return state;
      }
      default:
        return state;
    }
};

export default publicationReducer;