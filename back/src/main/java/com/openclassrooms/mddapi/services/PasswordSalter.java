package com.openclassrooms.mddapi.services;

public interface PasswordSalter {
    String saltPassword(String password);
}
