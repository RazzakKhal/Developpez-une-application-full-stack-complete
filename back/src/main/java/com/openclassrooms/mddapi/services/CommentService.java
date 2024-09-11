package com.openclassrooms.mddapi.services;

import com.openclassrooms.mddapi.dtos.fromView.CreateCommentDto;
import com.openclassrooms.mddapi.dtos.toView.CommentDto;

public interface CommentService {

    CommentDto postComment(CreateCommentDto createCommentDto);
}
