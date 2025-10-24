package com.example.backend.controller;

import com.example.backend.model.User;
import com.example.backend.service.UserService;
import com.example.backend.security.JwtService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import java.util.Base64;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "http://localhost:3000")
public class AuthController {
    private static final Logger logger = LoggerFactory.getLogger(AuthController.class);

    @Autowired
    private UserService userService;

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private JwtService jwtService;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @PostMapping("/register")
    public ResponseEntity<?> registerUser(@RequestBody User user) {
        try {
            // Decode the base64 encoded password
            String decodedPassword = new String(Base64.getDecoder().decode(user.getPassword()));
            user.setPassword(passwordEncoder.encode(decodedPassword));
            User registeredUser = userService.registerUser(user);
            return ResponseEntity.ok(registeredUser);
        } catch (Exception e) {
            logger.error("Registration failed: {}", e.getMessage());
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @PostMapping("/login")
    public ResponseEntity<?> loginUser(@RequestBody Map<String, String> loginRequest) {
        try {
            logger.info("Received login request body: {}", loginRequest);
            
            if (loginRequest == null) {
                logger.error("Login failed: Request body is null");
                return ResponseEntity.badRequest().body("Request body is required");
            }

            String username = loginRequest.get("username");
            String encryptedPassword = loginRequest.get("password");
            
            if (username == null || username.trim().isEmpty()) {
                logger.error("Login failed: Username is empty");
                return ResponseEntity.badRequest().body("Username is required");
            }
            
            if (encryptedPassword == null || encryptedPassword.trim().isEmpty()) {
                logger.error("Login failed: Password is empty");
                return ResponseEntity.badRequest().body("Password is required");
            }

            // Decode the base64 encoded password
            String decodedPassword = new String(Base64.getDecoder().decode(encryptedPassword));
            logger.info("Attempting login with username: {}", username);

            Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                    username,
                    decodedPassword
                )
            );

            UserDetails userDetails = (UserDetails) authentication.getPrincipal();
            String token = jwtService.generateToken(userDetails);

            Map<String, Object> response = new HashMap<>();
            response.put("token", token);
            response.put("username", userDetails.getUsername());

            logger.info("Login successful for username: {}", userDetails.getUsername());
            return ResponseEntity.ok(response);
        } catch (Exception e) {
            logger.error("Login failed: {}", e.getMessage());
            return ResponseEntity.badRequest().body("Invalid username or password");
        }
    }
} 