package com.openclassrooms.mddapi.dtos.toView;

import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.Instant;

@Data
@NoArgsConstructor
public class UserDto {
    private Long id;
    private String name;
    private String email;
    private Instant createdAt;

}