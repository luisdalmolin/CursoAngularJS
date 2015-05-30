# Curso AngularJS - Estrutura de aplicação 2

Este é apenas um modelo de estruturação que vocês podem se basear para fazerem suas aplicações AngularJS. Este é um dos modelos mais simples, contendo um arquivo para cada tipo de componentes.

Este boilerplate contém o [AngularJS](https://angularjs.org) e o [Angular UI Router](https://github.com/angular-ui/ui-router).

### Estrutura

```
├── index.html
├── app.js
├── scripts
│   ├── main.js
│   ├── components
│   │   ├── config
│   │   │   └── routes.js
│   │   ├── controllers
│   │   │   └── MainCtrl.js
│   │   ├── services
│   │   ├── filters
│   └────── directives
├── bower_components
│   ├── angular
│   └── ...
```

### Como instalar / configurar

Você precisa ter [NodeJS](https://nodejs.org) e [Ruby](http://rubyinstaller.org) instalados.

Caso você ainda não tenha instalado o [SASS](http://sass-lang.com/), o [Gulp](http://gulpjs.com/) e o [Bower](http://bower.io/) instalados globalmente, executem os seguintes comandos no terminal:

```
$ npm install -g gulp bower
$ gem install sass
```

Acesse a pasta que você baixou, e execute os seguintes comandos:

```
$ bower install
$ npm install
```

### Desenvolvendo

Para toda vez que um arquivo for salvo, os scripts sejam concatenados no `app.js` e que o SASS seja compilado, execute o seguinte comando no terminal:

```
$ gulp watch
```

Assim, toda vez que um arquivo for salvo, as tarefas serão executadas.

Caso vocês queiram um servidor, executem o comando:

```
$ gulp serve
```

Para apenas compilar os arquivos, execute o comando:

```
$ gulp
```

### Removendo SASS

Caso você não queira utilizar SASS, apenas remove as chamadas para a tarefa `sass` no arquivo `gulpfile.js`.
