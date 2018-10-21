package com.example.appServer.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.interfazServerApp.services.appServerService;
import com.example.appServer.appServer;

import java.util.List;
@CrossOrigin (origins="*")
@RestController
public class appServerController{
	
	@Autowired
	appServerService newAppService;
	
	@GetMapping("/eventos")
	public List<appServer> getAllEvents(){
		return newAppService.getAll();
	}
	
	@GetMapping("/eventos/(id)")
	public appServer getOne(@PathVariable(value="id") long id) {
		return newAppService.get(id);
	}
	
	@PostMapping("/añadir-eventos")
	public void add(appServer addEvent) {
		newAppService.post(addEvent);
	}
	
	@PutMapping("/editar-eventos")
	public void update(appServer updateEvent, long id) {
		newAppService.put(updateEvent, id);	
	}
}
