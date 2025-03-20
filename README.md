# GestaoAcademica

O sistema permite que professores e alunos acessem e gerenciem informações relevantes, como matrícula, notas, informações de contato, faltas e horários.

## 📌 Principais Recursos:

- Alunos: informações de contato, histórico acadêmico, horários de aula e frequência acadêmica.
- Professores: informações de contato, lançamento de frequência e notas para alunos matriculados naquela matéria.

## 🖥️ Tecnologias Utilizadas:

- Spring: Framework de desenvolvimento de aplicações em Java, que oferece recursos abrangentes para criar aplicativos web escaláveis e seguros.

- React: biblioteca front-end JavaScript de código aberto com foco em criar interfaces de usuário em páginas web. 

- MySQL: Banco de dados relacional que requer conexão local para funcionamento com a porta **3306**.
```
- Username: james / charles
- Password: user / user
```
🔄 Funcionalidades do Sistema:
### 1. Módulo Aluno
- O aluno pode visualizar seu histórico acadêmico, incluindo as matérias em que está matriculado, suas notas, e as faltas.
- O aluno tem acesso ao seu horário de aulas, podendo visualizar todas as disciplinas, horários e salas correspondentes.
- Visualização de informações de contato de professores e coordenadores, para facilitar a comunicação direta.
### 2. Módulo Professor
- O professor pode visualizar a lista de alunos matriculados nas suas matérias, além de lançar as notas e frequência dos mesmos.
- O lançamento de notas pode ser feito por meio de um formulário simples, facilitando o processo de atualização do sistema.

🚀 Como Rodar o Projeto
### 1. Clonar o Repositório:
- Clone o repositório com o seguinte comando:
  ```
  git clone https://github.com/EliasBRodrigues/GestaoAcademica.git
  ```
### 2. Configurar o Banco de Dados:
- Certifique-se de que o MySQL está instalado em sua máquina e funcionando na porta 3306.
- Crie um banco de dados chamado gestao_academica (ou use o nome desejado e altere a configuração no arquivo de propriedades).
- Utilize o script presente na pasta **/resources** para criar as tabelas necessárias no banco de dados.

