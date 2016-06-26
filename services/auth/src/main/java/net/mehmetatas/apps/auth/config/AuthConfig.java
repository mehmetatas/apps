package net.mehmetatas.apps.auth.config;

import net.mehmetatas.apps.auth.config.interceptors.ValidationInterceptor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

/**
 * Created by mehmet on 08.05.2016.
 */
@Configuration
@Component
public class AuthConfig extends WebMvcConfigurerAdapter {
    @Autowired
    ValidationInterceptor validationInterceptor;

    @Override
    public void addInterceptors(InterceptorRegistry registry) {
        System.out.println("--- Adding Interceptor ---");
        registry.addInterceptor(validationInterceptor).addPathPatterns("/**");
    }
}
