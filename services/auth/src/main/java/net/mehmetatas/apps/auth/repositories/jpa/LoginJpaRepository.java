package net.mehmetatas.apps.auth.repositories.jpa;

import net.mehmetatas.apps.auth.entities.Login;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Date;
import java.util.UUID;

/**
 * Created by mehmet on 08.05.2016.
 */
public interface LoginJpaRepository extends JpaRepository<Login, Long> {
    Login findFirstByUserIdAndExpireDateAfterOrderByExpireDateDesc(long userId, Date expireDate);
    Login findByToken(UUID token);
}
