package com.openclassrooms.mddapi.dtos.fromView;

import com.openclassrooms.mddapi.models.Theme;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

@Data
@NoArgsConstructor
public class CreateArticleDto {
    @NotNull
    Long themeId;
    @NotNull
    Long userId;
    @NotBlank
    String title;
    @NotBlank
    String content;
}
