package com.openclassrooms.mddapi.controllers;

import com.openclassrooms.mddapi.dtos.fromView.CreateArticleDto;
import com.openclassrooms.mddapi.dtos.toView.ArticleDto;
import com.openclassrooms.mddapi.services.ArticleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/api/articles")
public class ArticleController {

    @Autowired
    ArticleService articleService;

    /**
     * récupère tous les articles liés à l'utilisateur connecté
     * @param userId
     * @return
     */
    @GetMapping("/user/{userId}")
    List<ArticleDto> getAllUsersSubscribedArticles(@PathVariable Long userId){

        return articleService.getAllUsersSubscribedArticles(userId);
    }

    @PostMapping("/create")
    ArticleDto createAnArticle(@Valid @RequestBody CreateArticleDto createArticle){
        return articleService.createAnArticle(createArticle);
    }

    /**
     * récupère un article par son id
     * @param articleId
     * @return
     */
    @GetMapping("{articleId}")
    ArticleDto getArticleByID(@PathVariable Long articleId){

        return articleService.getArticleById(articleId);
    }


}
