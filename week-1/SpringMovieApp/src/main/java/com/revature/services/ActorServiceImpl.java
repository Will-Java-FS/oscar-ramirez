package com.revature.services;

import com.revature.models.Actor;
import com.revature.repositories.ActorRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ActorServiceImpl implements ActorService {

    @Autowired
    ActorRepo actorRepo;


    @Override
    public Actor getActor(int id) {
        return actorRepo.findById(id).orElseGet(Actor::new);
    }

    @Override
    public Actor addActor(Actor actor) {
        return actorRepo.save(actor);
    }

    @Override
    public Actor updateActor(Actor actor) {
        return actorRepo.save(actor);
    }

//    @Override
//    public Actor deleteActor(Actor actor) {
//        return null;
//    }
//
//    @Override
//    public Actor deleteActorById(int id) {
//        return null;
//    }

    @Override
    public List<Actor> getAllActors() {
        return actorRepo.findAll();
    }
}
