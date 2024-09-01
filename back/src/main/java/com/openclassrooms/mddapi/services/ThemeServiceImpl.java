package com.openclassrooms.mddapi.services;

import com.openclassrooms.mddapi.dtos.toView.ThemeDto;
import com.openclassrooms.mddapi.mappers.ThemeMapper;
import com.openclassrooms.mddapi.models.Theme;
import com.openclassrooms.mddapi.repositories.ThemeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;
@Service
public class ThemeServiceImpl implements ThemeService{
    @Autowired
    ThemeRepository themeRepository;
    @Autowired
    ThemeMapper themeMapper;
    public Map<String, List<ThemeDto>> getAllThemes(){

        List<Theme> themes =  themeRepository.findAll();

        return Map.of("themes", themeMapper.toDto(themes));
    }
}
