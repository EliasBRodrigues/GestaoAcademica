package com.gestao_academica_backend.server;

import org.modelmapper.ModelMapper;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@SpringBootApplication
@Configuration
public class ServerApplication {

	@Bean
	public ModelMapper mapper(){
		return new ModelMapper();
	}

	public static void main(String[] args) {
		SpringApplication.run(ServerApplication.class, args);
	}

}
