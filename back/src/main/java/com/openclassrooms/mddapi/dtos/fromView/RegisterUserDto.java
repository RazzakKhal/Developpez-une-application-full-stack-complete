package com.openclassrooms.mddapi.dtos.fromView;

import lombok.Data;

@Data
public class RegisterUserDto {

    private String name;

    private String email;

    private String password;
}
