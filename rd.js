
var len = document.getElementsByTagName('a').length;
var elem = document.getElementsByTagName('a')
for (i=0; i<len; i++)
{

	elem[i].setAttribute('routerlink', document.getElementsByTagName('a')[i].getAttribute('href'));
}
