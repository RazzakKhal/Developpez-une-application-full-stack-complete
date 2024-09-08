package com.openclassrooms.mddapi.controllers;

import com.openclassrooms.mddapi.dtos.fromView.CreateCommentDto;
import com.openclassrooms.mddapi.dtos.toView.CommentDto;
import com.openclassrooms.mddapi.services.CommentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("/api/comments")
public class CommentController {
    @Autowired
    CommentService commentService;

    @PostMapping("create")
   CommentDto postComment(@RequestBody CreateCommentDto createCommentDto){
    return commentService.postComment(createCommentDto);
    }
}
