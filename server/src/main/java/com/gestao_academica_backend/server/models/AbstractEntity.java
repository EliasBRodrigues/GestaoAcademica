package com.gestao_academica_backend.server.models;

import java.io.Serializable;
import java.time.LocalDateTime;

import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import jakarta.persistence.*;
import lombok.Data;

@Data
@MappedSuperclass
@EntityListeners(AuditingEntityListener.class)
public class AbstractEntity implements Serializable{
    @CreatedDate
    @Column(name = "createDateTime", nullable = false, updatable = false)
    private LocalDateTime createDateTime;
    @LastModifiedDate
    @Column(name = "lastModifiedDateTime")
    private LocalDateTime lastModifiedDateTime;
}
