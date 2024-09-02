package com.openclassrooms.mddapi.dtos.toView;

import com.openclassrooms.mddapi.models.Article;
import com.openclassrooms.mddapi.models.Comment;
import com.openclassrooms.mddapi.models.Subscription;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.OneToMany;
import java.time.Instant;
import java.util.List;

@Data
@NoArgsConstructor
public class UserDto {
    private Long id;
    private String name;
    private String email;
    private Instant createdAt;
    private List<Subscription> subscriptions;
    private List<Comment> comments;
    private List<Article> articles;

}