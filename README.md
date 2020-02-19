# Api para projeto Colmeia

##Aplicação RESTful API em Node.Js & Express.Js consumindo Back4App

Código desenvolvido apartir do desafio proposto pela empresa Colmeia

### Recursos utilizados no desenvolvimento:

- Node.Js;
- Express.Js
- Conceito RestFul;
- Back4App;
- JSON data (para retornar os dados);

### Rota(s)

URL base: https://whispering-escarpment-28788.herokuapp.com/{ROTA}

  ROTA                    |     HTTP(Verbo)   |      Descrição        | 
------------------------- | ----------------- | --------------------- | 
/professores              |       GET         | Selecionar Todos      | 


### Executar Localmente

Caso você deseja executar o projeto na sua máquina local, basta seguir os passos abaixo:

### Começando...

Para começar, você deve simplesmente clonar o repositório do projeto na sua máquina e instalar as dependências.

#### Pre-Requisitos

Antes de instalar as dependências no projeto, você precisa já ter instalado na sua máquina:

* **Node.Js**: Caso não tenha, basta realizar o download [Aqui](https://nodejs.org/en/)

#### Instalando as Dependências

Abre o cmd (caso esteja utilizando o Windows) e digite a path do seu projeto

```
cd "C:\Users\NomeDoComputador\Documents\..."
```

Depois, quando estiver na pasta do projeto, basta digitar no cmd a seguinte instrução:

```
npm install
```

Ao digitar a instrução acima, automaticamente ele irá baixar todas as dependências listadas no arquivo package.json:

* `node_modules` - que contêm os packages do npm que precisará para o projeto.

#### Executando a Aplicação

Bom, agora na mesma tela do cmd, basta iniciar o server para o projeto ser executado localmente.

```
npm start

```


Agora, abre a página da aplicação em `http://localhost:8080/professores`. E pronto a aplicação será executada de maneira local na sua máquina.        

O projeto também está disponível no Heroku, [api-professores](https://whispering-escarpment-28788.herokuapp.com/professores): 

Fiquem à vontade em usar ou até mesmo testar ambas as conexões!! :)  
