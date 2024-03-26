'use client'
import { React, useState, useEffect } from 'react';

export function SolicitudForm() {
	
	const [correo, setCorreo] = useState('');
	const [nombre, setNombre] = useState('Ingresa un correo válido.');
	const [lentes, setLentes] = useState([]);
	const [selectedLens, setSelectedLens] = useState('');
	const [terminos, setTerminos] = useState(false);
	
	useEffect(() => {
		const fetchOpcionesLentes= async () => {
			try {
				const response = await fetch(`api/lentes`);
				const data = await response.json();
				if (data.results) {
					setLentes(data.results);
				} else {
					console.error('No se encontraron opciones de lentes.');
				}
			} catch (error) {
				console.error('Error al obtener opciones de lentes:', error);
				console.error('Ocurrió un error al procesar la solicitud. Inténtalo nuevamente más tarde.');
			}
		};
		fetchOpcionesLentes();
	}, []);
	
	const validarEmail = (email) => {
		const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
		return regex.test(email);
	};
	
	const handleEmailChange = (e) => {
		setCorreo(e.target.value);
		if (validarEmail(e.target.value)) {
			getNameAPI();
		} else {
			setNombre('Ingresa un correo válido.')
		}
	};
	
	const getNameAPI = async (e) => {    
		try {
			const response = await fetch(`https://gorest.co.in/public-api/users`);
			const data = await response.json();
			if (data.data && data.data.length > 0) {
				setNombre(data.data[0].name);          
			} else {
				console.error('No se encontró un usuario con ese correo electrónico.');
			}
		} catch (error) {
			console.error('Error al obtener el nombre del usuario:', error);
			console.error('Ocurrió un error al procesar la solicitud. Inténtalo nuevamente más tarde.');
		}
	}
	
	const handleLensChange = (e) => {
		setSelectedLens(e.target.value);		
	};
	
	const handleTermsChange = (e) => {
		setTerminos(e.target.checked);
	};
	
	const handleSubmit = async (e) => {
		e.preventDefault();
		console.log('Cargar info');
		
		if (!terminos) {
			alert('Debes aceptar los términos de uso para continuar.');
			return;
		}

		const formData = new FormData();
		formData.append("correo", correo);
		formData.append("nombre", nombre);
		formData.append("lente", selectedLens);

		fetch("/api/solicitud", {
			method: "POST",
			body: formData,
			headers: {},
		  })
		  .then(response => {
			if (!response.ok) {
			  throw new Error('Network response was not ok');
			}
			return response.json();
		  })
		  .then(data => {
			alert(data.message);
		  })
		  .catch(error => {
			console.error('There has been a problem with your fetch operation:', error);
		  });		
	}
	
	return (<div>
		<h1 className="text-3xl font-bold mb-8 text-center">Solicitud de dispositivo</h1>
			<form className="max-w-md mx-auto" onSubmit={handleSubmit}>
		
				<div className="mb-4">
					<label htmlFor="correo" className="block mb-1">Correo electrónico:</label>
					<input
						type="email"
						id="correo" 
						required 
						value={correo} 
						className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
						placeholder="ejemplo@ceibal.edu.uy"
						onChange={handleEmailChange} />
				</div>
			
				<div className="mt-8 mb-6 text-center border p-4 border-sky-100">{nombre}</div>
			
				<div className="mb-4">
					<label htmlFor="lentes" className="block mb-1">Modelo:</label>
					<select 
						id="lentes"
						value={selectedLens}
						onChange={handleLensChange}
						required
						className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500">
						<option value="">Seleccionar modelo de lente</option>
						{lentes.map((lente) => (
							<option key={lente.id} value={lente.id}>{lente.nombre}</option>
						))}	
					</select>
				</div>
			
				<div className="mb-4">
					<label>
						<input 
						type="checkbox" 
						name="terminos" 
						checked={terminos} 
						onChange={handleTermsChange} 
						required /> He leído y acepto los <a href="https://politicas.ceibal.edu.uy/" target="_blank" className="underline hover:">Términos de Uso</a>
					</label>
				</div>
				
				<button className="btn-ceibal" type="submit">Confirmar</button>
		
			</form>
		
		</div>)
	}