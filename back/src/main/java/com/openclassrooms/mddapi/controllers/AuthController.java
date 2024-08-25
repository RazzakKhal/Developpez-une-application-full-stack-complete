package com.openclassrooms.mddapi.controllers;

import com.openclassrooms.mddapi.dtos.fromView.LoginUserDto;
import com.openclassrooms.mddapi.dtos.fromView.RegisterUserDto;
import com.openclassrooms.mddapi.dtos.toView.UserDto;
import com.openclassrooms.mddapi.services.AuthService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.Map;

@CrossOrigin
@RestController
@RequestMapping("/api/auth")
public class AuthController {

    @Autowired
    AuthService authService;
    @PostMapping("/register")
    Map<String, String> registerAnUser(@Valid @RequestBody RegisterUserDto registerUserDto){
        return authService.createUser(registerUserDto);
    }

    @PostMapping("/login")
    Map<String, String> loginAnUser(@Valid @RequestBody LoginUserDto loginUserDto){
        return authService.loginUser(loginUserDto);
    }

    @GetMapping("/me")
    UserDto getAnUser(Authentication authentication){
        return authService.getMe(authentication.getPrincipal());
    }
}