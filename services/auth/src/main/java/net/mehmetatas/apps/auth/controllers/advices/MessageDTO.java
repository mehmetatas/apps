package net.mehmetatas.apps.auth.controllers.advices;

/**
 * Created by mehmetatas on 29/06/16.
 */
public class MessageDTO {
    private String message;

    public MessageDTO(String message) {
        this.message = message;
    }

    public String getMessage() {
        return message;
    }
}
