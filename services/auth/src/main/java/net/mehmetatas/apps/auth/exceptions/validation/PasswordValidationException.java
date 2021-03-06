package net.mehmetatas.apps.auth.exceptions.validation;

import net.mehmetatas.apps.auth.exceptions.AppException;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

/**
 * Created by mehmet on 07.05.2016.
 */
@ResponseStatus(HttpStatus.UNPROCESSABLE_ENTITY)
public class PasswordValidationException extends AppException {
    public PasswordValidationException(String reason) {
        super("exceptions.validation.passwordValidation", reason);
    }
}
