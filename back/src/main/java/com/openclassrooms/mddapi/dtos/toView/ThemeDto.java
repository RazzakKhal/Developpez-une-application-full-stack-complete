package com.openclassrooms.mddapi.dtos.toView;

import com.openclassrooms.mddapi.models.Subscription;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
public class ThemeDto {
    private Long id;
    private String name;
    private String description;


}
