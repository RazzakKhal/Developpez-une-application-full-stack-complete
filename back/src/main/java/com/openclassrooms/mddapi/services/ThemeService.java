package com.openclassrooms.mddapi.services;

import com.openclassrooms.mddapi.dtos.toView.ThemeDto;
import com.openclassrooms.mddapi.models.Theme;

import java.util.List;
import java.util.Map;

public interface ThemeService {

    public Map<String, List<ThemeDto>> getAllThemes();
}
