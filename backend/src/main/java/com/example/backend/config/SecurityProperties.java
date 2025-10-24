package com.example.backend.config;

import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Configuration;
import lombok.Data;

@Data
@Configuration
@ConfigurationProperties(prefix = "app.security")
public class SecurityProperties {
    private Jwt jwt = new Jwt();
    private Cors cors = new Cors();

    @Data
    public static class Jwt {
        private String secretKey;
        private long expiration;
    }

    @Data
    public static class Cors {
        private String[] allowedOrigins;
        private String[] allowedMethods;
        private String[] allowedHeaders;
        private boolean allowCredentials;
        private long maxAge;
    }
} 