package net.mehmetatas.apps.auth.services.impl;

import net.mehmetatas.apps.auth.TestBase;
import net.mehmetatas.apps.auth.entities.User;
import net.mehmetatas.apps.auth.exceptions.auth.EmailAlreadyExistsException;
import net.mehmetatas.apps.auth.providers.CryptoProvider;
import net.mehmetatas.apps.auth.providers.EmailValidator;
import net.mehmetatas.apps.auth.providers.PasswordValidator;
import net.mehmetatas.apps.auth.providers.UsernameValidator;
import net.mehmetatas.apps.auth.repositories.UserRepository;
import org.junit.Before;
import org.junit.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import java.util.Date;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.core.Is.is;
import static org.mockito.Mockito.*;

/**
 * Created by mehmet on 21.06.2016.
 */
public class SignupServiceImplTest extends TestBase {
    private final String email = "mail@mail.com";
    private final String password = "123456";
    private final String username = "username";
    private final int status = User.STATUS_WAITING_ACTIVATION;

    @InjectMocks
    private SignupServiceImpl service;

    @Mock
    private UserRepository userRepo;

    @Mock
    private CryptoProvider crypto;

    @Mock
    private PasswordValidator pwdValidator;

    @Mock
    private EmailValidator emailValidator;

    @Mock
    private UsernameValidator usernameValidator;

    @Before
    public void setUp() {
        MockitoAnnotations.initMocks(this);
    }

    @Test
    public void signup_should_fail_when_email_already_exists() {
        // arrange
        when(userRepo.findByEmail(email))
                .thenReturn(new User(email, password, username, new Date(), status));

        // act & assert
        assertThrows(EmailAlreadyExistsException.class,
                () -> service.signup(email, password, username));

        // verify
        verify(emailValidator, once()).validate(email);
        verify(pwdValidator, once()).validate(password);
        verify(usernameValidator, once()).validate(username);
        verify(userRepo, once()).findByEmail(email);
        verify(crypto, never()).encryptPassword(password);
        verify(userRepo, never()).save(any(User.class));
    }

    @Test
    public void signup_should_succeed_when_email_not_exists() {
        // arrange
        String encryptedPassword = "hash of password";

        when(crypto.encryptPassword(password))
                .thenReturn(encryptedPassword);

        // act
        User user = service.signup(email, password, username);

        // assert
        assertThat(user.getEmail(), is(email));
        assertThat(user.getUsername(), is(username));
        assertThat(user.getPassword(), is(encryptedPassword));
        assertThat(user.getStatus(), is(User.STATUS_WAITING_ACTIVATION));

        // verify
        verify(emailValidator, once()).validate(email);
        verify(pwdValidator, once()).validate(password);
        verify(usernameValidator, once()).validate(username);
        verify(userRepo, once()).findByEmail(email);
        verify(crypto, once()).encryptPassword(password);
        verify(userRepo, once()).save(user);
    }
}