export class FileContentsExtended {

    private camelCase (input: string): string {
        return input.replace( /-([a-z])/ig, function( all, letter ) {
            return letter.toUpperCase();
        });
    }

    public componentContent(inputName: string): string {
        var inputUpperCase: string;       
        inputUpperCase = inputName.charAt(0).toUpperCase() + inputName.slice(1);
        inputUpperCase = this.camelCase(inputUpperCase);
        
         var componentContent: string = 
`import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { Page } from "ui/page";

@Component({
	selector: "${inputName}",
	providers: [${inputUpperCase}Service],	
	templateUrl: "pages/${inputName}/${inputName}.component.html",
	styleUrls: ["pages/${inputName}/${inputName}-common.css", "pages/${inputName}/${inputName}.component.css"]
})
export class ${inputUpperCase}Component implements OnInit {

	constructor(private _page: Page, private _router: Router) { 
	}

	ngOnInit() {
		this._page.actionBarHidden = false;
	}
}`;
       return componentContent;
    }

    public routingContent(inputName: string): string {
        var inputUpperCase: string; 
        inputUpperCase = inputName.charAt(0).toUpperCase() + inputName.slice(1);
        inputUpperCase = this.camelCase(inputUpperCase);
        var serviceContent: string = 
`import { ModuleWithProviders }  from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { ${inputUpperCase}Component } from "./${inputName}.component";

const ${inputUpperCase}Routes: Routes = [
  { path: "${inputName}", component: ${inputUpperCase}Component },
];
export const ${inputUpperCase}Routing: ModuleWithProviders = RouterModule.forChild(${inputUpperCase}Routes);`;
        return serviceContent;
    }

    public moduleContent(inputName: string): string {
        var inputUpperCase: string; 
        inputUpperCase = inputName.charAt(0).toUpperCase() + inputName.slice(1);
        inputUpperCase = this.camelCase(inputUpperCase);
        var moduleContent: string = 
`import { NativeScriptModule } from "nativescript-angular/platform";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NgModule } from "@angular/core";

import { ${inputUpperCase}Routing } from "./${inputName}.routing";
import { ${inputUpperCase}Component } from "./${inputName}.component";

@NgModule({
  imports: [
    NativeScriptModule,
    NativeScriptFormsModule,
    ${inputUpperCase}Routing
  ],
  declarations: [
    ${inputUpperCase}Component
  ]
})
export class ${inputUpperCase}Module { }`;
        return moduleContent;
    }

    public templateContent(inputName: string): string {
        var inputUpperCase: string; 
        inputUpperCase = inputName.charAt(0).toUpperCase() + inputName.slice(1);
        inputUpperCase = this.camelCase(inputUpperCase);
        var templateContent: string = 
`<GridLayout>
	<GridLayout #background scaleX="1.4" scaleY="1.4" class="background" (loaded)="startBackgroundAnimation(background)"></GridLayout>
	<StackLayout #mainContainer class="main-container">
		<Label text="Hello ${inputName}"></Label>
	</StackLayout>
</GridLayout>`;
        return templateContent;
    }

    public iosCssContent(inputName: string): string {
        var inputUpperCase: string = inputName.charAt(0).toUpperCase() + inputName.slice(1);
        var cssContent: string = `.${inputName} {\n\n}`;
        return cssContent;
    }

    public androidCssContent(inputName: string): string {
        var inputUpperCase: string = inputName.charAt(0).toUpperCase() + inputName.slice(1);
        var cssContent: string = `.${inputName} {\n\n}`;
        return cssContent;
    }

    public cssContent(inputName: string): string {
        var inputUpperCase: string = inputName.charAt(0).toUpperCase() + inputName.slice(1);
        var cssContent: string = `.${inputName} {\n\n}`;
        return cssContent;
    }

}