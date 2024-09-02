package com.openclassrooms.mddapi.services;

import com.openclassrooms.mddapi.dtos.fromView.CreateArticleDto;
import com.openclassrooms.mddapi.dtos.toView.ArticleDto;

import java.util.List;

public interface ArticleService {

    List<ArticleDto> getAllUsersSubscribedArticles(Long userId);

    ArticleDto createAnArticle(CreateArticleDto createArticle);
}
