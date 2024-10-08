package com.openclassrooms.mddapi.controllers;

import com.openclassrooms.mddapi.dtos.fromView.CreateSubscriptionDto;
import com.openclassrooms.mddapi.dtos.toView.UserDto;
import com.openclassrooms.mddapi.services.SubscriptionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@CrossOrigin
@RestController
@RequestMapping("/api/subscription")
public class SubscriptionController {

    @Autowired
    SubscriptionService subscriptionService;

    /**
     * permet de souscrire à un thème
     * @param subscriptionDto
     * @return
     */
    @PostMapping("/create")
    UserDto createTheme(@Valid @RequestBody CreateSubscriptionDto subscriptionDto){
        return subscriptionService.createSubscription(subscriptionDto);
    }

    /**
     * permet de supprimer une souscription à un theme et vérifie que c'est bien le bon utilisateur
     * qui tente de se désabonner
     * @param userId
     * @param themeId
     * @param authentication
     * @return
     */
    @DeleteMapping("/delete/{userId}/{themeId}")
    UserDto deleteTheme(@PathVariable String userId, @PathVariable String themeId,  Authentication authentication){
        return subscriptionService.deleteSubscription(Long.valueOf(userId),Long.valueOf(themeId) , authentication);
    }
}
