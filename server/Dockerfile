FROM maven:3.8.6-amazoncorretto-17 as build

WORKDIR /app

COPY . .

RUN mvn clean package -DskipTests

FROM openjdk:17-jdk-slim

WORKDIR /app

COPY --from=build /app/target/*.jar /app/spring.jar

ENTRYPOINT ["java", "-jar", "/app/spring.jar"]
