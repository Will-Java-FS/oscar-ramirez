package com.revature.controllers;

import com.revature.models.Actor;
import com.revature.services.ActorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/actors")
@CrossOrigin
public class ActorController {

    ActorService as;

    @Autowired //Constructor Injection
    public ActorController(ActorService as) {
        this.as = as;
    }

    @GetMapping
    public List<Actor> getAllActors() {
        return as.getAllActors();
    }

    @GetMapping("/{id}")
    public Actor getActorById(@PathVariable int id) {
        return as.getActor(id);
    }

    @PostMapping(consumes="application/json", produces="application/json")
    public ResponseEntity<Actor> addActor(@RequestBody Actor actor) {
        actor = as.addActor(actor);
        return new ResponseEntity<>(actor, HttpStatus.OK);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Actor> updateActor(@PathVariable int id, @RequestBody Actor actor) {
        actor.setId(id); //Make sure that the ID used was the one in the Path parameter

        //Check if that ID matches an existing Actor
        Actor actorFound = as.getActor(id);
        if (actorFound.getId() == id) {
            actor = as.updateActor(actor);
            return new ResponseEntity<>(actor, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
        }
    }
}
