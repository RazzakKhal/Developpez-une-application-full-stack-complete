package com.openclassrooms.mddapi.services;


import com.openclassrooms.mddapi.dtos.fromView.LoginUserDto;
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

import java.util.Map;
import java.util.Optional;
@Service
public class AuthServiceImpl implements AuthService{

    @Autowired
    JwtUtil jwtUtil;
    @Autowired
    BCryptPasswordEncoder bCryptPasswordEncoder;
    @Autowired
    UserMapper userMapper;
    @Autowired
    UserRepository userRepository;
    @Autowired
    PasswordSalter passwordSalter;

    /**
     * permet la creation d'un utulisateur si il n'existe pas déjà en BDD, et la connexion en retournant le token
     * @param registerUserDto
     * @return
     */
    @Override
    public Map<String, String> createUser(RegisterUserDto registerUserDto){
        if(userRepository.findByEmail(registerUserDto.getEmail()).isPresent()){
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST,"un utilisateur avec cette identifiant existe déjà");
        }
        User user= userMapper.toEntity(registerUserDto);
        user.setPassword(bCryptPasswordEncoder.encode(passwordSalter.saltPassword(user.getPassword())));
        userRepository.save(user);
        String token = jwtUtil.generateToken(user);
        return Map.of("token", token);
    }

    /**
     * permet la connexion de l'utilisateur en lui retournant un token si la combinaison id/mdp est correct
     * @param loginUserDto
     * @return
     */
    @Override
    public Map<String, String> loginUser(LoginUserDto loginUserDto){
        User user = userMapper.toEntity(loginUserDto);
        Optional<User> userBdd = userRepository.findByEmail(user.getEmail());
        if(userBdd.isEmpty() || !bCryptPasswordEncoder.matches(passwordSalter.saltPassword(user.getPassword()),userBdd.get().getPassword())){
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST,"la combinaison nom d'utilisateur / mot de passe ne correspond à aucun utlisateur");
        }
        String token = jwtUtil.generateToken(userBdd.get());
        return Map.of("token", token);
    }

    /**
     * retourne l'utilisateur actuellement connecté
     * @param principal
     * @return
     */
    @Override
    public UserDto getMe(Object principal){
        return userMapper.toDto((User) principal);
    }
}
