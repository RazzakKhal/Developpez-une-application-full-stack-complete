package com.openclassrooms.mddapi.mappers;

import com.openclassrooms.mddapi.dtos.toView.SubscriptionDto;
import com.openclassrooms.mddapi.dtos.toView.UserDto;
import com.openclassrooms.mddapi.models.Subscription;
import com.openclassrooms.mddapi.models.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class SubscriptionMapper {

    @Autowired
    ThemeMapper themeMapper;
     SubscriptionDto toDto(Subscription subscription){

        SubscriptionDto subscriptionDto = new SubscriptionDto();

        subscriptionDto.setTheme(themeMapper.toDto(subscription.getTheme()));

        return subscriptionDto;
    }

    public List<SubscriptionDto> toDto(List<Subscription> subscriptions){
        List<SubscriptionDto> subscriptionDtos = new ArrayList<>();
        for(Subscription subscription : subscriptions){
            subscriptionDtos.add(toDto(subscription));
        }

        return subscriptionDtos;
    }
}
