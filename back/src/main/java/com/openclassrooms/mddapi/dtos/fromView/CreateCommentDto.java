package com.openclassrooms.mddapi.dtos.fromView;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class CreateCommentDto {

    Long articleId;

    Long userId;

    String content;
}
