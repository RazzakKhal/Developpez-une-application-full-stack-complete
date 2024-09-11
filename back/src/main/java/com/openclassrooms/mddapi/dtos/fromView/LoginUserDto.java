package com.openclassrooms.mddapi.dtos.fromView;

import lombok.Data;

import javax.validation.constraints.NotBlank;

@Data
public class LoginUserDto {
    @NotBlank
    private String email;
    @NotBlank
    private String password;
}
