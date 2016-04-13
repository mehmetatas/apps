package net.mehmetatas.ui;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.orm.jpa.EntityScan;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@EntityScan(basePackages = "net.mehmetatas.commons.entities")
@ComponentScan(basePackages = "net.mehmetatas")
public class UiApplication {
	public static void main(String[] args) {
		SpringApplication.run(UiApplication.class, args);
	}
}
