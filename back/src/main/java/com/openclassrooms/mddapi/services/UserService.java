package com.openclassrooms.mddapi.services;

import com.openclassrooms.mddapi.dtos.fromView.RegisterUserDto;
import com.openclassrooms.mddapi.dtos.toView.UserDto;
import com.openclassrooms.mddapi.models.User;

import java.security.Principal;
import java.util.Map;

public interface UserService {
    Map<String, String> updateAnUser(User principal, RegisterUserDto updateUserDto);
}
