# hamburger-shop

## Descrição do Projeto

<h1 align="center">
    <a href="https://pt-br.reactjs.org/">⚛️ React</a>
</h1>
<p align="center">Aplicativo que simula uma hamburgueria, onde clientes cadastrados podem fazer pedidos de sanduiches, bebidas e sobremesas.</p>

<h2 align="center">Conteúdo</h2>

<p align="center">
  <a href="#objetivo">Objetivo</a> <br />
  <a href="#description">Descrição</a> <br />
  <a href="#use">Como utilizar</a> <br />
  <a href="#status">Status do Projeto</a> <br />
  <a href="#deploy">Link do deploy no Vercel</a> <br />
  <a href="#tech">Tecnologias Utilizadas</a> <br />
  <a href="#author">Autor</a> <br />
</p>

<h2 id="objetivo">Objetivo</h2>
<p>Simular um e-comerce de venda de produtos alimentícios.</p>
<p>Aplicativo elaborado como parte do curso de formação web full stack da <a href="https://kenzie.com.br/">Kenzie Academy Brasil</a>.</p>

<h2 id="description">Descrição</h2>
<p>O aplicativo possui 3 páginas principais e um modal que representa o carrinho de compras.</p>
<p>Possui também um cabeçalho presente na Home page.</p>
<ul>
  <li>Homepage - página que lista os produtos disponíveis</li>
  <li>Signin - página de login do cliente</li>
  <li>Signup - página de cadastro de um novo cliente do site</li>
  <li>Carrinho de compras - modal que lista todos os itens adicionados pelo cliente</li>
</ul>

<h2 id="use">Como utilizar</h2>

<h3>Signup Page</h3>

Página de cadastro de um novo cliente. Após o cadastro o cliente é direcionado para a página de login.

<h3>Signin Page</h3>

O cliente já cadastrado no site precisa estar logado para poder adicionar os produtos ao carrinho. O login é feito nesta página.

<h3>Home Page</h3>

<p>Após efetuar o login o usuário é direcionado à Homepage onde são exibidos os itens disponíveis.</p>
<p>Cada item é mostrado em um card onde são exibidas suas informações, como nome, valor, categoria e uma imagem ilustrativa.</p>

<h3>Cabeçalho</h3>

<p>As seguintes informações são exibidas no cabeçalho:</p>
<ul>
  <li>Logo à esquerda - possui um link para a página de login</li>
  <li>Campo de pesquisa à direita - basta iniciar a digitação para uma busca automática</li>
  <li>Ícone de cliente logado - o ícone ficará verde quando o cliente estiver logado e cinza quando não estiver</li>
  <li>Carrinho - Ìcone que representa o carrinho e quando existem itens no mesmo, a quantidade é exibida</li>
  <li>Logout - Ìcone para o cliente fazer logout do aplicativo</li>
</ul>


<h3>Cart Modal</h3>

Ao clicar no ícone do carrinho um modal é exibido contendo os produtos adicionados com a quantidade, imagem do produto, seu nome e o valor total dos itens.  
  
<h2 id="status">Status do Projeto</h2>
Projeto já finalizado e funcional.
  
<h2 id="deploy">Link do deploy com o aplicativo funcional</h2>
<a href="https://hamburger-shop.vercel.app/">Hamburger-shop</a>

<h2 id="tech">🛠 Tecnologias</h2>
<ul>
  <li><a href='https://pt-br.reactjs.org/'>React</a></li>
  <li><a href='https://www.typescriptlang.org/'>TypeScript</a></li> 
  <li><a href='https://mui.com/pt/'>Material UI</a></li>
  <li><a href='https://styled-components.com/'>Styled Components</a></li>
  <li><a href='https://pt-br.reactjs.org/docs/context.html'>ContextAPI</a></li>  
  <li><a href='https://github.com/remix-run/react-router#readme'>React Router Dom</a></li>
  <li><a href='https://github.com/jeremyben/json-server-auth'>JSON-Server-Auth</a> Fake API para registro de clientes, realização do login e registro dos produtos</li>
</ul>

<h2 id="author">Autor</h2>

<div style="border: 5px solid #f00">
  <img src="https://avatars.githubusercontent.com/u/79763201?s=96&v=4" alt="avatar" />
</div>
<a href="https://www.linkedin.com/in/robertobressanelli/"> 🚀 Roberto Bressanelli</a>
