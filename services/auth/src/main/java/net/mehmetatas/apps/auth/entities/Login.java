package net.mehmetatas.apps.auth.entities;

import org.hibernate.annotations.Type;

import javax.persistence.*;
import java.util.Date;
import java.util.UUID;

import static net.mehmetatas.apps.auth.utils.Utils.addDays;

/**
 * Created by mehmet on 28.04.2016.
 */
@Entity
public class Login {
    @Id
    @GeneratedValue
    private long id;

    @ManyToOne(fetch = FetchType.LAZY)
    private User user;

    @Type(type="org.hibernate.type.UUIDCharType")
    private UUID token;

    private Date expireDate;

    Login() {
    }

    public Login(UUID token, User user, Date expireDate) {
        this.token = token;
        this.user = user;;
        this.expireDate = expireDate;
    }

    public long getId() {
        return id;
    }

    public UUID getToken() {
        return token;
    }

    public User getUser() {
        return user;
    }

    public Date getExpireDate() {
        return expireDate;
    }

    public static Login newLogin(User user) {
        return new Login(
                UUID.randomUUID(),
                user,
                addDays(new Date(), 30));
    }

    public void extend() {
        expireDate = addDays(expireDate, 30);
    }
}
