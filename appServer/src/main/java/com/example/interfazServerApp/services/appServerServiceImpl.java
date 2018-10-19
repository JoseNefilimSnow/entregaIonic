package com.example.interfazServerApp.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import com.example.appServer.appServer;
import com.example.interfazServerApp.interfazServerApp;

public class appServerServiceImpl implements appServerService{

	@Autowired
	private interfazServerApp nuevaInterfazServer;
	@Override
	public appServer get(long id) {
		// TODO Auto-generated method stub
		return nuevaInterfazServer.findById(id).get();
	}

	@Override
	public List<appServer> getAll() {
		// TODO Auto-generated method stub
		return (List<appServer>) nuevaInterfazServer.findAll();
	}

	@Override
	public void post(appServer newEvent) {
		nuevaInterfazServer.save(newEvent);
		
	}

	@Override
	public void put(appServer editEvent, long id) {
		nuevaInterfazServer.findById(id).ifPresent((x)->{
			editEvent.setIdEvento(id);
			nuevaInterfazServer.save(editEvent);
		});
	}
	
	@Override
	public void delete(long id) {
		nuevaInterfazServer.deleteById(id);
	}

}
