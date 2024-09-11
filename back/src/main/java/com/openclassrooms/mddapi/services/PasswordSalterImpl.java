package com.openclassrooms.mddapi.services;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

@Service
public class PasswordSalterImpl implements PasswordSalter{
    @Value("${app.secret.salter}")
    private String passwordSalter;

    /**
     * sel le mot de passe afin de ne pas pouvoir le retrouver à partir du hashage de bibliotheque de mdp
     * @param password
     * @return
     */
    @Override
    public String saltPassword(String password){
        return password + passwordSalter;
    }
}