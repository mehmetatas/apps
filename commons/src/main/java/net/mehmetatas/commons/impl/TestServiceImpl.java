package net.mehmetatas.commons.impl;

import net.mehmetatas.commons.TestService;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Service;

import java.util.Date;

@Service
public class TestServiceImpl implements TestService {
    public TestServiceImpl() {
        System.out.println("Service Created!!!");
    }

    public String echo(String msg) {
        return msg;
    }

    public Date now() {
        return new Date();
    }
}
