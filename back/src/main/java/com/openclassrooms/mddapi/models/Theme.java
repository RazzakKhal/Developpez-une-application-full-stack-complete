package com.openclassrooms.mddapi.models;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;
@Data
@NoArgsConstructor
@Entity
public class Theme {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    private String description;
    @OneToMany(mappedBy = "theme")
    private List<Subscription> subscriptions = new ArrayList<>();
    @OneToMany(mappedBy = "theme")
    private List<Article> articles = new ArrayList<>();
}
