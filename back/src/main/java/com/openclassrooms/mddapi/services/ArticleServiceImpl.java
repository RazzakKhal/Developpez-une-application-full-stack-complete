package com.openclassrooms.mddapi.services;

import com.openclassrooms.mddapi.dtos.fromView.CreateArticleDto;
import com.openclassrooms.mddapi.dtos.toView.ArticleDto;
import com.openclassrooms.mddapi.mappers.ArticleMapper;
import com.openclassrooms.mddapi.models.Article;
import com.openclassrooms.mddapi.models.Theme;
import com.openclassrooms.mddapi.models.User;
import com.openclassrooms.mddapi.repositories.ArticleRepository;
import com.openclassrooms.mddapi.repositories.ThemeRepository;
import com.openclassrooms.mddapi.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;

@Service
public class ArticleServiceImpl implements ArticleService{

    @Autowired
    ArticleRepository articleRepository;

    @Autowired
    UserRepository userRepository;

    @Autowired
    ThemeRepository themeRepository;

    @Autowired
    ArticleMapper articleMapper;

    public List<ArticleDto> getAllUsersSubscribedArticles(Long userId){
        List<Article> articles = articleRepository.getArticlesByUserID(userId);
        return articleMapper.toDto(articles);
    }
    @Transactional
    public ArticleDto createAnArticle(CreateArticleDto createArticle){
        Article article = new Article();
        article.setContent(createArticle.getContent());
        article.setTitle(createArticle.getTitle());

        Optional<User> optUser = userRepository.findById(createArticle.getUserId());
        Optional<Theme> optTheme = themeRepository.findById(createArticle.getThemeId());
        if(optTheme.isPresent() && optUser.isPresent() ){
            article.setTheme(optTheme.get());
            article.setUser(optUser.get());
            articleRepository.saveAndFlush(article);
            return articleMapper.toDto(article);
        }

    throw new RuntimeException("theme inexistant");
    }

    @Transactional
    public ArticleDto getArticleById(Long articleId){
        Optional<Article> optArticle = articleRepository.findById(articleId);

        if(optArticle.isPresent()){
            Article article = optArticle.get();
            article.getComments();
            article.getTheme();
            return articleMapper.toDto(article);
        }

        throw new RuntimeException("Cet article n'existe pas en Bdd");
    }
}
