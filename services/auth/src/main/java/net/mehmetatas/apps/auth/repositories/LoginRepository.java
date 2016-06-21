package net.mehmetatas.apps.auth.repositories;

import net.mehmetatas.apps.auth.entities.Login;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Date;
import java.util.UUID;

/**
 * Created by mehmet on 08.05.2016.
 */
public interface LoginRepository extends JpaRepository<Login, Long> {
    Login findFirstByUserIdAndExpireDateAfterOrderByExpireDateDesc(long userId, Date expireDate);
    Login findByTokenAndIsPasswordRecoveryFalse(UUID token);
}
