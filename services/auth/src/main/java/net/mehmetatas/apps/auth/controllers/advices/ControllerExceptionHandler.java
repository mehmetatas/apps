package net.mehmetatas.apps.auth.controllers.advices;

import net.mehmetatas.apps.auth.exceptions.AppException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.MessageSource;
import org.springframework.context.i18n.LocaleContextHolder;
import org.springframework.http.HttpStatus;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;

import javax.servlet.http.HttpServletResponse;
import java.util.Locale;

/**
 * Created by mehmetatas on 29/06/16.
 */
@ControllerAdvice
public class ControllerExceptionHandler {
    @Autowired
    private MessageSource msgSource;

    @ExceptionHandler(MethodArgumentNotValidException.class)
    @ResponseStatus(HttpStatus.UNPROCESSABLE_ENTITY)
    @ResponseBody
    public MessageDTO processValidationError(MethodArgumentNotValidException ex) {
        BindingResult result = ex.getBindingResult();
        FieldError error = result.getFieldError();

        return createMessage(error.getDefaultMessage(), error.getArguments());
    }

    @ExceptionHandler(AppException.class)
    @ResponseBody
    public MessageDTO processAppException(AppException ex, HttpServletResponse response) {
        response.setStatus(ex.getHttpStatusCode());
        return createMessage(ex.getResourceKey(), ex.getArgs());
    }

    private MessageDTO createMessage(String key, Object[] args) {
        Locale currentLocale = LocaleContextHolder.getLocale();
        String msg = msgSource.getMessage(key, args, currentLocale);
        return new MessageDTO(msg);
    }
}
