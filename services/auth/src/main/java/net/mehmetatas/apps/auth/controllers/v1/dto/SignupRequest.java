package net.mehmetatas.apps.auth.controllers.v1.dto;

import org.hibernate.validator.constraints.Email;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import static net.mehmetatas.apps.auth.utils.FieldLengths.*;

/**
 * Created by mehmet on 03.06.2016.
 */
public class SignupRequest {
    @NotNull(message = "signupRequest.email.notNull")
    @Size(min = USER_EMAIL_MINLEN, max = USER_EMAIL_MAXLEN, message = "signupRequest.email.size")
    @Email(message = "signupRequest.email.format")
    public String email;

    public String password;
    public String username;
}
