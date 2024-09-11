package com.openclassrooms.mddapi.dtos.fromView;

import lombok.Data;

import javax.validation.constraints.NotNull;

@Data
public class SubscriptionDto {
    @NotNull
    Long themeId;
    @NotNull
    Long userId;
}
