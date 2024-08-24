package com.openclassrooms.mddapi.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("article")
public class ArticleController {
    @GetMapping("")
    String testMethod(){
        return "On est bon";
    }

    @GetMapping("/test2")
    String testMethod2(){
        return "On est bon lol";
    }
}
