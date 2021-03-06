package com.ssafy.db.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.support.JpaRepositoryImplementation;
import org.springframework.stereotype.Repository;

import com.ssafy.db.entity.User;
import com.ssafy.db.entity.UserConference;

@Repository
public interface UserConferenceRepository extends JpaRepository<UserConference, Integer> {

}
