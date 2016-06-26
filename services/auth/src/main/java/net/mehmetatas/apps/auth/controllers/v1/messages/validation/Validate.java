package net.mehmetatas.apps.auth.controllers.v1.messages.validation;

import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;
import java.math.BigInteger;

/**
 * Created by mehmetatas on 26/06/16.
 */
@Retention(RetentionPolicy.RUNTIME)
@Target(ElementType.FIELD)
public @interface Validate {
    @ValidationTarget(type = String.class)
    int maxLength() default 255;

    @ValidationTarget(type = String.class)
    int minLength() default 0;

    @ValidationTarget(type = {Long.class, Integer.class, Short.class, Byte.class, Double.class, Float.class})
    double min() default Double.MIN_VALUE;

    @ValidationTarget(type = {Long.class, Integer.class, Short.class, Byte.class, Double.class, Float.class})
    double max() default Double.MAX_VALUE;

    String value() default "";

    boolean required() default true;
}
