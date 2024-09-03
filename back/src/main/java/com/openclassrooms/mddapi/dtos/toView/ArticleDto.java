package com.openclassrooms.mddapi.dtos.toView;

import com.openclassrooms.mddapi.models.Comment;
import com.openclassrooms.mddapi.models.Theme;
import com.openclassrooms.mddapi.models.User;
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
    private User user;
    private List<Comment> comments;
    private Instant createdAt;
}
