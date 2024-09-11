package com.openclassrooms.mddapi.exceptionHandler;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.web.server.ResponseStatusException;

import java.util.HashMap;

@RestControllerAdvice
class GlobalControllerExceptionHandler {
    /**
     * Gère les erreurs lié à la validations des données fournies par le front
     * @param exception
     * @return
     */
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    @ExceptionHandler(MethodArgumentNotValidException.class)
    public HashMap<String, String> handleValidation(MethodArgumentNotValidException exception) {
        HashMap<String, String> response = new HashMap<>();
        exception.getBindingResult().getAllErrors().forEach(error -> {
            String fieldName = error.getObjectName();
            String errorMessage = error.getDefaultMessage();
            response.put(fieldName, errorMessage);
        });
        return response;
    }

    /**
     * gère les erreurs liées aux entités non trouvées en BDD
     * @param exception
     * @return
     */
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    @ExceptionHandler(ResponseStatusException.class)
    public HashMap<String, String> handleMissingEntity(ResponseStatusException exception){
        HashMap<String, String> response = new HashMap<>();
        response.put("message", exception.getMessage());

        return response;
    }


}