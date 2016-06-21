package net.mehmetatas.apps.auth.services.impl;

import net.mehmetatas.apps.auth.entities.User;
import net.mehmetatas.apps.auth.exceptions.auth.EmailAlreadyExistsException;
import net.mehmetatas.apps.auth.exceptions.auth.UsernameAlreadyExistsException;
import net.mehmetatas.apps.auth.providers.CryptoProvider;
import net.mehmetatas.apps.auth.providers.EmailValidator;
import net.mehmetatas.apps.auth.providers.PasswordValidator;
import net.mehmetatas.apps.auth.providers.UsernameValidator;
import net.mehmetatas.apps.auth.repositories.UserRepository;
import net.mehmetatas.apps.auth.services.SignupService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.Date;

/**
 * Created by mehmet on 28.04.2016.
 */
@Component
public class SignupServiceImpl implements SignupService {
    private final UserRepository userRepo;
    private final CryptoProvider crypto;
    private final PasswordValidator pwdValidator;
    private final EmailValidator emailValidator;
    private final UsernameValidator usernameValidator;

    @Autowired
    public SignupServiceImpl(UserRepository userRepo, CryptoProvider crypto, PasswordValidator pwdValidator, EmailValidator emailValidator, UsernameValidator usernameValidator) {
        this.userRepo = userRepo;
        this.crypto = crypto;
        this.pwdValidator = pwdValidator;
        this.emailValidator = emailValidator;
        this.usernameValidator = usernameValidator;
    }

    @Override
    public User signup(String email, String password, String username) {
        emailValidator.validate(email);
        pwdValidator.validate(password);
        usernameValidator.validate(username);

        User user = userRepo.findByEmail(email);

        if (user != null) {
            throw new EmailAlreadyExistsException(email);
        }

        String encryptedPwd = crypto.encryptPassword(password);

        user = new User(email, encryptedPwd, username, new Date(), User.STATUS_WAITING_ACTIVATION);

        userRepo.save(user);

        return user;
    }
}
