# FROM maven:3.8.6-amazoncorretto-17 as build
# WORKDIR /
# COPY . .
# RUN mvn clean package -X -DskipTests

# FROM openjdk:17-ea-10-jdk-slim
# WORKDIR /
# COPY --from=build ./server/target/*.jar ./spring.jar
# ENTRYPOINT java -jar spring.jar

FROM openjdk:17-alpine

WORKDIR /app

COPY server/target/React-Spring-0.0.1-SNAPSHOT.jar app.jar

EXPOSE 8080

CMD ["java", "-jar", "app.jar"]