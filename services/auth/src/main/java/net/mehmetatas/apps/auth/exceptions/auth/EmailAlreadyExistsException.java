package net.mehmetatas.apps.auth.exceptions.auth;

import net.mehmetatas.apps.auth.exceptions.AppException;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

/**
 * Created by mehmet on 28.04.2016.
 */
@ResponseStatus(HttpStatus.CONFLICT)
public class EmailAlreadyExistsException extends AppException {
    public EmailAlreadyExistsException(String email) {
        super("exceptions.auth.emailAlreadyExists", email);
    }
}
