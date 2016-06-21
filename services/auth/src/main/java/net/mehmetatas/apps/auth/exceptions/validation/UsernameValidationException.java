package net.mehmetatas.apps.auth.exceptions.validation;

import net.mehmetatas.apps.auth.exceptions.AppException;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.UNPROCESSABLE_ENTITY)
public class UsernameValidationException extends AppException {
    public UsernameValidationException(String reason) {
        super("The username you entered does not match our username policy: " + reason);
    }
}
