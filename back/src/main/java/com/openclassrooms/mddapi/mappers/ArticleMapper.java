package com.openclassrooms.mddapi.mappers;

import com.openclassrooms.mddapi.dtos.toView.ArticleDto;
import com.openclassrooms.mddapi.dtos.toView.CommentDto;
import com.openclassrooms.mddapi.models.Article;
import lombok.NoArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;


@Component
@NoArgsConstructor
public class ArticleMapper {

    @Autowired
    UserMapper userMapper;

    @Autowired
    ThemeMapper themeMapper;

    @Autowired
    CommentMapper commentMapper;

    public List<ArticleDto> toDto(List<Article> articles){
        List<ArticleDto> articlesDto = new ArrayList<>();

        for(Article article : articles){
            ArticleDto articleDto = toDto(article);
            articlesDto.add(articleDto);
        }

        return articlesDto;

    }

    public ArticleDto toDto(Article article){
        ArticleDto articleDto = new ArticleDto();
        articleDto.setId(article.getId());
        articleDto.setTitle(article.getTitle());
        articleDto.setContent(article.getContent());
        articleDto.setComments(commentMapper.toDto(article.getComments()));
        articleDto.setCreatedAt(article.getCreatedAt());
        articleDto.setUser(userMapper.toDto(article.getUser()));
        articleDto.setTheme(themeMapper.toDto(article.getTheme()));

        return articleDto;
    }
}
