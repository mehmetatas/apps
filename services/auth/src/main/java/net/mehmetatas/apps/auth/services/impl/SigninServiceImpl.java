package net.mehmetatas.apps.auth.services.impl;

import net.mehmetatas.apps.auth.entities.Login;
import net.mehmetatas.apps.auth.entities.User;
import net.mehmetatas.apps.auth.exceptions.auth.LoginFailedException;
import net.mehmetatas.apps.auth.providers.CryptoProvider;
import net.mehmetatas.apps.auth.repositories.LoginRepository;
import net.mehmetatas.apps.auth.repositories.UserRepository;
import net.mehmetatas.apps.auth.repositories.impl.LoginRepositoryImpl;
import net.mehmetatas.apps.auth.repositories.impl.UserRepositoryImpl;
import net.mehmetatas.apps.auth.services.SigninService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

/**
 * Created by mehmet on 08.05.2016.
 */
@Component
public class SigninServiceImpl implements SigninService {
    private final UserRepository userRepository;
    private final LoginRepository loginRepo;
    private final CryptoProvider crypto;

    @Autowired
    public SigninServiceImpl(UserRepository userRepository, LoginRepository loginRepo, CryptoProvider crypto) {
        this.userRepository = userRepository;
        this.loginRepo = loginRepo;
        this.crypto = crypto;
    }

    @Override
    public Login signin(String email, String password) {
        User user = userRepository.getByEmail(email);

        if (user == null) {
            throw new LoginFailedException();
        }

        String encryptedPassword = crypto.encryptPassword(password);

        if (!user.getPassword().equals(encryptedPassword)) {
            throw new LoginFailedException();
        }

        Login login = loginRepo.getLastActiveLoginOfUser(user.getId());

        if (login == null) {
            login = Login.newLogin(user);
            loginRepo.save(login);
        }

        return login;
    }
}
