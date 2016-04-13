package net.mehmetatas.controllers;

import net.mehmetatas.commons.TestService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("test")
public class TestController {
    @Autowired
    TestService service;

    public TestController() {
        System.out.println("Controller Created!!!");
    }

    @RequestMapping("/echo")
    public String echo(@RequestParam String msg) {
        return service.echo(msg);
    }

    @RequestMapping("/time")
    public String time() {
        return service.now().toString();
    }
}
