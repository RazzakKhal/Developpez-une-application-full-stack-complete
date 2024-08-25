package com.openclassrooms.mddapi.dtos.toView;

import lombok.Data;

import java.time.Instant;

@Data
public class UserDto {
    private Long id;
    private String name;
    private String email;
    private Instant createdAt;

}