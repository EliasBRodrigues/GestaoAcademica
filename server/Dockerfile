FROM maven:3.8.6-amazoncorretto-17 as build
WORKDIR /
COPY . .
RUN mvn clean package -X -DskipTests

FROM openjdk:17-ea-10-jdk-slim
WORKDIR /
COPY --from=build ./server/target/*.jar ./spring.jar
ENTRYPOINT java -jar spring.jar