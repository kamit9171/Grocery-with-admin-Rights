package com.grocery.jwtt;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<JwtUserDetails, Long> {

	Optional<JwtUserDetails> findByUsername(String username);
}