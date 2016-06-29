package net.mehmetatas.apps.auth.exceptions.auth;

import net.mehmetatas.apps.auth.exceptions.AppException;

/**
 * Created by mehmet on 21.06.2016.
 */
public class UsernameAlreadyExistsException extends AppException {
    public UsernameAlreadyExistsException(String username) {
        super(String.format("exceptions.auth.usernameAlreadyExists", username));
    }
}
