package com.openclassrooms.mddapi.dtos.fromView;

import lombok.Data;

@Data
public class LoginUserDto {

    private String email;

    private String password;
}
