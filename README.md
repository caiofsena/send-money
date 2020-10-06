# neon-send-money

Aplicativo que apresenta o fluxo de três telas, simulando o envio de dinheiro para um determinado contato da pessoa, assim também como seu histórico de envios de dinheiro.

<h2>libs</h2>

<b>react-native 0.63.3</b></br>

"react-native-paper": "^4.2.0"<br>
"@react-navigation/native": "^5.7.5"<br>
"@react-navigation/stack": "^5.9.2"<br>
"react-native-gesture-handler": "^1.8.0"<br>
"react-native-masked-text": "^1.13.0"

<h3>Fluxo do aplicativo</h3>
- Apresentação na tela inicial do nome, foto e email do usuário, além dos botões para Enviar Dinheiro e Histórico de Envios.<br>
- As fotos e informações do usuário e contatos são carregados a partir da API (https://randomuser.me/api/) e salvos localmente através da lib async-storage.<br>
- Na tela de Enviar Dinheiro é realizado o mesmo procedimento para carregar as fotos e informações dos contatos.<br>
- Ao selecionar um contato é exibida uma tela com as informações do contato. Nessa tela existe um campo para informar o valor que deseja enviar.<br>
- Na tela de Histórico de Envios é exibido a lista com os envios realizados pelo usuário, contendo foto, nome, telefone e valor enviado.<br>
- Para armazenar as transferências realizadas é utilizado também a lib async-storage.<br>

<h3>build</h3>

<code>yarn install</code><br>

android:<br>
<code>yarn android</code><br>
ios:<br>
<code>yarn ios</code>
