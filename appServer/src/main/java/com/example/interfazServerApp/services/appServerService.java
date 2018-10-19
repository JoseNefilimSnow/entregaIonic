package com.example.interfazServerApp.services;

import com.example.appServer.appServer;

import java.util.List;

public interface appServerService {
	
	public appServer get(long id);
	
	public List<appServer> getAll();
	
	public void post(appServer newEvent);
	
	public void put(appServer editEvent,long id);

	void delete(long id);
}
