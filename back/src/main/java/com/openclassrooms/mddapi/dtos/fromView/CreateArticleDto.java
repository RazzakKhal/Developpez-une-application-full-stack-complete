package com.openclassrooms.mddapi.dtos.fromView;

import com.openclassrooms.mddapi.models.Theme;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class CreateArticleDto {

    Long themeId;

    Long userId;

    String title;

    String content;
}
