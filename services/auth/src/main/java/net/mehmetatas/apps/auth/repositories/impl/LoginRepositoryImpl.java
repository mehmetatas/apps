package net.mehmetatas.apps.auth.repositories.impl;

import net.mehmetatas.apps.auth.entities.Login;
import net.mehmetatas.apps.auth.repositories.LoginRepository;
import net.mehmetatas.apps.auth.repositories.jpa.LoginJpaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.Date;
import java.util.UUID;

/**
 * Created by mehmetatas on 29/06/16.
 */
@Component
public class LoginRepositoryImpl extends BaseRepository<Login, Long> implements LoginRepository {
    private final LoginJpaRepository jpaRepository;

    @Autowired
    public LoginRepositoryImpl(LoginJpaRepository jpaRepository) {
        super(jpaRepository);
        this.jpaRepository = jpaRepository;
    }


    @Override
    public Login getLastActiveLoginOfUser(long userId) {
        return jpaRepository.findFirstByUserIdAndExpireDateAfterOrderByExpireDateDesc(userId, new Date());
    }

    @Override
    public Login getByToken(UUID token) {
        return jpaRepository.findByToken(token);
    }
}
