package net.mehmetatas.commons;

import net.mehmetatas.commons.impl.TestServiceImpl;
import org.junit.Before;
import org.junit.Test;

import java.util.Date;

import static org.junit.Assert.*;

public class EchoServiceImplTest {
    TestServiceImpl service;

    @Before
    public void setUp() {
        service = new TestServiceImpl();
    }

    @Test
    public void echo() throws Exception {
        assertEquals("Test", service.echo("Test"));
    }
    @Test
    public void time() throws Exception {
        Date now1 = new Date();
        Date now2 = service.now();
        long diff = now2.getTime() - now1.getTime();
        assertTrue(diff < 10);
    }
}