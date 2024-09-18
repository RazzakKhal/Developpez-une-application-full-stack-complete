package com.openclassrooms.mddapi.controllers;

import com.openclassrooms.mddapi.dtos.fromView.RegisterUserDto;
import com.openclassrooms.mddapi.dtos.toView.UserDto;
import com.openclassrooms.mddapi.models.User;
import com.openclassrooms.mddapi.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.Map;

@CrossOrigin
@RestController
@RequestMapping("/api/user")
public class UserController {

    @Autowired
    UserService userService;

    /**
     * permet de mettre à jour les informations de l'utilisateur
     * @param authentication
     * @param updateUserDto
     * @return
     */
    @PutMapping("")
    Map<String,String> updateAnUser(Authentication authentication,@Valid @RequestBody RegisterUserDto updateUserDto){
        return userService.updateAnUser((User) authentication.getPrincipal(), updateUserDto);
    }
}
