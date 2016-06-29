package net.mehmetatas.apps.auth.repositories.impl;

import net.mehmetatas.apps.auth.entities.User;
import net.mehmetatas.apps.auth.repositories.UserRepository;
import net.mehmetatas.apps.auth.repositories.jpa.UserJpaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

/**
 * Created by mehmetatas on 29/06/16.
 */
@Component
public class UserRepositoryImpl extends BaseRepository<User, Long> implements UserRepository {
    private UserJpaRepository jpaRepository;

    @Autowired
    public UserRepositoryImpl(UserJpaRepository jpaRepository) {
        super(jpaRepository);
        this.jpaRepository = jpaRepository;
    }

    @Override
    public User getByEmail(String email) {
        return jpaRepository.findByEmail(email);
    }
}
