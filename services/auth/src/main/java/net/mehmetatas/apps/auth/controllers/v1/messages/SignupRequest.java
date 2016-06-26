package net.mehmetatas.apps.auth.controllers.v1.messages;

import net.mehmetatas.apps.auth.controllers.v1.messages.validation.Validate;

import static net.mehmetatas.apps.auth.utils.FieldLengths.USER_EMAIL;

/**
 * Created by mehmet on 03.06.2016.
 */
public class SignupRequest {
    @Validate(maxLength = USER_EMAIL)
    public String email;
    public String password;
    public String username;
}
