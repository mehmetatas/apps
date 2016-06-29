package net.mehmetatas.apps.auth.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

/**
 * Created by mehmet on 28.04.2016.
 */
@ResponseStatus(HttpStatus.BAD_REQUEST)
public abstract class AppException extends RuntimeException {
    private static Map<Class<? extends AppException>, Integer> statusCodes = new ConcurrentHashMap<>();

    private final String resourceKey;
    private final Object[] args;

    public AppException(String resourceKey, Object... args) {
        super(resourceKey);
        this.resourceKey = resourceKey;
        this.args = args;
    }

    public String getResourceKey() {
        return resourceKey;
    }

    public Object[] getArgs() {
        return args;
    }

    public int getHttpStatusCode() {
        return getHttpStatusCode(getClass());
    }

    private static int getHttpStatusCode(Class<? extends AppException> clazz) {
        if (statusCodes.containsKey(clazz)) {
            return statusCodes.get(clazz);
        }

        ResponseStatus status = clazz.getAnnotation(ResponseStatus.class);

        int statusCode = status == null
                ? HttpStatus.BAD_REQUEST.value()
                : status.value().value();

        statusCodes.put(clazz, statusCode);

        return statusCode;
    }
}
