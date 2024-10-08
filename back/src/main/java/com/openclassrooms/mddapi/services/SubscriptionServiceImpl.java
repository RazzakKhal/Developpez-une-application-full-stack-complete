package com.openclassrooms.mddapi.services;

import com.openclassrooms.mddapi.dtos.fromView.CreateSubscriptionDto;
import com.openclassrooms.mddapi.dtos.toView.UserDto;
import com.openclassrooms.mddapi.mappers.UserMapper;
import com.openclassrooms.mddapi.models.Subscription;
import com.openclassrooms.mddapi.models.Theme;
import com.openclassrooms.mddapi.models.User;
import com.openclassrooms.mddapi.repositories.SubscriptionRepository;
import com.openclassrooms.mddapi.repositories.ThemeRepository;
import com.openclassrooms.mddapi.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.transaction.Transactional;
import java.util.Optional;

@Service
public class SubscriptionServiceImpl implements SubscriptionService{
    @Autowired
    SubscriptionRepository subscriptionRepository;

    @Autowired
    UserRepository userRepository;

    @PersistenceContext
    private EntityManager entityManager;

    @Autowired
    ThemeRepository themeRepository;
    @Autowired
    UserMapper userMapper;
    @Transactional
    @Override
    public UserDto createSubscription(CreateSubscriptionDto subscriptionDto){
        Optional<User> optUser = userRepository.findById(subscriptionDto.getUserId());
        Optional<Theme> optTheme = themeRepository.findById(subscriptionDto.getThemeId());

        if(optUser.isPresent() && optTheme.isPresent()){
           User user = optUser.get();
           Theme theme = optTheme.get();
           Subscription subscription = new Subscription();
           subscription.setUser(user);
           subscription.setTheme(theme);
           subscriptionRepository.saveAndFlush(subscription);

           user.getSubscriptions();
           user.getArticles();
           user.getComments();

           return userMapper.toDto(user);
        }else{
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST,"erreur dans la récuperation du theme ou du user");
        }
    }

    @Override
    @Transactional
    public UserDto deleteSubscription(Long userId, Long themeId, Authentication authentication) {
        Optional<Subscription> optionalSubscription = subscriptionRepository.findByUserIdAndThemeId(userId, themeId);
        if(optionalSubscription.isPresent()){
            Subscription subscription = optionalSubscription.get();
            User user = subscription.getUser();

            // si l'utilisateur courant est bien celui connecté alors je supprime sinon je ne supprime pas
            if(((User) authentication.getPrincipal()).getId() == user.getId()){
                subscriptionRepository.delete(subscription);

                entityManager.flush();

                user.getSubscriptions();
                user.getComments();
                user.getArticles();
                return userMapper.toDto(user);
            }
        }


        throw new ResponseStatusException(HttpStatus.BAD_REQUEST,"erreur dans la récuperation de la souscription");
    }
}
