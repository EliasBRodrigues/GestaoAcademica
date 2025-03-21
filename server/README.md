# Configuração do Backend (Spring):

- Abra o projeto no seu IDE (Eclipse, IntelliJ, etc.).

Certifique-se de que o Spring está configurado corretamente para o ambiente de desenvolvimento.

No arquivo application.properties, configure as credenciais do banco de dados MySQL:

```
spring.datasource.url=jdbc:mysql://localhost:3306/gestao_academica
spring.datasource.username=USUARIO-LOCAL
spring.datasource.password=SENHA-LOCAL

```
## Compile e inicie o backend com o seguinte comando:

```
mvn spring-boot:run

```