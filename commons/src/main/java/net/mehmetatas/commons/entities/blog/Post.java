package net.mehmetatas.commons.entities.blog;

import javax.persistence.Entity;
import javax.persistence.Id;
import java.util.Date;

@Entity
public class Post {
    @Id
    private long id;
    private String title;
    private String summary;
    private String content;
    private Date createDate;
    private Date publishDate;
    private Date updateDate;
    private int status;

    public Post() {
    }

    public Post(String title, String summary, String content, Date createDate, Date publishDate, Date updateDate, int status) {
        this.title = title;
        this.summary = summary;
        this.content = content;
        this.createDate = createDate;
        this.publishDate = publishDate;
        this.updateDate = updateDate;
        this.status = status;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getSummary() {
        return summary;
    }

    public void setSummary(String summary) {
        this.summary = summary;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public Date getCreateDate() {
        return createDate;
    }

    public void setCreateDate(Date createDate) {
        this.createDate = createDate;
    }

    public Date getPublishDate() {
        return publishDate;
    }

    public void setPublishDate(Date publishDate) {
        this.publishDate = publishDate;
    }

    public Date getUpdateDate() {
        return updateDate;
    }

    public void setUpdateDate(Date updateDate) {
        this.updateDate = updateDate;
    }

    public int getStatus() {
        return status;
    }

    public void setStatus(int status) {
        this.status = status;
    }
}
