package com.openclassrooms.mddapi.dtos.fromView;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

@Data
@NoArgsConstructor
public class CreateCommentDto {
    @NotNull
    Long articleId;
    @NotNull
    Long userId;
    @NotBlank
    String content;
}
