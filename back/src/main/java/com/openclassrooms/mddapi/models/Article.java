package com.openclassrooms.mddapi.models;

import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.SourceType;

import javax.persistence.*;
import java.time.Instant;
import java.util.List;

@Data
@NoArgsConstructor
@Entity
public class Article {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;

    private String content;
    @ManyToOne
    @JoinColumn(name="owner_id",nullable = false)
    private User user;
    @ManyToOne
    @JoinColumn(name="theme_id", nullable = false)
    private Theme theme;

    @OneToMany(mappedBy = "article")
    private List<Comment> comments;

    @CreationTimestamp
    private Instant createdAt;


}
