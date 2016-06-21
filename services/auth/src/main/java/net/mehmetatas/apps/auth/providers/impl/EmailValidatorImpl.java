package net.mehmetatas.apps.auth.providers.impl;

import net.mehmetatas.apps.auth.exceptions.validation.EmailValidationException;
import net.mehmetatas.apps.auth.providers.EmailValidator;
import org.springframework.stereotype.Component;

/**
 * Created by mehmet on 07.05.2016.
 */
@Component
public class EmailValidatorImpl implements EmailValidator {
    @Override
    public void validate(String email) {
        boolean isValidEmail = org.apache.commons.validator.routines.EmailValidator.getInstance().isValid(email);

        if (!isValidEmail) {
            throw new EmailValidationException();
        }
    }
}
