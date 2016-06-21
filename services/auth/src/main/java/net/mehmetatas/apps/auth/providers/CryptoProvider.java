package net.mehmetatas.apps.auth.providers;

/**
 * Created by mehmet on 07.05.2016.
 */
public interface CryptoProvider {
    String encryptPassword(String password);
}
