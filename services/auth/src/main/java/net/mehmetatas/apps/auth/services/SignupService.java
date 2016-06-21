package net.mehmetatas.apps.auth.services;

import net.mehmetatas.apps.auth.entities.User;

/**
 * Created by mehmet on 28.04.2016.
 */
public interface SignupService {
    User signup(String email, String password, String username);
}
