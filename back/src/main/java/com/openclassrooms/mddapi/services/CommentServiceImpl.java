package com.openclassrooms.mddapi.services;

import com.openclassrooms.mddapi.dtos.fromView.CreateCommentDto;
import com.openclassrooms.mddapi.dtos.toView.CommentDto;
import com.openclassrooms.mddapi.mappers.CommentMapper;
import com.openclassrooms.mddapi.models.Article;
import com.openclassrooms.mddapi.models.Comment;
import com.openclassrooms.mddapi.models.User;
import com.openclassrooms.mddapi.repositories.ArticleRepository;
import com.openclassrooms.mddapi.repositories.CommentRepository;
import com.openclassrooms.mddapi.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;
@Service
public class CommentServiceImpl implements CommentService{
    @Autowired
    CommentMapper commentMapper;

    @Autowired
    CommentRepository commentRepository;

    @Autowired
    ArticleRepository articleRepository;

    @Autowired
    UserRepository userRepository;

    public CommentDto postComment(CreateCommentDto createCommentDto){
        Comment comment = commentMapper.toEntity(createCommentDto);

        Optional<User> optionalUser = userRepository.findById(createCommentDto.getUserId());
        Optional<Article> optionalArticle = articleRepository.findById(createCommentDto.getArticleId());

        if(optionalArticle.isPresent() && optionalUser.isPresent()){
            comment.setUser(optionalUser.get());
            comment.setArticle(optionalArticle.get());
            commentRepository.saveAndFlush(comment);

            return commentMapper.toDto(comment);
        }

        throw new RuntimeException("erreur dans la récuperation de l'article ou du user");
    }
}
