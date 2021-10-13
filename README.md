# React com As Meninas Superpoderosas

Seja bem vindo(a) a este repositório! 

> Meu nome é [Tiago Sathler](https://github.com/tiagosathler) ([LinkedIn](https://www.linkedin.com/in/tiagosathler/)), sou aluno da [Trybe](https://www.betrybe.com/), e estou na Tribo 14, Turma A.
> 
>Este repositório contém uma pequena aplicação em React para uso didático, sem vínculos com a escola, feito de forma livre e espontanea. Você pode fazer um *fork* e desenvolver sua solução, fique à vontade. Mas lembre-se: este repositório contém imagens obtidas por pequisa na Web que certamente tem direitos autorais. Portanto, não as publique sem autorização prévia do proprietário do *cartoon* [As Meninas Superpoderosas](https://www.cartoonnetwork.com.br/) (Cartoon Network). O uso aqui é apenas didático.

## Sobre a aplicação
A ideia aqui é mostrar a relação entre os componentes em React: sendo o "*Professor*" um componente pai que renderiza seus componentes filhos, "*Lindinha*", "*Florzinha*", "*Docinho*" e "*Resultados*".  
Vamos entender o [Ciclo de Vida de um Componente](https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/), as fases de Montagem, Atualização e Desmontagem, os eventos que disparam a Renderização, as funções internas do React, o estado do componente, a passagem de *props* para componentes filhos, eventos que disparam a chamada de funções, elementos de formulário controlado pelo estado do compomente e a passagem das informações do estado do componente filho ao componente pai através de uma função entregue por *props* ao filho.

A simulação é a seguinte: O Professor combinou 3 tarefas, uma para cada menina e cabe ao usuário da página ajudá-las através das interações:

 - Lindinha deverá receber seu nome e entregá-lo ao Professor e ele deve checar;
 - Docinho tem que clicar 15 vezes num botão (mas ela vai trapacear...);
 - Florzinha deverá calcular uma multiplicação de uma tabuada que ela mesma sorteará e enviará ao professor para verificar se está correto (humm, mas ela é inteligente e poderia testar antes né?);

Terminada a tarefa, cada menina poderá ir embora, o que significa o final de vida de um componente na tela (fase de desmontagem).

## Como fazer:
Você deve fazer um *fork* deste repositório. Baixe seu repositório *forkeado* e instale as dependências através de `npm install`. 
A *branch* `master` está incompleta propositalmente, aguardando sua solução.
Crie uma nova *branch* a partir da *branch* `master`, algo como "`solucao-fulano`". Se quiser espiar minha solução (longe de ser a melhor) mude para a *branch* `solucao-tiago-sathler`. Execute o `npm start` nesta *branch* se quiser entender as funcionalidades que apliquei.
Minha solução usa termos semânticos em português (constantes, funções, etc) apenas para facilitar a distinção entre o que implementei e o que é do JavaScript e React. Não é uma boa prática, contudo justifica-se para fins didáticos. Minha solução procurou usar várias fases do ciclo de vida do componente.

## Requisitos
1. Implemente o componente **Lindinha** e **Resultados**: 
Faça um `input` do tipo `text` para capturar seu nome e passá-lo ao **Professor** através de um `button`. Lembre-se: o valor do *input* pode ser controlado pelo estado do Professor ou de Lindinha, mas ele é quem deverá verificar se o nome está correto (por exemplo, tem pelo menos 3 caracteres, não contém números, começa com letra maíscula... faça como desejar). Se estiver correto, faça que o nome apareça no componente **Resultados** e a libere Lindinha de sua tarefa.

2. Implemente os componentes **Docinho** e **Resultados**:
Faça um `button` de *Clicar* para que o **Professor** conte quantas vezes ele foi clicado e mostre em **Resultados**. O estado da contagem deverá ser controlado pelo Professor até o número 15, liberando-a da tarefa (já que Docinho não tem lá tanta paciência asssim...)
 ***Desafio***: tente fazer uma trapaça - **Docinho** exibirá também a contagem no seu componente, porém somente até o número 10 e, ao final da tarefa, deverá sair de fininho revelando ao professor o que ela fez. Dica: Pense sobre o ciclo de vida do componente.

3. Implemente os componentes **Florzinha** e **Resultados**:
Faça que **Florzinha** *tenha estado* e que ela gere dois números inteiros aleatórios entre 1 e 10 para calcular uma multiplicação. Faça tudo isso quando ela for montada na tela. Implemente um `input` tipo `number` controlado pelo estado de Florzinha. Passe o resultado para o **Professor** quando clicar em um `button` de *Enviar*. Envie os números sorteados, o resultado que você digitou para que o Professor verifique se a conta está certa. Mostre isso em **Resultados**.
**Desafio 1:** faça que Florzinha (que é inteligente) verifique a conta antes de você clicar no *Enviar*, alertando-nos que conta está certa ou errada. 
**Desafio 2:** toda vez que a resposta estiver errada, faça que o Professor passe novos números aleatórios para Florzinha calcular.


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
