package com.openclassrooms.mddapi.dtos.toView;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class CommentDto {

    private Long id;

    private String content;

    private UserDto user;
}
