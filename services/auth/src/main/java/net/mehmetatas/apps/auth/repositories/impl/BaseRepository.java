package net.mehmetatas.apps.auth.repositories.impl;

import net.mehmetatas.apps.auth.repositories.Repository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.NoRepositoryBean;

import java.io.Serializable;

/**
 * Created by mehmetatas on 29/06/16.
 */
public abstract class BaseRepository<T, ID extends Serializable> implements Repository<T, ID> {
    private final JpaRepository<T, ID> jpaRepository;

    public BaseRepository(JpaRepository<T, ID> jpaRepository) {
        this.jpaRepository = jpaRepository;
    }

    @Override
    public <S extends T> S save(S entity) {
        return jpaRepository.save(entity);
    }

    @Override
    public <S extends T> Iterable<S> saveAll(Iterable<S> entities) {
        return jpaRepository.save(entities);
    }

    @Override
    public T getById(ID id) {
        return jpaRepository.getOne(id);
    }

    @Override
    public Iterable<T> getAllByIds(Iterable<ID> ids) {
        return jpaRepository.findAll(ids);
    }

    @Override
    public void delete(ID id) {
        jpaRepository.delete(id);
    }

    @Override
    public void delete(T entity) {
        jpaRepository.delete(entity);
    }

    @Override
    public void deleteAll(Iterable<? extends T> entities) {
        jpaRepository.delete(entities);
    }

    @Override
    public Page<T> page(Pageable pageable) {
        return jpaRepository.findAll(pageable);
    }
}
