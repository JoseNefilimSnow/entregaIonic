package com.example.appServer;

import java.io.Serializable;

import javax.persistence.*;
import javax.validation.constraints.*;


@Entity
@Table(name="eventos")

public class appServer implements Serializable{

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long idEvento;
	
	@NotNull
	private String nombre;
	
	@NotNull
	private String tipoEvento;
	
	@NotNull
	private String lugarEvento;
	
	@NotNull
	private String fechaEvento;
	
	@NotNull
	private int aforoEvento;
	
	@Null
	private float precioEvento;

	public appServer() {
		super();
	}

	public appServer(long idEvento, @NotNull String nombre, @NotNull String tipoEvento, @NotNull String lugarEvento,
			@NotNull String fechaEvento, @NotNull int aforoEvento, @Null float precioEvento) {
		super();
		this.idEvento = idEvento;
		this.nombre = nombre;
		this.tipoEvento = tipoEvento;
		this.lugarEvento = lugarEvento;
		this.fechaEvento = fechaEvento;
		this.aforoEvento = aforoEvento;
		this.precioEvento = precioEvento;
	}

	public long getIdEvento() {
		return idEvento;
	}

	public void setIdEvento(long idEvento) {
		this.idEvento = idEvento;
	}

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public String getTipoEvento() {
		return tipoEvento;
	}

	public void setTipoEvento(String tipoEvento) {
		this.tipoEvento = tipoEvento;
	}

	public String getLugarEvento() {
		return lugarEvento;
	}

	public void setLugarEvento(String lugarEvento) {
		this.lugarEvento = lugarEvento;
	}

	public String getFechaEvento() {
		return fechaEvento;
	}

	public void setFechaEvento(String fechaEvento) {
		this.fechaEvento = fechaEvento;
	}

	public int getAforoEvento() {
		return aforoEvento;
	}

	public void setAforoEvento(int aforoEvento) {
		this.aforoEvento = aforoEvento;
	}

	public float getPrecioEvento() {
		return precioEvento;
	}

	public void setPrecioEvento(float precioEvento) {
		this.precioEvento = precioEvento;
	}

	public static long getSerialversionuid() {
		return serialVersionUID;
	}
	
}
