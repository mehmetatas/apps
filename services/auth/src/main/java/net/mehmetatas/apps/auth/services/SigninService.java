package net.mehmetatas.apps.auth.services;

import net.mehmetatas.apps.auth.entities.Login;

/**
 * Created by mehmet on 08.05.2016.
 */
public interface SigninService {
    Login signin(String email, String password);
}
