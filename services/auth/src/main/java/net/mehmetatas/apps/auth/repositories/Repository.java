package net.mehmetatas.apps.auth.repositories;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.NoRepositoryBean;

import java.io.Serializable;

/**
 * Created by mehmetatas on 29/06/16.
 */
@NoRepositoryBean
public interface Repository<T, ID extends Serializable> extends org.springframework.data.repository.Repository<T, ID> {
    <S extends T> S save(S entity);

    <S extends T> Iterable<S> saveAll(Iterable<S> entities);

    T getById(ID id);

    Iterable<T> getAllByIds(Iterable<ID> ids);

    void delete(ID id);

    void delete(T entity);

    void deleteAll(Iterable<? extends T> entities);

    Page<T> page(Pageable pageable);
}
