package net.mehmetatas.apps.auth.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.util.Date;

import static net.mehmetatas.apps.auth.utils.FieldLengths.*;

/**
 * Created by mehmet on 21.06.2016.
 */
@Entity
public class User {
    public final static int STATUS_NONE = -1;
    public final static int STATUS_INACTIVE = 0;
    public final static int STATUS_ACTIVE = 1;
    public final static int STATUS_WAITING_ACTIVATION = 2;
    public final static int STATUS_BANNED = 3;

    @Id
    @GeneratedValue
    private long id;

    @Column(length = USER_EMAIL_MAXLEN, nullable = false)
    private String email;

    private String password;

    private String username;

    private Date joinDate;

    private int status;

    private User() {
        status = STATUS_NONE;
    }

    public User(String email, String password, String username, Date joinDate, int status) {
        this();
        this.email = email;
        this.password = password;
        this.username = username;
        this.joinDate = joinDate;
        this.status = status;
    }

    public long getId() {
        return id;
    }

    public String getEmail() {
        return email;
    }

    public String getPassword() {
        return password;
    }

    public String getUsername() {
        return username;
    }

    public Date getJoinDate() {
        return joinDate;
    }

    public int getStatus() {
        return status;
    }

    public static User newUser(String email, String password, String username) {
        User user = new User();

        user.email = email;
        user.password = password;
        user.username = username;
        user.joinDate = new Date();
        user.status = STATUS_WAITING_ACTIVATION;

        return user;
    }
}
