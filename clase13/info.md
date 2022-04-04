#iniciar babel
Instalamos la librería Babel, el cliente, y el plugin
**npm install @babel/core @babel/cli @babel/preset-env**
El primer módulo es la librería principal, el segundo es el cliente por terminal, y el tercero es el plugin de configuración para que soporte todos los JavaScript de la nueva generación.

El último paso que nos queda es crear el fichero de configuración de Babel “.babelrc” y decirle con que plugin vamos a trabajar
{
   "presets": ["@babel/preset-env"]
}

El código escrito en origen.js pertenece a ES6 ya que usa const y las nuevas arrow functions y queremos que Babel lo convierta a JS5.
Para ello, definimos un script en el package.json:

"build": "babel ./origen.js -o ./destino.js -w"
La opción -w nos permite transpilar automáticamente ante los cambios en origen.js

#typescript

node_modules/.bin/tsc ./index.ts -w
node_modules/.bin/tsc -w 
-w <!-- para no que se quede viendo las modificaciones y las aplique -->

#Import
Para poder usar import como (en react) en el package.json "type":"module",
#Operación del proyecto
Mediante los scripts creados en package.json ponemos en acción los mecanismos de transpilación manual y automática junto con la puesta en marcha del proyecto.

"build": "tsc" -> transpilación manual.
"watch": "tsc -w"-> transpilación automática.
"start": "node ./dist/index.js" -> ejecución de código transpilado.

Con el comando npm run se ejecutan los scripts build, watch y start.