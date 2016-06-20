package net.mehmetatas.apps.auth.controllers;

import net.mehmetatas.apps.auth.controllers.messages.SignupRequest;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

/**
 * Created by mehmet on 03.06.2016.
 */
@RestController
@RequestMapping("/auth")
public class AuthController {
    // @Transactional
    @RequestMapping(value = "/signup", method = RequestMethod.POST)
    @ResponseStatus(HttpStatus.CREATED)
    public void signup(@RequestBody SignupRequest request) {

    }

    @RequestMapping(value = "/activate", method = RequestMethod.POST)
    @ResponseStatus(HttpStatus.OK)
    public void activate() {

    }

    @RequestMapping(value = "/signin", method = RequestMethod.POST)
    @ResponseStatus(HttpStatus.FOUND)
    public void signin() {

    }

    @RequestMapping(value = "/signout", method = RequestMethod.POST)
    @ResponseStatus(HttpStatus.OK)
    public void signout() {

    }

    @RequestMapping(value = "/requestRasswordRecovery", method = RequestMethod.POST)
    @ResponseStatus(HttpStatus.OK)
    public void requestRasswordRecovery() {

    }

    @RequestMapping(value = "/resetPassword", method = RequestMethod.POST)
    @ResponseStatus(HttpStatus.OK)
    public void resetPassword() {

    }

    @RequestMapping(value = "/refresh", method = RequestMethod.POST)
    @ResponseStatus(HttpStatus.FOUND)
    public void refreshToken() {

    }
}
