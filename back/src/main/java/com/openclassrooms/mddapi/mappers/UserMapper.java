package com.openclassrooms.mddapi.mappers;

import com.openclassrooms.mddapi.dtos.fromView.LoginUserDto;
import com.openclassrooms.mddapi.dtos.fromView.RegisterUserDto;
import com.openclassrooms.mddapi.dtos.toView.UserDto;
import com.openclassrooms.mddapi.models.User;
import org.springframework.stereotype.Component;

@Component
public class UserMapper {

    public User toEntity(RegisterUserDto registerUserDto){
        if(registerUserDto == null){
            return null;
        }
        User user = new User();
        user.setEmail(registerUserDto.getEmail());
        user.setPassword(registerUserDto.getPassword());
        user.setName(registerUserDto.getName());

        return user;
    }

    public User toEntity(LoginUserDto loginUserDto){
        if(loginUserDto == null){
            return null;
        }
        User user = new User();
        user.setEmail(loginUserDto.getEmail());
        user.setPassword(loginUserDto.getPassword());

        return user;
    }

    public UserDto toDto(User user){
        if(user == null){
            return null;
        }
        UserDto userDto = new UserDto();

        userDto.setCreatedAt(user.getCreatedAt());
        userDto.setName(user.getName());
        userDto.setEmail(user.getEmail());
        userDto.setId(user.getId());
        userDto.setArticles(user.getArticles());
        userDto.setComments(user.getComments());
        userDto.setSubscriptions(user.getSubscriptions());

        return userDto;
    }
}
