package com.openclassrooms.mddapi.controllers;

import com.openclassrooms.mddapi.dtos.fromView.SubscriptionDto;
import com.openclassrooms.mddapi.dtos.toView.ThemeDto;
import com.openclassrooms.mddapi.dtos.toView.UserDto;
import com.openclassrooms.mddapi.services.ThemeService;
import com.openclassrooms.mddapi.services.ThemeServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@CrossOrigin
@RestController
@RequestMapping("/api/themes")
public class ThemeController {
    @Autowired
    ThemeService themeService;

    @GetMapping("")
    Map<String, List<ThemeDto>> getAllThemes(){

        return themeService.getAllThemes();
    }

}
