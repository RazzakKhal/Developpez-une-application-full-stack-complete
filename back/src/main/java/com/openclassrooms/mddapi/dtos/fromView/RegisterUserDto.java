package com.openclassrooms.mddapi.dtos.fromView;

import lombok.Data;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;

@Data
public class RegisterUserDto {
    @NotBlank
    private String name;
    @NotBlank
    private String email;
    @NotBlank
    @Pattern(
            regexp = "(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\\d$@$!%*?&].{8,}",
            message = "Le mot de passe doit contenir au moins 8 caractères, avec une majuscule, une minuscule, un chiffre et un caractère spécial."
    )
    private String password;
}
