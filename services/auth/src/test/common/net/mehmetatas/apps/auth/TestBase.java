package net.mehmetatas.apps.auth;

import net.mehmetatas.apps.auth.exceptions.AppException;
import org.junit.Assert;
import org.mockito.verification.VerificationMode;

import static org.mockito.Mockito.times;

/**
 * Created by mehmet on 28.04.2016.
 */
public class TestBase {
    protected static VerificationMode once() {
        return times(1);
    }

    protected static void assertThrows(Class<? extends AppException> exceptionClass, Runnable runnable) {
        try {
            runnable.run();
            Assert.fail("No exception was thrown. Expected: " + exceptionClass);
        } catch (Throwable t) {
            if (!t.getClass().equals(exceptionClass)) {
                Assert.fail("Bad exception type. Expected: " + exceptionClass + " Found: " + t.getClass());
            }
        }
    }
}
