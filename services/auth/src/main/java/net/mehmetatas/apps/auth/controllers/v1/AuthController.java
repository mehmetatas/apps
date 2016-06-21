package net.mehmetatas.apps.auth.controllers.v1;

import net.mehmetatas.apps.auth.controllers.v1.messages.SignupRequest;
import net.mehmetatas.apps.auth.services.SignupService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

/**
 * Created by mehmet on 03.06.2016.
 */
@RestController
@RequestMapping("/api/v1/auth")
public class AuthController {
    private SignupService signupService;

    @Autowired
    public AuthController(SignupService signupService) {
        this.signupService = signupService;
    }

    @Transactional
    @CrossOrigin(origins = "*")
    @RequestMapping(value = "/signup", method = RequestMethod.POST)
    @ResponseStatus(HttpStatus.CREATED)
    public void signup(@RequestBody SignupRequest request) {
        signupService.signup(request.email, request.password, request.username);
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
