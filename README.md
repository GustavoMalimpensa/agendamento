## Projeto de Integração: Express e TypeORM com TypeScript + FullCalendar Angular 15

Este projeto combina duas partes: uma API desenvolvida com Express, TypeORM e TypeScript, e um front-end que utiliza FullCalendar e Angular 15. Abaixo, você encontrará informações sobre as tecnologias e dependências utilizadas em cada um desses projetos.

# Backend (API Express e TypeORM)
Tecnologias Utilizadas:
Express: Um framework web para Node.js que facilita a criação de APIs e aplicativos web.

TypeORM: Uma ORM (Object-Relational Mapping) TypeScript que simplifica a interação com bancos de dados relacionais, como PostgreSQL (pg é um driver PostgreSQL utilizado aqui).

TypeScript: Uma linguagem de programação que adiciona tipagem estática ao JavaScript, tornando-o mais seguro e mantível.

Dependências de Desenvolvimento:
@types/express: Tipos TypeScript para o Express.

@types/node: Tipos TypeScript para o Node.js.

nodemon: Uma ferramenta que monitora alterações nos arquivos e reinicia o servidor automaticamente durante o desenvolvimento.

ts-node: Permite executar arquivos TypeScript diretamente no Node.js.

typescript: O compilador TypeScript.

Dependências de Produção:
date-fns-tz: Uma biblioteca para manipulação de datas e fusos horários.

dotenv: Para carregar variáveis de ambiente a partir de um arquivo .env.

express: O framework web Express.

reflect-metadata: Utilizado pelo TypeORM para reflexão de metadados.

Scripts de Desenvolvimento:
dev: Inicia o servidor utilizando o nodemon para recarregar automaticamente durante o desenvolvimento.

migration:generate: Gera migrações de banco de dados com base nas entidades do TypeORM.

migration:run: Executa migrações de banco de dados.

## Frontend (FullCalendar e Angular 15)

1. install `typeorm` globally: `npm i -g typeorm`
2. run `typeorm -h` to show list of available commands


## Tecnologias Utilizadas:
Angular 15: Um framework JavaScript de código aberto para criação de aplicativos web e móveis.

FullCalendar: Uma biblioteca JavaScript de código aberto para criação de calendários interativos.

Bootstrap: Um framework CSS popular para design responsivo.

Ngx-bootstrap: Uma biblioteca Angular que fornece componentes Bootstrap prontos para uso.

Dependências de Desenvolvimento:
@angular-devkit/build-angular: Ferramentas de compilação e construção para projetos Angular.

@angular/cli: A linha de comando do Angular.

@angular/compiler-cli: Compilador TypeScript do Angular.

@types/jasmine: Tipos TypeScript para Jasmine, uma estrutura de teste.

jasmine-core: O núcleo da estrutura de teste Jasmine.

karma: Um test runner para JavaScript.

karma-chrome-launcher: Permite executar testes no navegador Chrome.

karma-coverage: Gera relatórios de cobertura de código para testes.

karma-jasmine: Integra o Jasmine com o Karma.

karma-jasmine-html-reporter: Gera relatórios HTML para os resultados dos testes.

typescript: O compilador TypeScript.

zone.js: Uma biblioteca que fornece zoneamento para aplicações web Angular.

Scripts de Desenvolvimento:
ng: Comandos Angular CLI para construir, servir e testar o aplicativo.
## Considerações Finais
Este projeto utiliza uma variedade de tecnologias e bibliotecas para criar uma aplicação que combina uma API baseada em Express e TypeORM com um front-end interativo construído com Angular 15 e FullCalendar. Certifique-se de seguir as instruções específicas para configurar e executar cada parte do projeto, e aproveite a oportunidade para explorar e aprimorar suas habilidades de desenvolvimento!