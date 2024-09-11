package com.openclassrooms.mddapi.mappers;

import com.openclassrooms.mddapi.dtos.toView.ThemeDto;
import com.openclassrooms.mddapi.models.Theme;
import lombok.NoArgsConstructor;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@NoArgsConstructor
@Component
public class ThemeMapper {

    public List<ThemeDto> toDto(List<Theme> themes){
        List<ThemeDto> themesDto = new ArrayList<>();

        for(Theme theme : themes){
            ThemeDto themeDto = toDto(theme);
            themesDto.add(themeDto);
        }

        return themesDto;

    }

    public ThemeDto toDto(Theme theme){
        ThemeDto themeDto = new ThemeDto();
        themeDto.setId(theme.getId());
        themeDto.setName(theme.getName());
        themeDto.setDescription(theme.getDescription());

        return themeDto;
    }
}
