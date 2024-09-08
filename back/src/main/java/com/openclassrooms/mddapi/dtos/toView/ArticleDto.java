package com.openclassrooms.mddapi.dtos.toView;

import com.openclassrooms.mddapi.models.Comment;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.time.Instant;
import java.util.List;
@Data
@NoArgsConstructor
public class ArticleDto {
    private Long id;
    private String title;
    private String content;
    private UserDto user;

    private ThemeDto theme;
    private List<CommentDto> comments;
    private Instant createdAt;
}
