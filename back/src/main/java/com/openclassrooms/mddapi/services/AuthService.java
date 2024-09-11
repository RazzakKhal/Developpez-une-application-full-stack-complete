package com.openclassrooms.mddapi.services;

import com.openclassrooms.mddapi.dtos.fromView.LoginUserDto;
import com.openclassrooms.mddapi.dtos.fromView.RegisterUserDto;
import com.openclassrooms.mddapi.dtos.toView.UserDto;

import java.util.Map;

public interface AuthService {
    public Map<String, String> createUser(RegisterUserDto registerUserDto);

    public Map<String, String> loginUser(LoginUserDto loginUserDto);

    UserDto getMe(Object principal);
}