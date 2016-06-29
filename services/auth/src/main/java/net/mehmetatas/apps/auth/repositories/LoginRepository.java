package net.mehmetatas.apps.auth.repositories;

import net.mehmetatas.apps.auth.entities.Login;
import org.springframework.data.repository.NoRepositoryBean;

import java.util.UUID;

/**
 * Created by mehmetatas on 29/06/16.
 */
@NoRepositoryBean
public interface LoginRepository extends Repository<Login, Long> {
    Login getLastActiveLoginOfUser(long userId);

    Login getByToken(UUID token);
}
