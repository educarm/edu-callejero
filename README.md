#edu-callejero
##Introducci&oacute;n
edu-callejero es un grid de datos desarrollado en [AngularJS](http://angularjs.org/) que permite la lectura, creaci&oacute;n, edici&oacute;n y borrado de elementos de una base de datos a trav&eacute;s de un API REST.

El objetivo de este componente es permitir generar un 'datagrid' a partir de una url de conexi&oacute;n y una m&iacute;nima configuraci&oacute;n, sin que sea necesario escribir c&oacute;digo de ning&uacute;n tipo.



##Dependencias
edu-form est&aacute; construido utilizando varias librer&iacute;as javascript:
    
- [AngularJS](http://angularjs.org/)
Framework utilizado para desarrollar el componente.
- [Bootstrap](http://getbootstrap.com/)
Framework en el que se basa el aspecto del grid.
- [Angular-resource](https://docs.angularjs.org/api/ngResource)
Una factoria que crea un recurso que permite interactuar con fuentes de datos RESTful.
- [jQuery](http://jquery.com/)
Dependencia de Bootstrap
- [Angular-sanitize](https://docs.angularjs.org/api/ngSanitize)
Módulo que provee las funcionalidades para sanitize HTML.

##Caracter&iacute;sticas
edu-callejero implementa las caracter&iacute;sticas b&aacute;sicas de un grid de datos como paginaci&oacute;n, ordenaci&oacute;n por columnas,
edici&oacute;n creaci&oacute;n y borrado de elementos.

En el aspecto visual, edu-callejero est&aacute; construido con un panel de bootstrap dentro del cual se integra una tabla para mostrar elementos.
Este panel se compone de una cabecera con el t&iacute;tulo del grid y un literal con los elementos mostrados y totales, un cuerpo que agrupa distintas opciones del grid, la tabla
integrada donde se muestran los datos y una zona para el pie del panel donde se muestra el elemento paginador. 
En el cuerpo del panel aparece un campo de texto para realizar b&uacute;squedas gen&eacute;ricas que aplicar&aacute;n a cualquier columna,
un elemento para seleccionar el n&uacute;mero de registros por p&aacute;gina.

##API REST
edu-callejero encapsula un servicio de datos basado en el objeto [$resource](https://docs.angularjs.org/api/ng/service/$resource) de AngularJS
y que est&aacute; preparado para interactuar con un servicio REST.
Dada una URL base, http://www.miservidor.com/rest/elementos la forma de interactuaci&oacute;n del servicio ser&aacute;:

- Una petici&oacute;n GET a la url base http://www.miservidor.com/rest/elementos/ devolver&aacute; la lista de elementos a mostrar
- Una petici&oacute;n GET a la url base http://www.miservidor.com/rest/elementos/{id} devolver&aacute; los datos del elemento
- Una petici&oacute;n POST a la url base http://www.miservidor.com/rest/elementos/ con la informaci&oacute;n de un nuevo elemento realizar&aacute; la inserci&oacute;n.
- Una petici&oacute;n PUT a la url base concatenada con el id del elemento http://www.miservidor.com/rest/elementos/{id} actualizar&aacute; el elemento con los datos enviados.
- Una petici&oacute;n DELETE a la url base concatenada con el id del elemento http://www.miservidor.com/rest/elementos/{id} realizar&aacute; el borrado.


***

##Utilizaci&oacute;n
####Importar el c&oacute;digo
Lo primero que hay que hacer es importar en la p&aacute;gina los ficheros javascript forman el componente

    <style href="edu-callejero.js"></style>
    
    <script src="edu-callejero.js"></script>
####options
Como se ha escrito previamente, uno de los objetivos de edu-field es permitir el uso del componente sin tener que desarrollar
ning&uacute;n tipo de c&oacute;digo javascript, el uso m&aacute;s simple posible ser&aacute; utilizar el tag html <div edu-form /> junto con las opciones
donde parametrizaremos el componente.

    <div edu-callejero options={ ....} />

####edu-callejero options
Lo ideal es indicar los parámetros utilizando para ello el atributo options que contendr&aacute; un objeto json con la lista de propiedades necesarias para la correcta configuración del componente:
....
....
....
....



      
##Desarrollo
```bash
# Clone this repo (or your fork).
git clone https://github.com/educarm/edu-callejero.git
cd edu-callejero

# Install all the dev dependencies
$ npm install
# Install bower components
$ bower install

# run the local server and the file watcher
$ grunt dev
```
##Distribución
```bash
# Build component
$ grunt build
```
##Demo
[edu-callejero demo](https://raw.githack.com/educarm/edu-callejero/master/src/demo-dev.html)
