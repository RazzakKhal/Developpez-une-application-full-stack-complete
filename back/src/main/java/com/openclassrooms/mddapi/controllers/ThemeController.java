package com.openclassrooms.mddapi.controllers;

import com.openclassrooms.mddapi.dtos.toView.ThemeDto;
import com.openclassrooms.mddapi.services.ThemeService;
import com.openclassrooms.mddapi.services.ThemeServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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
