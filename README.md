# Todolist app

Foi desenvolvido o aplicativo solicitado, consumindo dados da API desenvolvida em C#, incluindo alguns recursos e funcionalidades novas.  
Também fiz uma refatoração do código, dividindo-o em componentes para maior organização, facilidade de manutenção e reaproveitamento de código.

Para resolver o problema inicial que ocorria ao executar o projeto pela primeira vez, primeiramente atualizei todas as dependências do projeto com o yarn, em seguida atualizei a versão do expo e precisei realizar um ajuste em uma parte do código, pois nas versões mais novas do react native os componentes de texto devem estar envolvidos por `<Text>` e um texto estava diretamente envolvido por `<View>`.

Após essas alterações o projeto executou sem erros e sem maiores problemas.

Fiz então os ajustes necessários solicitados em um ambiente local, nessa parte ainda sem integração com a API, em seguida refatorei o código, separando as funções em arquivos separados.

Após o aplicativo estar funcionando corretamente, incluí a APi desenvolvida para o consumo dos dados.

Nesse aplicativo não incluí uma autenticação, porém gostaria de ter incluído uma tela de login, onde a API validaria se o usuário existe e enviaria de volta para o aplicativo um token e um refresh token, que seriam salvos e trabalhados pelo context do react. Nesse caso, as rotas as API seriam protegidas e somente usuários autenticados poderiam acessa-las. Também seria possível incluir uma tela de registro para o cadastro de usuários.  
Nesse cenário, ao entrar a API saberia o usuário que estaria entrando e enviaria todas as tasks somente dele, tendo uma segurança para os usuários não verem as tasks um dos outros.

As alterações feitas foram:
- Refatoração do TodoListScreen
- Criação de componentes (CreateTask, Task, TaskActions, e Todo)
- Criação de arquivo de estilos separado (styles)

Foi inserida uma modal ao clicar em cima de qualquer task, com algumas opções para aquela task e também com detalhes sobre ela.

Ao clicar em qualquer botão, com exceção do Close, mostrado ao clicar sobre qualquer task, é feita uma requisição para a API, seja para criar a task, editar, deletar ou marcar como done/undone.  
Então todos os dados são atualizados imediatamente após qualquer ação.

Ao abrir o aplicativo, ele faz uma primeira requisição para buscar as tasks existentes no banco de dados. Se as tasks ultrapassarem o tamanho da tela verticalmente, foi adicionado o scroll para rolagem, porém a parte de adicionar uma nova task fica fixa na parte debaixo da tela.

Se não foram encontradas tasks na API, ele exibe uma mensagem dizendo que não foram encontradas tasks, caso contrário ele exibe as tasks cadastradas no banco de dados.

O APK está disponível no seguinte link: https://drive.google.com/file/d/1WEzpZ2rmBYcRBlPcIT6fbSGlfhQgmVQo/view?usp=sharing
