package com.grocery.jwtt;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "ROLES")
public class Role {

	@Id
	private Long id;
	private String name;

	@ManyToOne
	@JoinColumn(name = "user_id", referencedColumnName = "id")
	private JwtUserDetails user;

	public Role() {
	}

	public Role(String name) {
		this.name = name;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public JwtUserDetails getUser() {
		return user;
	}

	public void setUser(JwtUserDetails user) {
		this.user = user;
	}
}
