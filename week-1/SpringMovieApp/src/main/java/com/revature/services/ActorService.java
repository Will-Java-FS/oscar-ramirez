package com.revature.services;

import com.revature.models.Actor;
import java.util.List;

public interface ActorService {

    public List<Actor> getAllActors();
    public Actor getActor(int id);
    public Actor addActor(Actor actor);
    public Actor updateActor(Actor actor);
//    public Actor deleteActor(Actor actor);
//    public Actor deleteActorById(int id);
}
