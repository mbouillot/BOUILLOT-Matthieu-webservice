PUT & PATCH
Quelle est la différence entre un PUT un PATCH?


Avec PUT, on remplace complètement une ressource par une nouvelle version fournie dans la requête.
Tandis qu'avec PATCH, on ne met à jour que les parties spécifiques de la ressource, en ajoutant ou modifiant seulement les données fournies dans la requête.


FETCH/AXIOS
Pourquoi un call vers mon api depuis Postman fonctionne mais semble bloqué lorsque le même call est exécuté par Firefox?

Postman n'a pas les mêmes restrictions de sécurité que les navigateurs web comme Firefox. Si une requête fonctionne dans Postman mais pas dans Firefox, cela est surement liés à la politique CORS (Cross-Origin Resource Sharing). 

NGINX/APACHE
Qu'est ce qui justifie d'avoir en plus de notre api node un serveur web comme Apache ou Nginx?

Les serveurs web comme Apache ou Nginx sont  utilisés en complément d'une API Node.js pour  :
 - gérer la mise en cache et la compression des fichiers , ça améliore les performances.
 - offrir des fonctionnalités qui assure ainsi une meilleure disponibilité et une meilleure réactivité.
 - servir de proxy inverse, offrant une couche de sécurité  en cachant les détails de mise en œuvre de l'API  et en filtrant les requêtes malveillantes.

PERFORMANCES
Citez 3 axes vus en cours pour améliorer les performance d'une api Rest?

Utiliser la mise en cache pour stocker temporairement les résultats des requêtes fréquemment effectuées.

Optimiser les requêtes en limitant les champs renvoyés dans les réponses, en utilisant la pagination pour limiter le nombre d'éléments renvoyés à la fois.

Optimiser la base de données en utilisant des index appropriés.

