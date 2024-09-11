package com.openclassrooms.mddapi.services;

import com.openclassrooms.mddapi.dtos.fromView.CreateSubscriptionDto;
import com.openclassrooms.mddapi.dtos.toView.UserDto;
import org.springframework.security.core.Authentication;

public interface SubscriptionService {

    UserDto createSubscription(CreateSubscriptionDto subscriptionDto);

    UserDto deleteSubscription(Long userId, Long themeId, Authentication authentication);
}
