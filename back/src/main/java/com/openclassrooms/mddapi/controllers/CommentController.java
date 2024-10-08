package com.openclassrooms.mddapi.controllers;

import com.openclassrooms.mddapi.dtos.fromView.CreateCommentDto;
import com.openclassrooms.mddapi.dtos.toView.CommentDto;
import com.openclassrooms.mddapi.services.CommentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@CrossOrigin
@RequestMapping("/api/comments")
public class CommentController {
    @Autowired
    CommentService commentService;

    /**
     * permet de créer un commentaire
     * @param createCommentDto
     * @return
     */
    @PostMapping("create")
   CommentDto postComment(@Valid @RequestBody CreateCommentDto createCommentDto){
    return commentService.postComment(createCommentDto);
    }
}
