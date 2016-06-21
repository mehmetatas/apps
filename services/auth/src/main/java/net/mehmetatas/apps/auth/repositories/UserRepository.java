package net.mehmetatas.apps.auth.repositories;

import net.mehmetatas.apps.auth.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Created by mehmet on 28.04.2016.
 */
public interface UserRepository extends JpaRepository<User, Long> {
    User findByEmail(String email);
}
