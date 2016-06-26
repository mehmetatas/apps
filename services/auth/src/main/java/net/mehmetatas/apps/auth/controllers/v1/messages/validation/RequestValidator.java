package net.mehmetatas.apps.auth.controllers.v1.messages.validation;

import java.lang.reflect.Field;

/**
 * Created by mehmetatas on 26/06/16.
 */
public class RequestValidator {
    public static void Validate(Object request) {
        Field[] fields = request.getClass().getFields();

        for (Field field : fields) {
            Object value = field.get(request);
            Class<?> type = field.getType();
            Validate validateAnnotation = field.getAnnotation(Validate.class);
        }
    }
}
