package com.openclassrooms.mddapi.services;

import com.openclassrooms.mddapi.dtos.fromView.RegisterUserDto;
import com.openclassrooms.mddapi.dtos.toView.UserDto;
import com.openclassrooms.mddapi.mappers.UserMapper;
import com.openclassrooms.mddapi.models.User;
import com.openclassrooms.mddapi.repositories.UserRepository;
import com.openclassrooms.mddapi.security.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.security.Principal;
import java.util.Map;
import java.util.Optional;

@Service
public class UserServiceImpl implements UserService{

    @Autowired
    UserRepository userRepository;

    @Autowired
    PasswordSalter passwordSalter;

    @Autowired
    JwtUtil jwtUtil;

    @Autowired
    UserMapper userMapper;

    @Autowired
    BCryptPasswordEncoder bCryptPasswordEncoder;

    public Map<String, String> updateAnUser(User principal, RegisterUserDto updateUserDto){
        Optional<User> optUser = userRepository.findByEmail(principal.getEmail());
        if(optUser.isPresent()){
            User user = optUser.get();
            user.setEmail(updateUserDto.getEmail());
            user.setPassword(bCryptPasswordEncoder.encode(passwordSalter.saltPassword(updateUserDto.getPassword())));
            user.setName(updateUserDto.getName());
            userRepository.saveAndFlush(user);
            String token = jwtUtil.generateToken(user);
            return Map.of("token", token);

        }
        throw new ResponseStatusException(HttpStatus.BAD_REQUEST,"erreur dans la récuperation du user");
    }
}
