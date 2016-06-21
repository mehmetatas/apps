package net.mehmetatas.apps.auth.providers.impl;

import net.mehmetatas.apps.auth.TestBase;
import net.mehmetatas.apps.auth.exceptions.validation.UsernameValidationException;
import org.junit.Before;
import org.junit.Test;

import static org.junit.Assert.*;

/**
 * Created by mehmet on 21.06.2016.
 */
public class UsernameValidatorImplTest extends TestBase {
    private UsernameValidatorImpl validator;

    @Before
    public void setUp() {
        validator = new UsernameValidatorImpl();
    }

    @Test
    public void should_throw_exception_when_username_is_null() {
        // arrange
        String username = null;

        // act & assert
        assertThrows(UsernameValidationException.class,
                () -> validator.validate(username));
    }

    @Test
    public void should_throw_exception_when_username_is_empty() {
        // arrange
        String username = "";

        // act & assert
        assertThrows(UsernameValidationException.class,
                () -> validator.validate(username));
    }

    @Test
    public void should_throw_exception_when_username_contains_invalid_character() {
        // arrange
        String username = "jhagd jad-dsaf sdf";

        // act & assert
        assertThrows(UsernameValidationException.class,
                () -> validator.validate(username));
    }

    @Test
    public void should_validate_valid_username() {
        // arrange
        String username = "ASDAS jad dsaf sdf";

        // act & assert
        validator.validate(username);
    }
}