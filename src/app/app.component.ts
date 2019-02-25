import { Component } from '@angular/core';
import { PullDataService } from './services/pull-data.service';
import * as xml2json from './XML2JSON.js';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: [ './app.component.sass' ]
})
export class AppComponent {
	xmlFromAPI: string;
	parsingValue: any;
	parsedValue: any;
	constructor(public dataService: PullDataService) {
		this.dataService.getData().subscribe((result) => {
			// console.log('neki rezultat', result);
			this.xmlFromAPI = result;
		});
		this.parserXML2JSON(this.xmlFromAPI);
	}

	parserXML2JSON(xmlData) {
		this.parsingValue = new DOMParser().parseFromString(xmlData, 'text/xml');
		this.parsedValue = xml2json.xmlToJson(this.parsingValue);
		console.log('element', this.parsedValue);
	}
}
