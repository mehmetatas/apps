package net.mehmetatas.apps.auth.exceptions.auth;

import net.mehmetatas.apps.auth.exceptions.AppException;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

/**
 * Created by mehmet on 08.05.2016.
 */
@ResponseStatus(HttpStatus.UNAUTHORIZED)
public class LoginFailedException extends AppException {
    public LoginFailedException() {
        super("exceptions.auth.loginFailed");
    }
}
