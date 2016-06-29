package net.mehmetatas.apps.auth.repositories;

import net.mehmetatas.apps.auth.entities.User;
import org.springframework.data.repository.NoRepositoryBean;

/**
 * Created by mehmetatas on 29/06/16.
 */
@NoRepositoryBean
public interface UserRepository extends Repository<User, Long> {
    User getByEmail(String email);
}
