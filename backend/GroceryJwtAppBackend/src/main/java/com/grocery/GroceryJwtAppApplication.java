package com.grocery;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
@EnableJpaRepositories("com.grocery")

public class GroceryJwtAppApplication {

	public static void main(String[] args) {
		SpringApplication.run(GroceryJwtAppApplication.class, args);
	}
}
