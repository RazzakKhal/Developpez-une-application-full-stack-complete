package com.openclassrooms.mddapi.mappers;

import com.openclassrooms.mddapi.dtos.fromView.CreateCommentDto;
import com.openclassrooms.mddapi.dtos.toView.CommentDto;
import com.openclassrooms.mddapi.models.Comment;
import lombok.NoArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Component
@NoArgsConstructor
public class CommentMapper {

    @Autowired
    UserMapper userMapper;

    public Comment toEntity(CreateCommentDto createCommentDto){
        Comment comment = new Comment();
        comment.setContent(createCommentDto.getContent());

        return comment;
    }
    public CommentDto toDto(Comment comment){
        CommentDto commentDto = new CommentDto();
        commentDto.setId(comment.getId());
        commentDto.setContent(comment.getContent());
        commentDto.setUser(userMapper.toDto(comment.getUser()));
        return commentDto;
    }

    public List<CommentDto> toDto(List<Comment> comments){
        List<CommentDto> commentDtos = new ArrayList<>();
        for(Comment comment : comments){
            commentDtos.add(toDto(comment));
        }
        return commentDtos;
    }
}
