package net.mehmetatas.apps.auth.providers.impl;

import net.mehmetatas.apps.auth.exceptions.validation.UsernameValidationException;
import net.mehmetatas.apps.auth.providers.UsernameValidator;
import org.springframework.stereotype.Component;

import static net.mehmetatas.apps.auth.utils.Utils.isNullOrWhitespace;

/**
 * Created by mehmet on 21.06.2016.
 */
@Component
public class UsernameValidatorImpl implements UsernameValidator {
    private final static String validUsernameChars = "abcdefghijklmnopqrstuvwxyz0123456789 ";
    @Override
    public void validate(String username) {
        if (isNullOrWhitespace(username) || username.length() > 32) {
            throw new UsernameValidationException("Username must be 1 - 32 characters long.");
        }

        for (char c : username.toLowerCase().toCharArray()) {
            if (validUsernameChars.indexOf(c) == -1) {
                throw new UsernameValidationException("Username can only contain a-z, 0-9 and space characters.");
            }
        }
    }
}
