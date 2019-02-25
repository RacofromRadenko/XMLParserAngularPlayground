import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
	providedIn: 'root'
})
export class PullDataService {
	constructor(public http: HttpClient) {
		this.getData();
	}

	public getData() {
		// return this.http.get('./assets/dataset.xml', {
		// 	headers: new HttpHeaders()
		// 		.set('Content-Type', 'text/xml')
		// 		.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH,OPTIONS')
		// 		.append('Access-Control-Allow-Origin', '*')
		// 		.append(
		// 			'Access-Control-Allow-Headers',
		// 			'Access-Control-Allow-Headers, Access-Control-Allow-Origin, Access-Control-Request-Method'
		// 		),
		// 	responseType: 'text'
		// });
		return this.http.get('https://my.api.mockaroo.com/xml-data-playground.xml?key=381a7030', {
			headers: new HttpHeaders()
				.set('Content-Type', 'text/xml')
				.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH,OPTIONS')
				.append('Access-Control-Allow-Origin', '*')
				.append(
					'Access-Control-Allow-Headers',
					'Access-Control-Allow-Headers, Access-Control-Allow-Origin, Access-Control-Request-Method'
				),
			responseType: 'text'
		});
		// return this.http.get('https://my.api.mockaroo.com/xml-data-playground.xml?key=381a7030', {
		// 	responseType: 'text'
		// });
	}
}
