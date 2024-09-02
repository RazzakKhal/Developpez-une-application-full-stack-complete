package com.openclassrooms.mddapi.services;

import com.openclassrooms.mddapi.dtos.fromView.SubscriptionDto;
import com.openclassrooms.mddapi.dtos.toView.UserDto;
import org.springframework.security.core.Authentication;

public interface SubscriptionService {

    UserDto createSubscription(SubscriptionDto subscriptionDto);

    UserDto deleteSubscription(Long userId, Long themeId, Authentication authentication);
}
