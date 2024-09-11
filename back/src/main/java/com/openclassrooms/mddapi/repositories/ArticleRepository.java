package com.openclassrooms.mddapi.repositories;

import com.openclassrooms.mddapi.models.Article;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ArticleRepository extends JpaRepository<Article, Long> {
    @Query(value = "SELECT * FROM article WHERE theme_id IN (SELECT theme_id FROM subscription WHERE user_id = :userId)", nativeQuery = true)
   List<Article> getArticlesByUserID(@Param("userId") Long userId);
}
